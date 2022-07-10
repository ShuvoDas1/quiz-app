import React from "react";
import { Button } from "reactstrap";

const Question = ({
  questions,
  currentQuestion = 0,
  goToPrevious,
  goToNext,
  handleChange,
  skipQus,
  answer,
  submit,
}) => {
  return (
    <div>
      <h2>
        {currentQuestion + 1}.{questions[currentQuestion]?.question}
      </h2>
      <hr />
      {questions.length > 0 &&
        [
          ...questions[currentQuestion]?.incorrect_answers,
          questions[currentQuestion]?.correct_answer,
        ]?.map((option, index) => (
          <div key={index} className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              value={option}
              style={{ cursor: "pointer" }}
              onChange={handleChange}
              checked={answer === option ? true : false}
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              {option}
            </label>
          </div>
        ))}
      <div className="d-flex justify-content-between mt-3">
        <div>
          {currentQuestion > 0 && (
            <Button onClick={goToPrevious} color="primary">
              Previous
            </Button>
          )}
        </div>
        <div>
          {currentQuestion + 1 < questions?.length && !answer && (
            <Button
              onClick={skipQus}
              color="info"
              outline={true}
              className="me-3"
            >
              Skip
            </Button>
          )}
          {currentQuestion + 1 < questions?.length && (
            <Button onClick={goToNext} color="success">
              Next
            </Button>
          )}

          {currentQuestion + 1 === questions?.length && (
            <Button color="success" onClick={submit}>
              Submit
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Question;
