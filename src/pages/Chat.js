import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ChatMessages } from "../components/ChatMessages";
import { ChatSelect } from "../components/ChatSelect";
import { UserList } from "../components/UserList";
import { Users } from "../components/Users";
import { ChatContext } from "../context/chat/ChatContext";
import "../css/chat.css";

export const Chat = () => {
  const { chatState } = useContext(ChatContext);

  return (
    <Container fluid>
      <Row>
        <Col>
          <Users />
        </Col>
        <Col xs={6}>
          {chatState.chatActivo ? <ChatMessages /> : <ChatSelect />}
        </Col>
        <Col>
          <UserList />
        </Col>
      </Row>
    </Container>
  );
};
