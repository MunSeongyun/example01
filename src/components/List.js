import React, { useState } from "react";
import ConfigBox from "./ConfigBox";

const List = () => {
  const [text, setText] = useState("");
  const [line, setLine] = useState([]);
  const [idNum, setNum] = useState(1);
  console.log(line);
  const upload = (e) => {
    e.preventDefault();
    if (text !== "") {
      const llet = {
        id: idNum,
        text: text,
      };

      setLine([...line, llet]);
      setText("");
      setNum(idNum + 1);
    }
  };
  const changeable = (e) => {
    setText(e.target.value);
  };

  const deleteText = (idx) => {
    setLine(line.filter((arr) => arr.id !== idx));
    console.log(idx);
  };
  const reLine = (lLet) => {
    // reload랑 reLine은 둘 다 수정에 쓰이는 함수니까 합치는게 좋을듯, 둘 중 하나라도 없으면 제대로 동작이 일어나지
    // 않는데, 둘을 분리했을때 얻는 이득이 없음
    const fixContent = line.map((arr) => (arr.id === lLet.id ? lLet : arr));
    setLine(fixContent);
  };

  return (
    <>
      <form onSubmit={upload}>
        <input
          onChange={changeable}
          value={text}
          // onKeyDown은 필요 없어서 지우는게 좋음
          onKeyDown={changeable}
        ></input>
        <button>upload</button>
      </form>

      <ul>
        {line.map((content) => {
          return (
            <ConfigBox
              key={content.id}
              content={content}
              deleteText={deleteText}
              reLine={reLine}
            />
          );
        })}
      </ul>
    </>
  );
};
export default List;
