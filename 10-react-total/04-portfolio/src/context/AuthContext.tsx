import { createContext, useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";

// context에 저장될 값들의 타입 정의하기
interface AuthContextType {
  isLogin: boolean;
  userId: string | null;
  login: (email: string) => void;
  logout: () => void;
}

// 자식요소 전달되는 요소 타입 선언하기
interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [isLogin, setIsLogin] = useState<boolean>(!!cookies.user);
  const [userId, setUserId] = useState<string | null>(cookies.user || null);

  const login = (email: string) => {
    const expireDate = new Date(new Date().getTime() + 2 * 60 * 1000);

    setCookie("user", email, { path: "/", expires: expireDate });
    setIsLogin(true);
    setUserId(email);
  };

  const logout = () => {
    removeCookie("user", { path: "/" });
    setIsLogin(false);
    setUserId(null);
  };

  useEffect(() => {
    if (cookies.user) {
      setIsLogin(true);
      setUserId(cookies.user);
    } else {
      setIsLogin(false);
      setUserId(null);
    }
  }, [cookies.user]);

  return (
    <AuthContext.Provider value={{ isLogin, login, userId, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// context 값이 null인 경우 에러 발생
// useContext(AuthContext)를 직접 쓰지 않고, 재선언하여 사용
export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) throw new Error("에러");

  return context;
};
