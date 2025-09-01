import { h } from "https://esm.sh/preact";
import htm from "https://esm.sh/htm";
import { SingleChoicePage } from "./SingleChoicePage.js";
import { SingleChoiceData } from "./SingChoiceData.js";

const html = htm.bind(h);

export function App(props) {
  console.log(SingleChoiceData);

  const randomItem =
    SingleChoiceData[Math.floor(Math.random() * SingleChoiceData.length)];

  return html`<div>
    <${SingleChoicePage}
      question="${randomItem.question}"
      answers=${randomItem.answers}
      correct_answer="${randomItem.correct_answer}"
      explanation="${randomItem.explanation}"
    />
  </div>`;
}
