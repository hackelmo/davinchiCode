import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import io from "socket.io-client";

const socket = io.connect(process.env.REACT_APP_SERVER);

const GameStart = () => {
  // const {room} = useParams()
  const [black, setBlack] = useState(0);
  const [selected, setSelected] = useState(false);
  const { userId, roomId } = useSelector((state) => state.gameSlice);

  console.log(userId, roomId);

  const selectFirstCarddHandler = (e) => {
    socket.emit("selectFirstCard", roomId, userId, black);
    setSelected(true);
  };
  useEffect(() => {
    // socket.emit("gameStart", roomId, userId);
    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {}, [socket]);
  if (selected)
    return (
      <>
        <div>다른플레이어를 기다려주세요</div>
      </>
    );
  return (
    <div>
      <input
        type="number"
        value={black}
        onChange={(e) => setBlack(e.target.value)}
      />
      <button onClick={selectFirstCarddHandler}>확인</button>
    </div>
  );
};

export default GameStart;
