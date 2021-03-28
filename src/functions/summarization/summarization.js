const deepai = require("deepai");

deepai.setApiKey("quickstart-QUdJIGlzIGNvbWluZy4uLi4K");

async function summarize(text) {
  let resp = await deepai.callStandardApi("summarization", {
    text: text,
  });

  let summarized_text = resp.output;

  return summarized_text;
}

export default summarize;
