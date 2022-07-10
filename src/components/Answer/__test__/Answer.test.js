import React from "react";
import ReactDOM from "react-dom";
import Answer from "../Answer";
import { render } from "@testing-library/react";

it("renders without crashing", () => {
  const answers = [
    {
      question: "What is the capital of France?",
      correct_answer: "Paris",
      incorrect_answers: ["Rome", "Berlin", "London"],
    },
    {
      question: "What is the capital of Germany?",
      correct_answer: "Berlin",
      incorrect_answers: ["Paris", "Rome", "London"],
    },
  ];
  const { getByTestId } = render(<Answer answers={answers} />);
  expect(getByTestId).toMatchSnapshot();
});
