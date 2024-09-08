import React, { useState } from "react";

const ConfigBox = ({ content, deleteText, reLine }) => {
  // fixNum은 사용할 필요가 없음, 왜냐하면 content.id는 변하지 않는 값이기 때문에
  // 따로 저장해둘 필요 없이 그때그때 content.id로 쓰면 됨
  const [fixNum, setFixNum] = useState(content.id);
  const [fixText, setFixText] = useState("");
  const [changeUp, setChangeUp] = useState(false);

  const changeText = (content) => {
    setChangeUp(true);
  };

  const changeabler = (e) => {
    setFixText(e.target.value);
  };

  const reload = (e) => {
    e.preventDefault();
    if (fixText !== "") {
      const lLet = {
        id: fixNum,
        text: fixText,
      };
      reLine(lLet);
      setFixText("");
      setChangeUp(false);
    }
  };

  return changeUp && fixNum === content.id ? (
    <form key={content.id} onSubmit={(e) => reload(e)}>
      <input onChange={changeabler} value={fixText}></input>
      <button>confirm</button>
    </form>
  ) : (
    <div key={content.id}>
      <li>{content.text}</li>
      <button onClick={() => deleteText(content.id)}>delete</button>
      <button onClick={() => changeText(content)}>rewrite</button>
    </div>
  );
};

export default ConfigBox;
