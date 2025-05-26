import "./App.css";
// import FunComProps4 from "./basic-components/FunComProps4";
// import ClassComProps5 from "./basic-components/ClassComProps5";
// import FunComProps6 from "./basic-components/FunComProps6";
// import ComCombine7 from "./basic-components/ComCombine7";
// import Gallery from "./basic-components/Gallery";
// import ComCondition9 from "./basic-components/ComCondition9";
// import PackingList12 from "./basic-components/PackingList12";
import { Event16 } from "./basic-components/ComEvent16";
import EventChild17 from "./basic-components/EventChild17";
import EventBubble18 from "./basic-components/EventBubble18";

// interface User {
//   name: string;
//   age: number;
//   imageUrl: string;
//   imageSize: number;
// }

// const user: User = {
//   name: "홍길동",
//   age: 30,
//   imageUrl: "./images/7.png",
//   imageSize: 100,
// };

function App() {
  return (
    <>
      {/* <h1>props</h1>
      <FunComProps4 uname={"짱구"} uage={5} />
      <ClassComProps5 day="금요일" num={2} />
      <FunComProps6
        name={user.name}
        age={user.age}
        imgUrl={user.imageUrl}
        imgSize={user.imageSize}
      />
      <ComCombine7 />
      <Gallery />
      <ComCondition9 />
      <PackingList12 /> */}
      <Event16 />
      <EventChild17 />
      <EventBubble18 />
    </>
  );
}

export default App;
