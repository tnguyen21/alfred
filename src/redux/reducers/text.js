import { ADD_INPUT_TEXT, ADD_SUMMARY } from "../actionTypes";

const initialState = {
  inputText: "",
  summary: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_INPUT_TEXT: {
      const { id, text } = action.payload;
      return {
        ...state,
        inputText: text,
      };
    }
    case ADD_SUMMARY: {
      const { id, text } = action.payload;
      return {
        ...state,
        summary: text,
      };
    }
  }
}
