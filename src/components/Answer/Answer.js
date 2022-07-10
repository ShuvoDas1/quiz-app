import React from "react";

const Answer = ({ answers }) => {
  return (
    <div data-testid="answer">
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
