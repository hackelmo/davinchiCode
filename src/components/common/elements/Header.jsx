import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Navbar>
      <NavbarInside>
        <NavbarStatus>
          <RoomStauts>
            <div>
              <span className="material-symbols-outlined">lock</span>
            </div>
            <RoundStatus>1/4</RoundStatus>
            <RoundStatus>진행</RoundStatus>
          </RoomStauts>
          <RoomName>초보자 환영! 같이 즐기면서 배워요</RoomName>
        </NavbarStatus>
        <ReportButton>
          <span className="material-symbols-outlined">sms_failed</span>버그신고
        </ReportButton>
      </NavbarInside>
    </Navbar>
  );
};

export default Header;

const Navbar = styled.div`
  color: #ffffff;
  background-color: #111;
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
  font-size: 14px;
  font-weight: 500;
  margin-left: 20px;
`;

const NavbarStatus = styled.div`
  display: flex;
  height: 21px;
  align-items: center;
`;

const RoomStauts = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const ReportButton = styled.div`
  //
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
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;
  font-weight: bold;
  & span {
    font-size: 12px;
    margin-right: 5px;
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
