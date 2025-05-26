import { UserContextProfile } from "./UserContextProfile";
import PersonContext from "./PersonContext";

export default function UseContextObject31() {
  // UserContextProfile 넣기

  const users = {
    name: "홍길동",
    email: "ghdrlfehd77@naver.com",
    tel: "010-0000-0000",
  };

  return (
    <div>
      <UserContextProfile.Provider value={users}>
        <PersonContext />
      </UserContextProfile.Provider>
    </div>
  );
}
// UserContextProfile
// h2 프로필
// p 이름
// 이메일
// 전화번호

// PersonContext
