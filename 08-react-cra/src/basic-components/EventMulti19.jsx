import { useState } from "react";

export function EventMulti19() {
  // 상태 변수
  const [inputs, setInput] = useState({
    name: "1",
    nickName: "2",
  });

  // 비구조화 할당
  const { name, nickName } = inputs;

  const handleChange = (e) => {
    const { value, name } = e.target;
    setInput({
      ...inputs,
      [name]: value, // name 키를 가진 value 설정하기
    });
  };

  const handlereset = () => {
    setInput({
      name: "",
      nickName: "",
    });
  };

  return (
    <div>
      <input
        name="name"
        placeholder="이름"
        type="text"
        value={name}
        onChange={handleChange}
      />
      <input
        name="nickName"
        placeholder="닉네임"
        value={nickName}
        onChange={handleChange}
      />
      <button onClick={handlereset}>초기화</button>
      <p>
        이름 : {name} / 닉네임 : {nickName}
      </p>
    </div>
  );
}
