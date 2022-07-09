import React from "react";
import styled from "styled-components";

const Answer = ({ answers }) => {
  console.log({ answers });
  return (
    <div>
      {answers?.map((answer, index) => (
        <div key={index} className="mt-4">
          <h4>
            {index + 1}.{answer?.question}
          </h4>
          <hr />
          {[...answer?.incorrect_answers, answer?.correct_answer].map(
            (item, index) => (
              <div
                key={index}
                // yourAnswer={answer.yourAnswer}
                // option={item}
                // correctAnswer={answer?.correct_answer}
                style={{
                  backgroundColor:
                    answer?.correct_answer === item
                      ? "green"
                      : answer.yourAnswer === item &&
                        answer.yourAnswer !== answer?.correct_answer
                      ? "red"
                      : "white",
                  color:
                    answer?.correct_answer === item ||
                    (answer.yourAnswer === item &&
                      answer.yourAnswer !== answer?.correct_answer)
                      ? "white"
                      : "black",
                }}
              >
                <span className="item">{item}</span>
              </div>
            )
          )}
        </div>
      ))}
    </div>
  );
};

export default Answer;
