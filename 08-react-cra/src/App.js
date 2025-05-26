import "./App.css";
import StateParent1 from "./basic-components/StateParent";
import { StateParentColor27 } from "./basic-components/StateParentColor27";
import StateUpFilter28 from "./basic-components/StateUpFilter28";
import UseContextObject31 from "./basic-components/UseContextObject31";
import UseEffect32 from "./basic-components/UseEffect32";
import UseEffectApi33 from "./basic-components/UseEffectApi33";
import UseEffect33 from "./basic-components/UseEffect33";
// import UseFilter30 from "./basic-components/Usefilter30";

import UseStateArrayDelete25 from "./basic-components/UseStateArrayDelete25";
// import { UseStateArrayUpdate23 } from "./basic-components/UseStateArrayUpdate23";
import UseStateUpdate26 from "./basic-components/UseStateUpdate26";
import UseEffectClean34 from "./basic-components/UseEffectClean34";
import UseRef35 from "./basic-components/UseRef35";
import UseRef36 from "./basic-components/UseRef36";
import { UseParent37 } from "./basic-components/UseParent37";
import UseMemo38 from "./basic-components/UseMemo38";
import UseCallback39 from "./basic-components/UseCallback39";
// import FucCom1 from "./basic-components/FucCom1";
// import FucCom2 from "./basic-components/FucCom2";
// import ClassCom3 from "./basic-components/ClassCom3";
// import FunComProps4 from "./basic-components/FunComProps4";
// import ClassFunProps5 from "./basic-components/ClassFunProps5";
// import FunComProps6 from "./basic-components/FunComProps6";
// import ComCombine7 from "./basic-components/ComCombine7";
// import Gallery from "./basic-components/Gallery";
// import ComCondition9 from "./basic-components/ComCondition9";
// import ComConditionClass10 from "./basic-components/ComConditionClass10";
// import ComCondition11 from "./basic-components/ComCondition11";
// import PackingList12 from "./basic-components/PackingList12";
// import List13 from "./basic-components/List13";
// import FrontSkills from "./basic-components/FrontSkills";
// import List15 from "./basic-components/List15";
// import { Event16 } from "./basic-components/Event16";
// import EventBubble18 from "./basic-components/EventBubble18";
// import EventChild17 from "./basic-components/Eventchild17";
// import { EventMulti19 } from "./basic-components/EventMulti19";
// import { StateClass20 } from "./basic-components/StateClass20";
// import StateDark22 from "./basic-components/StateDark22";
// import StateFuncCounter21 from "./basic-components/StateFuncCounter21";

const user = {
  name: "김철수",
  age: 30,
  imageUrl: "./images/411.png",
  imageSize: 90,
};

function App() {
  const age = 20;

  return (
    <div className="App">
      {/* <h1>컴포넌트 종류</h1>
      <FucCom1 />
      <FucCom2 />
      <ClassCom3 /> */}

      {/* <h1>props 전달</h1>
      <FunComProps4 name="홍길동" userAge={age} />
      <ClassFunProps5 day="목요일" hours={100} />
      <FunComProps6
        name={user.name}
        imgUrl={user.imageUrl}
        imgSize={user.imageSize}
      ></FunComProps6> */}

      {/* <h1>컴포넌트 합성</h1>
      <ComCombine7 />
      <Gallery /> */}

      {/* <h1>조건문 렌더링</h1>
      함수
      <ComCondition9 /> */}

      {/* 클래스 */}
      {/* <ComConditionClass10 />
      <ComCondition11 isTrue={true} colorPink="pink" colorSky="skyblue" />
      <PackingList12 /> */}

      {/* <h1>리스트 렌더링</h1>
      <List13 />
      <FrontSkills /> */}
      {/* <List15 /> */}

      <h1>이벤트</h1>
      {/* <Event16 />
      <EventChild17 />
      <EventBubble18 />
      <EventMulti19 /> */}

      <h1>State</h1>
      {/* <StateClass20 />
      <StateFuncCounter21 />
      <StateDark22 /> */}
      {/* <UseStateArrayUpdate23 /> @확인 */}
      <UseStateArrayDelete25 />
      <UseStateUpdate26 />
      <StateParent1 />
      <StateParentColor27 />
      <StateUpFilter28 />
      {/* <UseFilter30 /> */}
      {/* <UseContextObject31 /> @확인해봐 */}
      <UseEffect32 />
      <UseEffectApi33 />
      <UseEffect33 />
      <UseEffectClean34 />
      <UseRef35 />
      <UseRef36 />
      <UseParent37 />
      {/* <UseMemo38 /> */}
      <UseCallback39 />
    </div>
  );
}

export default App;
