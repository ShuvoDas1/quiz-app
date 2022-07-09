import * as actionType from "../actionType";

const initialState = {
  loading: false,
  score: 0,
  error: null,
  questions: [],
  answers: [],
};

const quizReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionType.GET_ALL_QUS_REQUEST_SEND:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case actionType.GET_ALL_QUS_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        questions: payload,
      };

    case actionType.GET_ALL_QUS_REQUEST_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case actionType.COUNT_SCORE:
      return {
        ...state,
        score:
          payload.answer === payload.correctAnswer
            ? state.score + 1
            : state.score,
      };

    case actionType.RESET_SCORE:
      return {
        ...state,
        score: 0,
        answers: [],
      };

    case actionType.SUBMIT_ANSWER:
      const result = payload.filter(
        (item, index) => item.yourAnswer === item.correct_answer
      );

      return {
        ...state,
        answers: payload,
        score: result.length,
      };

    default:
      return state;
  }
};

export default quizReducer;
