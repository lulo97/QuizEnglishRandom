import { h } from "https://esm.sh/preact";
import { useState } from "https://esm.sh/preact/hooks";
import htm from "https://esm.sh/htm";

const html = htm.bind(h);

export function SingleChoicePage({
  question = "",
  answers = [],
  correct_answer = "",
  explanation = ""
}) {
  const [selected, setSelected] = useState(null);
  const [isConfirm, setIsConfirm] = useState(false);

  function handleConfirm() {
    setIsConfirm(true);
  }

  // ✅ return is inside the component function
  return html`
    <div style=${{ fontSize: "20px" }}>
      <div style=${{ fontSize: "24px" }}>
        <strong>${question}</strong>
      </div>

      <ul style=${{ listStyleType: "none", padding: 0 }}>
        ${answers.map((ele) => {
          let style = "";

          if (isConfirm) {
            if (ele.toString() === correct_answer.toString()) {
              style = "color: green; font-weight: bold;";
            } else if (ele === selected && selected !== correct_answer) {
              style = "color: red; font-weight: bold;";
            }
          }

          return html`
            <li
              style=${style}
              onClick=${() => !isConfirm && setSelected(ele)}
            >
              <input
                type="radio"
                checked=${selected === ele}
                disabled=${isConfirm}
              />
              ${ele}
            </li>
          `;
        })}
      </ul>

      <button onClick=${handleConfirm} disabled=${isConfirm}>
        Confirm
      </button>

      ${isConfirm &&
      html`<div style="margin-top: 10px;">
        <em>${explanation}</em>
      </div>`}
    </div>
  `;
}
