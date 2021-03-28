export const getTextState = (store) => store.text;

export const getInputText = (store) =>
  getTextState(store) ? getTextState(store).inputText : "";

export const getSummary = (store) =>
  getTextState(store) ? getTextState(store).summary : "";
