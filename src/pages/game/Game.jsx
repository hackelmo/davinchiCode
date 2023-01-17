import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";
import styled from "styled-components";
import Header from "../../components/common/elements/Header";

import GameStart from "./logic/GameStart";
import NotMyTurn from "./logic/NotMyTurn";
import myUserBackground from "../../assets/images/myUserBackground.png";
import otherUserBackground from "../../assets/images/otherUserBackground.png";

import iconSetting from "../../assets/icons/ico_setting.svg";
import iconVideocam from "../../assets/icons/ico_videocam.svg";
import iconMic from "../../assets/icons/ico_mic.svg";
import iconTimer from "../../assets/icons/ico_timer.svg";
import iconSend from "../../assets/icons/ico_send.svg";
import backBlack from "../../assets/icons/inGame/back_black.png";
import backWhite from "../../assets/icons/inGame/back_white.png";

// const socket = io.connect(process.env.REACT_APP_SERVER);
const socket = io.connect("http://localhost:3002/");

const Game = () => {
  const dispatch = useDispatch();

  const [roomId, setRoomInput] = useState("");
  const [userId, setUserInput] = useState("");
  const [myTurn, setMyTurn] = useState(false);
  const [mode, setMode] = useState("lobby");
  // const [centerMode, setCenterMode] = useState("");

  const createdAt = new Date().toLocaleString();
  const users = [1, 2, 3];
  const people = 4;
  console.log("as");
  const modeGameStart = () => {
    setMode("gameStart");
    console.log("socket.on => gameStart /// self", userId);
    socket.emit("getPlace", { roomId, userId, people }, gameTurn);
  };

  const gameTurn = (turn) => {
    console.log("내턴은", turn);
  };

  useEffect(() => {
    socket.on("welcome", (nickname) => {
      console.log("어서오세요", nickname);
    });

    socket.on("gameStart", () => {
      setMode("gameStart");
      console.log("socket.on => gameStart", userId);
      socket.emit("getPlace", { roomId, userId, people }, gameTurn);
    });

    // socket.on("");
  }, [socket]);
  // if (mode === "lobby")
  //   return (
  //     <>
  //       <input
  //         placeholder="roomid"
  //         onChange={(e) => {
  //           setRoomInput(e.target.value);
  //         }}
  //         value={roomId}
  //       />
  //       <input
  //         placeholder="userid"
  //         onChange={(e) => {
  //           setUserInput(e.target.value);
  //         }}
  //         value={userId}
  //       />
  //       <button
  //         onClick={() => {
  //           socket.emit("join_room", { userId, roomId, people }, modeGameStart);

  //           setMode("loading");
  //         }}
  //       >
  //         추가하기
  //       </button>
  //     </>
  //   );

  // if (mode === "loading") {
  //   return <div>로딩중입니다</div>;
  // }

  return (
    <>
      <Background>
        <Header />
        <Container>
          <OtherUsers>
            {users.map((el, i) => (
              <OtherUser key={`otheruser${i}`}>
                <UserInfo>
                  <Camera>
                    <SpaceBetween>
                      <CameraStatus>
                        <img src={iconMic} />
                        <img src={iconVideocam} />
                      </CameraStatus>
                      {/* <GameStatus>진행중</GameStatus> */}
                    </SpaceBetween>
                    <UserName>
                      <div>다빈치고수</div>
                    </UserName>
                  </Camera>
                  <SelectBtn>지목하기</SelectBtn>
                </UserInfo>
                <CardArea>
                  <Card src={backBlack} />
                  <Card src={backBlack} />
                  <Card src={backWhite} />
                  <Card src={backWhite} />
                  <Card src={backBlack} />
                  <Card src={backWhite} />
                </CardArea>
              </OtherUser>
            ))}
          </OtherUsers>

          <CardBox>
            <GameField>
              <OnGoingStatus>
                정말정말긴이름인데너무함님이 상대 지목을 진행 중입니다.
              </OnGoingStatus>
              {/* <MiddleField>
                <GameText>가져올 타일을 선택 해주세요!</GameText>
                <StBox>{myTurn ? <GameStart /> : <NotMyTurn />}</StBox>
              </MiddleField> */}
            </GameField>
            <Timer>
              <img src={iconTimer} />
              <TimerBar>
                <TimeLimit />
              </TimerBar>
              <div>남은시간 25초</div>
            </Timer>
          </CardBox>

          <Footer>
            <Left>
              <Flex>
                <Camera>
                  <SpaceBetween>
                    <CameraStatus>
                      <img src={iconMic} />
                      <img src={iconVideocam} />
                    </CameraStatus>
                    <GameStatus>진행중</GameStatus>
                  </SpaceBetween>
                  <UserName>
                    <div>내가다이김</div>
                  </UserName>
                </Camera>
                {/* <MyCard>
                  <MyCardList></MyCardList>
                </MyCard> */}
              </Flex>
              <BtnList>
                <img src={iconMic} />
                <div>|</div>
                <img src={iconVideocam} />
                <div>|</div>
                <img src={iconSetting} />
              </BtnList>
            </Left>
            <Right>
              <Chat>
                <Chatting>
                  <div>사용자1</div>
                  <div>안녕하세요, 레디 부탁합니다</div>
                </Chatting>
                <Chatting>
                  <div>사용자2</div>
                  <div>넵 레디요~</div>
                </Chatting>
              </Chat>
              <InputArea>
                <InputBox>
                  <Input placeholder="채팅을 시작해보세요!" />
                  <img src={iconSend} />
                </InputBox>
              </InputArea>
            </Right>
          </Footer>
        </Container>
      </Background>
    </>
  );
};

/////////////네브바

const Background = styled.div`
  background-image: url("https://uca34f7dca178fca24f56420c13d.previews.dropboxusercontent.com/p/thumb/AByPZLdpGdm3yyXlmNa_S5-GWerUYnmal_9w2oz3n-oYwK03zYvckC5MBnnmOGGFmoweSg1sFzqzfb75QWWoHk0jJNOYJVLXy_zjpYw2rnpoxoWJt_Z6tKC-NfWpQyjvh7TPdfzwLXigS5hbuhEuaTX65dUVYTehfzOOMLaknEUO0M_P1v1SOgIR1xriMaI0kNpN--eOvDO-_YXiouJBjB-qF-87x4DEgtfLlAD5UfhXmhkIW_0zNhLcmv2gBxcHe53kjki6oKFIAESN0dvL27BM_B5U_cksjymx0Lk49OGf8y7I3GHc7Ftsm36ynC3RPtmE79f4nE5n1_zuJ9lA48bbbRfZYTqfn3I-0CODgdRn2z21htynBGJotd4GtuGaQ0I/p.png");
  background-size: cover;
  height: 100vh;
  background-color: #2b2b2b;
`;

const Container = styled.div`
  width: 1080px;
  margin: 0 auto;
  display: flex;
  margin-top: 20px;
  flex-direction: column;
`;

const OtherUsers = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: space-between;
`;

const OtherUser = styled.div`
  width: 356px;
  height: 100%;
  background-image: url(${otherUserBackground});
  padding: 16px;
  border-radius: 6px;
  border: solid 1px #111;
  background-color: #eee;
`;

const UserInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Camera = styled.div`
  width: 200px;
  height: 112px;
  border-radius: 4px;
  border: solid 1px #999;
  background-color: #555;

  padding: 6px;
  font-size: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CameraStatus = styled.div`
  gap: 10px;
  width: 40px;
  & img {
    height: 16px;
    margin-right: 3px;
  }
`;

const GameStatus = styled.div`
  width: 46px;
  height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 5px 10px;
  border-radius: 4px;
  background-color: #ffdf24;

  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  color: #000;
`;

const UserName = styled.div`
  width: 64px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  color: #fff;
  padding: 5px 10px;
  border-radius: 999px;
  background-color: rgba(0, 0, 0, 0.7);
  & div {
    display: block;
  }
`;

const SelectBtn = styled.button`
  width: 93px;
  height: 32px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  box-shadow: 0 3px 0 0 #616161;
  border: solid 1px #616161;
  background-color: #ddd;

  //
  font-family: Pretendard;
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  text-align: center;
  color: #616161;
`;

const CardArea = styled.div`
  width: 100%;
  height: 32px;
  gap: 2px;
  display: flex;
  margin: 20px 7px;
`;

const Card = styled.img`
  /* width: 25px;
  height: 100%; */
  /* background-color: ${(props) => props.backgroundColor || "#515151"};
  color: ${(props) => props.color || "white"}; */
`;

/////////// 유저들 칸

const CardBox = styled.div`
  height: 364px;
  border: 1px solid #c2c2c2;
  width: 100%;
  margin-top: 8px;
  border-radius: 6px;
  border: solid 1px #111;
  background-color: #fff;
`;

const GameField = styled.div`
  width: 100%;
  height: 324px;
`;

const OnGoingStatus = styled.div`
  margin: 10px;
  background: #eeeeee;
  padding: 4px 16px;
  border-radius: 6px;
  border: solid 1px #111;
  background-color: #111;

  left: 0;
  top: 0;
  color: #ffdf24;
  font-family: Pretendard;
  font-size: 10px;
  font-weight: 500;
  display: inline-block;
`;

const Timer = styled.div`
  height: 40px;
  border-top: solid 1px #ccc;
  background-color: #e1e1e1;
  border-radius: 0 0 6px 6px;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 5px;
  font-family: Pretendard;
  font-size: 10px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #222;
`;

const TimerBar = styled.div`
  width: 486px;
  height: 16px;
  border: solid 1px #000;
  background-color: #fff;
  border-radius: 4px;
`;

const TimeLimit = styled.div`
  height: 100%;
  width: 400px;
  background-color: #009320;
  border-radius: 3px 0 0 3px;
`;

///// 중간끝

const Footer = styled.div`
  width: 100%;
  height: 200px;
  margin-top: 9px;

  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  height: 100%;
  width: 714px;
  background-image: url(${myUserBackground});
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 6px;
  border: solid 1px #111;
  background-color: #eee;
`;

const Flex = styled.div`
  display: flex;
`;

const MyCard = styled.div`
  border: 1px solid green;
  margin-top: 24px;
  margin-left: 14px;
  width: 100%;
`;

const MyCardList = styled.div`
  height: 32px;
  & img {
  }
`;

const BtnList = styled.div`
  width: 200px;
  height: 36px;
  background-color: #fff;
  border-radius: 4px;
  border: solid 1px #aaa;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 24px;
  & div {
    font-size: 16px;
    color: #aaa;
  }
  & img {
    cursor: pointer;
  }
`;

const Right = styled.div`
  height: 100%;
  width: 356px;
  border-radius: 6px;
  border: 1px solid #111;
`;

const Chat = styled.div`
  background-color: #fff;
  width: 100%;
  height: 138px;
  border-radius: 6px 6px 0 0;
  padding: 9px 0 0 20px;
`;

const InputArea = styled.div`
  background-color: #555;
  width: 100%;
  height: 62px;
  display: flex;
  gap: 4px;
  border-radius: 0 0 6px 6px;
  padding: 10px;
`;

const InputBox = styled.div`
  width: 336px;
  height: 40px;
  border-radius: 4px;
  border: none;
  font-size: 14px;
  font-weight: 500;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 14px;
  & img {
    cursor: pointer;
  }
`;

const Input = styled.input`
  border: none;
  font-size: 14px;
  font-weight: 500;
  width: 270px;
  color: #7a7a7a;
  &:focus {
    outline: none;
  }
`;

const Chatting = styled.div`
  font-size: 12px;
  & div:nth-child(1) {
    font-weight: 700;
    margin-bottom: 6px;
  }
  margin-bottom: 10px;
`;

export default Game;
