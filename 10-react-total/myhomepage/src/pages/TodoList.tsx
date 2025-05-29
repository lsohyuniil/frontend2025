import React from "react";
import SectionTitle from "../components/SectionTitle";

const TodoList = () => {
  return (
    <div className="content-inner">
      <SectionTitle
        title="TodoList"
        subTitle="오늘의 할일 스케줄을 관리해보세요."
      />
      <div>TodoList 본문</div>
    </div>
  );
};

export default TodoList;
