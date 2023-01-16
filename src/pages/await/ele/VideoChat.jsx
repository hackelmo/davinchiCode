import React, { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import Peer from "simple-peer";
import styled from "styled-components";
import Video from "./Video";
import Candidate from "./Candidate";


const VideoChat = (props) => {
  const [peers, setPeers] = useState([]);
  const socketRef = useRef();
  const userVideo = useRef();
  const peersRef = useRef([]);
  const roomID = 3
  const userID = 1
  
  useEffect(() => {
    socketRef.current = io.connect(process.env.REACT_APP_SERVER);
    navigator.mediaDevices
      .getUserMedia({ video: {  width:' 354.82px',height: '231.89px'}, audio: true })
      .then((stream) => {
        userVideo.current.srcObject = stream;
        socketRef.current.emit("joinRtcRoom", roomID, userID);
        socketRef.current.on("all users", (users) => {
          const peers = [];
          users.forEach((userID) => {
            const peer = createPeer(userID, socketRef.current.id, stream);
            peersRef.current.push({
              peerID: userID,
              peer,
            });
            peers.push(peer);
          });
          setPeers(peers);
        });

        socketRef.current.on("user joined", (payload) => {
          const peer = addPeer(payload.signal, payload.callerID, stream);
          peersRef.current.push({
            peerID: payload.callerID,
            peer,
          });

          setPeers((users) => [...users, peer]);
        });

        socketRef.current.on("receiving returned signal", (payload) => {
          const item = peersRef.current.find((p) => p.peerID === payload.id);
          item.peer.signal(payload.signal);
        });
      });
  }, []);

  function createPeer(userToSignal, callerID, stream) {
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream,
    });

    peer.on("signal", (signal) => {
      socketRef.current.emit("sending signal", {
        userToSignal,
        callerID,
        signal,
      });
    });

    return peer;
  }

  function addPeer(incomingSignal, callerID, stream) {
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream,
    });

    peer.on("signal", (signal) => {
      socketRef.current.emit("returning signal", { signal, callerID });
    });

    peer.signal(incomingSignal);

    return peer;
  }

  return (
    <StWrapper>
      <StTop><StP>게임 대기방</StP></StTop>
      <StContainer>
      <StyledVideo muted ref={userVideo} autoPlay playsInline />
      {peers.map((peer, index) => {
        return <Video key={index} peer={peer} />;
      })}
      </StContainer>
      <Candidate/>
    </StWrapper>
  );
};

export default VideoChat;

const StWrapper = styled.div`
position: relative;
  display: flex;
  width: 763px; 
  height: 766px;
  border: 1px solid #E0E0E0;
  border-radius: 12px;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  gap : 20px;
`;

const StTop = styled.div`
  display: flex;
  width: 762px;
  height: 40px;
  background: #333333;
  justify-content: center;
  align-items: center;
  border-radius: 12px 12px 0px 0px;
`
const StP = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #FFFFFF;
`
const StContainer =styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 10px;
`
const StyledVideo = styled.video`
  object-fit: cover;
  width: 354.82px;
  height: 231.89px;
  border-radius: 6px;
`;
