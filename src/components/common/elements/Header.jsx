import React from "react";
import styled from "styled-components";
import iconLock from "../../../assets/icons/ico_lock_white.svg";
import iconSiren from "../../../assets/icons/ico_siren_white.svg";

const Header = () => {
  return (
    <Navbar>
      <NavbarInside>
        <NavbarStatus>
          <RoomStauts>
            <RoundStatus>1/4</RoundStatus>
            <RoundStatus>진행</RoundStatus>
            <img src={iconLock} />
          </RoomStauts>
          <SideBar>|</SideBar>
          <div>1234566</div>
          <SideBar>|</SideBar>
          <RoomName>
            초보자 환영! 같이 배우면서 즐겨요. 상대방의 비밀 암호를 추리해
            블럭을 맞춰보세요!
          </RoomName>
        </NavbarStatus>

        <ReportButton>
          <img src={iconSiren} />
          <div>버그신고</div>
        </ReportButton>
      </NavbarInside>
    </Navbar>
  );
};

export default Header;

const Navbar = styled.div`
  color: #ffffff;
  background-color: #111;
  color: #aaaaaa;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
`;

const NavbarInside = styled.div`
  width: 1080px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RoomName = styled.div`
  font-family: Pretendard;
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
`;

const NavbarStatus = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
`;

const RoomStauts = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ReportButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 76px;
  height: 26px;
  border: solid 1px #000;
  background-color: #232323;
  border-radius: 5px;
  color: #ccc;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: bold;
  gap: 2px;
  & div {
    font-size: 12px;
  }
  cursor: pointer;
`;

const RoundStatus = styled.div`
  border: 1px solid #aaaaaa;
  border-radius: 999px;
  width: 34px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 10px;
  line-height: 100%;
`;

const SideBar = styled.div`
  color: #333;
`;
