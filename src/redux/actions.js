import { ADD_INPUT_TEXT, ADD_SUMMARY } from "./actionTypes";

let idCounter = 0;

export const setInputText = (text) => ({
  type: ADD_INPUT_TEXT,
  payload: { id: ++idCounter, text },
});

export const setSummary = (text) => ({
  type: ADD_SUMMARY,
  payload: { id: idCounter, text },
});
