import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Card, CardBody } from "reactstrap";
import Answer from "../../components/Answer/Answer";
import Question from "../../components/Question/Question";
import { resetScore } from "../../store/quiz/quizAction";
import { Wrapper } from "../Home/Home";

const Results = () => {
  const { score, answers, questions } = useSelector((state) => state.quiz);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const takeAnotherQuiz = () => {
    dispatch(resetScore());
    navigate("/questions", { replace: true });
  };

  return (
    <div>
      <Card>
        <CardBody>
          <div className="text-center">
            <h2 className="text-center">Your Score: {score}</h2>
            <Button
              className="mt-3"
              outline={true}
              color="primary"
              onClick={takeAnotherQuiz}
            >
              Take another quiz
            </Button>
          </div>
          <Answer answers={answers} />
        </CardBody>
      </Card>
    </div>
  );
};

export default Results;
