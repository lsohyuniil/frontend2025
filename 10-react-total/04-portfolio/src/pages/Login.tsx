import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [userPW, setUserPW] = useState("");
  const { isLogin, login, logout } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (userId === "admin" && userPW === "1234") {
      login(userId);
    } else {
      alert("아이디 또는 비밀번호가 틀립니다. 다시 입력하세요.");
    }
  };

  return (
    <section>
      <div className="inner">
        <h2>로그인</h2>
        {isLogin ? (
          <button onClick={logout}>로그아웃</button>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              placeholder="아이디"
            />
            <input
              type="password"
              value={userPW}
              onChange={(e) => setUserPW(e.target.value)}
              placeholder="비밀번호"
            />
            <button>로그인</button>
          </form>
        )}
      </div>
    </section>
  );
};
export default Login;
