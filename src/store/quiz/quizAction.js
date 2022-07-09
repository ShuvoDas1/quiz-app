import * as actionType from "../actionType";
import axios from "axios";

export const countResults = (answer, correctAnswer) => (dispatch) => {
  dispatch({
    type: actionType.COUNT_SCORE,
    payload: {
      answer,
      correctAnswer,
    },
  });
};

export const resetScore = () => (dispatch) => {
  dispatch({
    type: actionType.RESET_SCORE,
  });
};

// GET ALL QUESTIONS

export const getAllQuestions = () => async (dispatch, getState) => {
  const { questions } = getState().quiz;
  if (questions.length < 1) {
    try {
      dispatch({
        type: actionType.GET_ALL_QUS_REQUEST_SEND,
      });

      const { data } = await axios(
        "https://opentdb.com/api.php?amount=10&category=10&difficulty=easy"
      );

      if (data) {
        dispatch({
          type: actionType.GET_ALL_QUS_REQUEST_SUCCESS,
          payload: data.results,
        });
      } else {
        dispatch({
          type: actionType.GET_ALL_QUS_REQUEST_FAIL,
          payload: "error",
        });
      }
    } catch (error) {
      dispatch({
        type: actionType.GET_ALL_QUS_REQUEST_FAIL,
        payload: error.message,
      });
    }
  }
};

// SUBMIT ANSWERS

export const submitAnswer = (answers) => async (dispatch) => {
  dispatch({
    type: actionType.SUBMIT_ANSWER,
    payload: answers,
  });
};
