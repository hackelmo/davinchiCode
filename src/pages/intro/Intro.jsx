import React, { useState } from 'react'
import styled from 'styled-components';
import Modal from '../../components/form/modal/Modal';
import GameInfo from './ele/GameInfo';
export const KAKAO_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_ID}&redirect_uri=http://localhost:3000/kakao&response_type=code`;
const Intro = () => {
  const [modal, setModal] = useState(false)

  const setModalHandler = ()=>{
    setModal(prev=>!prev)
  }

  return (
  <StWrapper>
    <Modal modal={modal} closeModal={setModalHandler}><GameInfo/></Modal>
    <StContainer>
      <StBox>
      <StLogo>로고</StLogo>
      <StImg>
        게임 이미지
      </StImg>
      <StInfo>
        게임 간략 설명
      </StInfo>
      </StBox>
      <StBtnBox>
        <button onClick={setModalHandler}>게임 설명보기</button>
      <a href={KAKAO_URL}>
        <button>카카오 로그인</button></a>
      </StBtnBox>
      </StContainer>
  </StWrapper>
  )
}

export default Intro

const StWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  border:  1px solid red;
  justify-content: center;
  align-items: center;
`
const StContainer = styled.div`
  display: flex;
  width: 54%;
  min-width: 400px;
  height: 70%;
  min-height: 500px;
  border:  1px solid blue;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
const StBox = styled.div`
  display: flex;
  width: 80%;
  height: 90%;
  min-height: 300px;
  padding: 10px;
  border:1px solid green;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`
const StLogo = styled.div`
  width: 70%;
  height: 10%;
  border: 1px solid green;
 `
 const StImg = styled.div`
  width: 90%;
  height: 65%;
  border: 1px solid green; 
 `
 const StInfo = styled.div`
  width: 100%;
  height: 15%;
 `
 const StBtnBox = styled.div`
  
 `