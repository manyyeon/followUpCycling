import { React, useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router";
import styles from "../styles/MyPage/MyPage.module.scss";
import classNames from "classnames/bind";
import UserProducts from "../components/UserProducts";
import UserFeeds from "../components/UserFeeds";
import Profile from "./Profile";

const cx = classNames.bind(styles);

const SellerPage = () => {
  const location = useLocation();
  const [sellerInfo, setSellerInfo] = useState({
    nickname: "닉네임이 등록되지 않았습니다.",
    introduce: "소개글이 등록되지 않았습니다.",
  });
  function getProfile() {
    axios
      .get(`http://127.0.0.1:8000/mypage/${location.state.sId}/`)
      //.get("http://127.0.0.1:8000/mypage/2/")
      .then(function (response) {
        if(response.data.first_name !== '') {
          setSellerInfo({
            ...sellerInfo,
            nickname: response.data.first_name,
          });
        }
        if(response.data.last_name !== '') {
          setSellerInfo({
            ...sellerInfo,
            introduce: response.data.last_name,
          });
        }
        
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  useEffect(() => {
    getProfile();
  }, []);
  return (
    <div className={cx("MyPage")}>
      <Profile profileInfo={sellerInfo} userId={location.state.sId}/>
      <p>{`${sellerInfo.nickname} 등록한 상품`}</p>
      <UserProducts uId={location.state.sId} />
      <p>{`${sellerInfo.nickname} 등록한 피드`}</p>
      <UserFeeds uId={location.state.sId} />
    </div>
  );
};

export default SellerPage;
