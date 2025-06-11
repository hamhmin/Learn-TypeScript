import { ReactElement, useState } from "react";

interface Props {
  onClickAdd: (text: string) => void;
  children: ReactElement; // children을 넣고싶으면 << 요거 넣어야댐
}

export default function Editor(props: Props) {
  // const [text, setText] = useState<string>();
  const [text, setText] = useState("");
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onClickButton = () => {
    props.onClickAdd(text);
    setText("");
  };
  return (
    <div>
      <input type="text" value={text} onChange={onChangeInput} />
      <button onClick={onClickButton}>추가</button>
    </div>
  );
}
