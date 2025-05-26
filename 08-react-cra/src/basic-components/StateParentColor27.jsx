// 부모에 색상 변경 변수 선언
// 자식 요소에 변경

import { useState } from "react";

// 형제에게 전달하여 배경색 변경
function ColorBox({ color, onnChange }) {
  return (
    <input
      type="color"
      value={color}
      onChange={(e) => onnChange(e.target.value)}
    />
  );
}

function ColorDisplay({ color }) {
  return <div style={{ width: 100, height: 100, background: color }}></div>;
}

export function StateParentColor27() {
  const [color, setColor] = useState("#ff0000");
  return (
    <div>
      <h2>원하는 색상을 선택하세요.</h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ColorBox color={color} onnChange={setColor} />
        <ColorDisplay color={color} />
      </div>
    </div>
  );
}
