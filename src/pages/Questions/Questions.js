import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Card, CardBody, Spinner } from "reactstrap";
import Question from "../../components/Question/Question";
import {
  countResults,
  getAllQuestions,
  submitAnswer,
} from "../../store/quiz/quizAction";

const Questions = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState("");
  const [answers, setAnswers] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, questions } = useSelector((state) => state.quiz);

  useEffect(() => {
    dispatch(getAllQuestions());
  }, []);

  const goToPrevious = () => {
    setCurrentQuestion((currentQuestion) => currentQuestion - 1);
    const previousQus = answers.find(
      (item, index) => index === currentQuestion - 1
    );

    setAnswer(previousQus?.yourAnswer);
  };

  const goToNext = () => {
    if (!answer) {
      alert("Please select an answer");
      return;
    }

    const foundIndex = answers.findIndex(
      (item, index) => index === currentQuestion
    );

    if (foundIndex !== -1) {
      answers[foundIndex].yourAnswer = answer;
    } else {
      addAnswer();
    }

    setCurrentQuestion((currentQuestion) => currentQuestion + 1);
    setAnswer("");
  };

  const skipQus = () => {
    addAnswer();
    setCurrentQuestion((currentQuestion) => currentQuestion + 1);
  };

  const goToResults = () => {
    dispatch(
      submitAnswer([
        ...answers,
        { ...questions[currentQuestion], yourAnswer: answer },
      ])
    );
    navigate("/results");
  };

  const addAnswer = () => {
    setAnswers((answers) => [
      ...answers,
      { ...questions[currentQuestion], yourAnswer: answer },
    ]);
  };

  return (
    <div className="p-5">
      <Card>
        <CardBody>
          {questions && !loading ? (
            <Question
              data-testid="question"
              questions={questions}
              currentQuestion={currentQuestion}
              goToPrevious={goToPrevious}
              goToNext={goToNext}
              handleChange={(e) => setAnswer(e.target.value)}
              skipQus={skipQus}
              answer={answer}
              submit={goToResults}
            />
          ) : (
            <Spinner size="large" variant="primary" />
          )}
        </CardBody>
      </Card>
    </div>
  );
};

export default Questions;
