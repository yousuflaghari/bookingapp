import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { FiSend, FiUser, FiMessageCircle } from "react-icons/fi";

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
  height:100vh;
`;

const Sidebar = styled.div`
  width:320px;
  background:#1f2937;
  color:white;
  display:flex;
  flex-direction:column;
`;

const SidebarHeader = styled.div`
  padding:20px;
  font-size:18px;
  font-weight:bold;
  border-bottom:1px solid rgba(255,255,255,0.1);
`;

const ChatList = styled.div`
  flex:1;
  overflow-y:auto;
`;

const ChatItem = styled.div`
  padding:15px;
  border-bottom:1px solid rgba(255,255,255,0.05);
  cursor:pointer;
  background:${props => props.active ? "#374151" : "transparent"};

  &:hover {
    background:#374151;
  }
`;

const ChatName = styled.div`
  font-weight:bold;
`;

const ChatStatus = styled.div`
  font-size:12px;
  color:${props => props.online ? "#22c55e" : "#9ca3af"};
`;

/* ================= CHAT AREA ================= */

const ChatArea = styled.div`
  flex:1;
  display:flex;
  flex-direction:column;
  background:white;
`;

const ChatHeader = styled.div`
  padding:20px;
  border-bottom:1px solid #eee;
  display:flex;
  align-items:center;
  gap:10px;
  font-weight:bold;
`;

const MessagesContainer = styled.div`
  flex:1;
  padding:20px;
  overflow-y:auto;
  display:flex;
  flex-direction:column;
  gap:12px;
`;

const MessageBubble = styled.div`
  max-width:60%;
  padding:12px 15px;
  border-radius:12px;
  font-size:14px;
  background:${props => props.admin ? "#2563eb" : "#e5e7eb"};
  color:${props => props.admin ? "white" : "black"};
  align-self:${props => props.admin ? "flex-end" : "flex-start"};
`;

const Time = styled.div`
  font-size:10px;
  margin-top:4px;
  opacity:0.7;
`;

/* ================= INPUT ================= */

const InputArea = styled.div`
  padding:15px;
  border-top:1px solid #eee;
  display:flex;
  gap:10px;
`;

const Input = styled.input`
  flex:1;
  padding:12px;
  border-radius:8px;
  border:1px solid #ccc;
`;

const SendButton = styled.button`
  padding:12px 18px;
  border:none;
  border-radius:8px;
  background:#2563eb;
  color:white;
  cursor:pointer;
  display:flex;
  align-items:center;
  gap:6px;

  &:hover {
    background:#1d4ed8;
  }
`;

/* ================= SAMPLE DATA ================= */

const usersData = [
  {
    id: 1,
    name: "Ali Khan",
    online: true,
    messages: [
      { id: 1, text: "Hello, I need help", admin: false, time: "10:00" },
      { id: 2, text: "Sure, how can I assist?", admin: true, time: "10:01" },
    ],
  },
  {
    id: 2,
    name: "Sara Ahmed",
    online: false,
    messages: [
      { id: 1, text: "Booking issue", admin: false, time: "09:10" },
    ],
  },
];

/* ================= COMPONENT ================= */

const SupportChat = () => {
  const [users, setUsers] = useState(usersData);
  const [activeUserId, setActiveUserId] = useState(1);
  const [input, setInput] = useState("");

  const activeUser = users.find(u => u.id === activeUserId);

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMessage = {
      id: Date.now(),
      text: input,
      admin: true,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setUsers(prev =>
      prev.map(user =>
        user.id === activeUserId
          ? {
              ...user,
              messages: [...user.messages, newMessage],
            }
          : user
      )
    );

    setInput("");
  };

  return (
    <>
      <GlobalStyle />

      <Container>

        {/* ================= SIDEBAR ================= */}

        <Sidebar>

          <SidebarHeader>
            <FiMessageCircle /> Support Chats
          </SidebarHeader>

          <ChatList>
            {users.map(user => (
              <ChatItem
                key={user.id}
                active={user.id === activeUserId}
                onClick={() => setActiveUserId(user.id)}
              >
                <ChatName>{user.name}</ChatName>
                <ChatStatus online={user.online}>
                  {user.online ? "Online" : "Offline"}
                </ChatStatus>
              </ChatItem>
            ))}
          </ChatList>

        </Sidebar>

        {/* ================= CHAT AREA ================= */}

        <ChatArea>

          <ChatHeader>
            <FiUser />
            {activeUser?.name}
          </ChatHeader>

          <MessagesContainer>

            {activeUser?.messages.map(msg => (
              <MessageBubble key={msg.id} admin={msg.admin}>
                {msg.text}
                <Time>{msg.time}</Time>
              </MessageBubble>
            ))}

          </MessagesContainer>

          <InputArea>

            <Input
              placeholder="Type message..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && sendMessage()}
            />

            <SendButton onClick={sendMessage}>
              <FiSend />
              Send
            </SendButton>

          </InputArea>

        </ChatArea>

      </Container>
    </>
  );
};

export default SupportChat;