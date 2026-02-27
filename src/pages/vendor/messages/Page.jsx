import React, { useState } from "react";
import styled from "styled-components";

// ================= Styled Components =================

const Container = styled.div`
  display: flex;
  padding: 30px;
  min-height: 100vh;
  background: #f4f6f8;
  font-family: Arial, sans-serif;
`;

const Sidebar = styled.div`
  width: 300px;
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  margin-right: 20px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
`;

const ChatArea = styled.div`
  flex: 1;
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: #222;
`;

const Conversation = styled.div`
  padding: 10px;
  border-radius: 8px;
  background: ${({ selected }) => selected ? "#007bff" : "#f4f6f8"};
  color: ${({ selected }) => selected ? "#fff" : "#222"};
  margin-bottom: 10px;
  cursor: pointer;

  &:hover {
    background: ${({ selected }) => selected ? "#0056b3" : "#e0e0e0"};
  }
`;

const MessagesContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  margin-bottom: 20px;
`;

const Message = styled.div`
  max-width: 70%;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 12px;
  background: ${({ sender }) => sender === "vendor" ? "#007bff" : "#e0e0e0"};
  color: ${({ sender }) => sender === "vendor" ? "#fff" : "#222"};
  align-self: ${({ sender }) => sender === "vendor" ? "flex-end" : "flex-start"};
`;

const InputRow = styled.div`
  display: flex;
  gap: 10px;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  padding: 10px 14px;
  border-radius: 8px;
  border: none;
  background: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

// ================= Component =================

const VendorMessages = () => {

  const [conversations, setConversations] = useState([
    { id: 1, customer: "John Doe", messages: [
      { sender: "customer", text: "Hi, I have a question about my booking." },
      { sender: "vendor", text: "Sure, how can I help?" }
    ]},
    { id: 2, customer: "Jane Smith", messages: [
      { sender: "customer", text: "Can I change my booking date?" }
    ]},
    { id: 3, customer: "Ali Khan", messages: [
      { sender: "customer", text: "Is breakfast included?" },
      { sender: "vendor", text: "Yes, it is included." }
    ]}
  ]);

  const [selectedConversation, setSelectedConversation] = useState(conversations[0]);
  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if(newMessage.trim() === "") return;
    const updatedConversations = conversations.map(conv => {
      if(conv.id === selectedConversation.id){
        return {
          ...conv,
          messages: [...conv.messages, { sender: "vendor", text: newMessage }]
        };
      }
      return conv;
    });
    setConversations(updatedConversations);
    setSelectedConversation({
      ...selectedConversation,
      messages: [...selectedConversation.messages, { sender: "vendor", text: newMessage }]
    });
    setNewMessage("");
  };

  return (
    <Container>
      <Sidebar>
        <Title>Conversations</Title>
        {conversations.map(conv => (
          <Conversation 
            key={conv.id} 
            selected={selectedConversation.id === conv.id}
            onClick={() => setSelectedConversation(conv)}
          >
            {conv.customer}
          </Conversation>
        ))}
      </Sidebar>

      <ChatArea>
        <MessagesContainer>
          {selectedConversation.messages.map((msg,index)=>(
            <Message key={index} sender={msg.sender}>{msg.text}</Message>
          ))}
        </MessagesContainer>

        <InputRow>
          <Input 
            placeholder="Type your message..."
            value={newMessage}
            onChange={e=>setNewMessage(e.target.value)}
            onKeyDown={e => e.key === "Enter" && handleSend()}
          />
          <Button onClick={handleSend}>Send</Button>
        </InputRow>
      </ChatArea>
    </Container>
  );
};

export default VendorMessages;