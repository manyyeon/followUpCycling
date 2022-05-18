import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../App.css";
import styles from "../styles/SignIn/SignIn.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const SignIn = ({ isLoggedIn, setIsLoggedIn }) => {
  const users = useSelector(state => state.users);
  return (
    <div className={cx("SignIn")}>
      <div className={cx("Title")}>Sign In</div>
      <p className={cx("Logo")}>모두의 반찬</p>

      <div className={cx("Form")}>
        <input className={cx("Input")} name="ID" type="email" placeholder="아이디" required />
        <input className={cx("Input")} name="password" type="password" placeholder="비밀번호" required />
        <Link to="/">
          <button className={cx("Submit")} type="text" onClick={() => {
            setIsLoggedIn(true);
          }}>로그인</button>
        </Link>
      </div>
      
      <p className={cx("Text")}>
        <span>회원이 아니신가요?</span>
        <Link to="/SignUp">
          <span className={cx("Toggle")}>회원가입</span>
        </Link>
      </p>
    </div>
  );
};

export default SignIn;
