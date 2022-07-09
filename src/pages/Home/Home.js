import React from "react";
import { Card, CardBody, Button } from "reactstrap";
import styled from "styled-components";
import { Navigate, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const setUserName = () => {
    const userName = `User-${Math.floor(Math.random() * 100)}`;
    localStorage.setItem("userName", userName);
    return userName;
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      navigate("/questions");
    }
  };

  document.addEventListener("keydown", handleKeyPress);

  return (
    <Wrapper className="container" id="quiz">
      <Card className="card">
        <CardBody>
          <h2>{`Welcome ${setUserName()}`}</h2>
          <hr />
          <Button
            color="primary"
            outline={true}
            onClick={() => navigate("/questions")}
          >
            Start Quiz
          </Button>
        </CardBody>
      </Card>
    </Wrapper>
  );
};

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;

  .card {
    /* width: 100%; */
    padding: 15px 40px;
    text-align: center;
  }
`;

export default Home;
