import React from "react";
import { Link } from "react-router-dom";
import "./scss/header.scss";
import { useCartStore } from "../store/useStore";

type MenuItem = {
  key: string;
  label: string;
};

const menus: MenuItem[] = [
  { key: "man", label: "남자" },
  { key: "women", label: "여자" },
  { key: "jewelry", label: "보석" },
  { key: "electric", label: "전자제품" },
];
const Header = () => {
  const { cartCount } = useCartStore();

  return (
    <header>
      <div className="content-inner">
        <div className="header-left">
          <h1 className="logo">
            <Link to={"/"}>
              <img src="./images/logo.svg" alt="logo" />
            </Link>
          </h1>
          <nav>
            <ul>
              {menus.map((menu) => (
                <li key={menu.key}>
                  <Link to={`/${menu.key}`}>{menu.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="header-right">
          <ul>
            <li>
              <Link to={"/login"}>
                <img src="./images/loginPassword.png" alt="로그인" />
                <p>LOGIN</p>
              </Link>
            </li>
            <li>
              <Link to={"/signup"}>
                <img src="./images/loginMember.png" alt="회원가입" />
                <p>MEMBER</p>
              </Link>
            </li>
            <li>
              <Link to={"/cart"}>
                <img src="./images/cart.png" alt="장바구니" />
                <p>
                  장바구니<span className="cart-num">{cartCount}</span>
                </p>
              </Link>
            </li>
          </ul>
          <div className="search-btn">
            <input type="text" placeholder="search" />
            <p className="search-icon">
              <img src="./images/search.png" alt="검색" />
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
