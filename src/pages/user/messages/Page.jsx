import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { FiSend } from "react-icons/fi";

/* ================= GLOBAL ================= */

const GlobalStyle = createGlobalStyle`
  body {
    margin:0;
    font-family: Arial, Helvetica, sans-serif;
    background:#f4f6f8;
  }
`;

/* ================= LAYOUT ================= */

const Container = styled.div`
  display:flex;
  height:90vh;
  max-width:1100px;
  margin:30px auto;
  background:white;
  border-radius:12px;
  overflow:hidden;
  box-shadow:0 4px 15px rgba(0,0,0,0.08);
`;

/* ================= SIDEBAR ================= */

const Sidebar = styled.div`
  width:30%;
  border-right:1px solid #eee;
  background:#fafafa;
`;

const ConversationItem = styled.div`
  padding:15px;
  cursor:pointer;
  border-bottom:1px solid #eee;
  background:${props => props.active ? "#e9f2ff" : "transparent"};

  &:hover {
    background:#f1f3f5;
  }
`;

const Name = styled.div`
  font-weight:bold;
`;

const LastMessage = styled.div`
  font-size:13px;
  color:#6c757d;
`;

/* ================= CHAT AREA ================= */

const ChatArea = styled.div`
  flex:1;
  display:flex;
  flex-direction:column;
`;

const ChatHeader = styled.div`
  padding:15px;
  border-bottom:1px solid #eee;
  font-weight:bold;
  background:#f8f9fa;
`;

const MessagesContainer = styled.div`
  flex:1;
  padding:20px;
  overflow-y:auto;
  display:flex;
  flex-direction:column;
  gap:10px;
`;

const MessageBubble = styled.div`
  max-width:60%;
  padding:10px 14px;
  border-radius:12px;
  background:${props => props.me ? "#0d6efd" : "#e9ecef"};
  color:${props => props.me ? "white" : "black"};
  align-self:${props => props.me ? "flex-end" : "flex-start"};
`;

const InputArea = styled.div`
  display:flex;
  padding:15px;
  border-top:1px solid #eee;
  gap:10px;
`;

const Input = styled.input`
  flex:1;
  padding:10px;
  border-radius:8px;
  border:1px solid #ccc;
`;

const SendButton = styled.button`
  padding:10px 16px;
  border:none;
  border-radius:8px;
  background:#0d6efd;
  color:white;
  cursor:pointer;
  display:flex;
  align-items:center;
  gap:6px;

  &:hover {
    background:#0b5ed7;
  }
`;

/* ================= SAMPLE DATA ================= */

const conversationsData = [
  {
    id:1,
    name:"Restaurant Support",
    messages:[
      { text:"Hello! How can we help you?", me:false },
      { text:"I want to change my booking time.", me:true }
    ]
  },
  {
    id:2,
    name:"Customer Care",
    messages:[
      { text:"Your booking is confirmed.", me:false }
    ]
  }
];

/* ================= COMPONENT ================= */

const Messages = () => {
  const [conversations, setConversations] = useState(conversationsData);
  const [activeId, setActiveId] = useState(1);
  const [input, setInput] = useState("");

  const activeChat = conversations.find(c => c.id === activeId);

  const sendMessage = () => {
    if(!input.trim()) return;

    const updated = conversations.map(conv => {
      if(conv.id === activeId) {
        return {
          ...conv,
          messages: [...conv.messages, { text: input, me:true }]
        };
      }
      return conv;
    });

    setConversations(updated);
    setInput("");
  };

  return (
    <>
      <GlobalStyle />
      <Container>

        {/* Sidebar */}
        <Sidebar>
          {conversations.map(conv => (
            <ConversationItem
              key={conv.id}
              active={conv.id === activeId}
              onClick={() => setActiveId(conv.id)}
            >
              <Name>{conv.name}</Name>
              <LastMessage>
                {conv.messages[conv.messages.length - 1]?.text}
              </LastMessage>
            </ConversationItem>
          ))}
        </Sidebar>

        {/* Chat Area */}
        <ChatArea>
          <ChatHeader>{activeChat?.name}</ChatHeader>

          <MessagesContainer>
            {activeChat?.messages.map((msg, i) => (
              <MessageBubble key={i} me={msg.me}>
                {msg.text}
              </MessageBubble>
            ))}
          </MessagesContainer>

          <InputArea>
            <Input
              placeholder="Type a message..."
              value={input}
              onChange={e => setInput(e.target.value)}
            />
            <SendButton onClick={sendMessage}>
              <FiSend /> Send
            </SendButton>
          </InputArea>
        </ChatArea>

      </Container>
    </>
  );
};

export default Messages;