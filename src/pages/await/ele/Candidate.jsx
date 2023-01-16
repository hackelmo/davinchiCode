import React from 'react'
import styled from 'styled-components'
import VideoControler from '../../../components/common/elements/VideoControler'
const users =[
  {nickname : '유저1', ready : true, tier : 'gold'},
  {nickname : '유저2', ready : true, tier : 'bronze'},
  {nickname : '유저3', ready : false, tier : 'silver'},
  {nickname : '유저4', ready : true, tier : 'gold'},
]
const Candidate = () => {
  const getTier = (tier)=>{
    switch (tier) {
      case 'diamond':  
        return <img alt='diamond'/>
      case 'gold':  
        return <img alt='gold'/>
      case 'silver':  
        return <img alt='silver'/>
      case 'bronze':  
        return <img alt='bronze'/>
      default:
        break;
    }
  }
  return (
      <StCandidateContainer>
        <div>
        <StCandidateBox>
          {users?.map((user,i)=>{
            return (<StCandidate key={`candidatte${i}`}>
              <StNick>{user.nickname}</StNick>
              <div>
                <StReady>{user.ready?'준비완료':''}</StReady>
                <StTier>{getTier(user.tier)}</StTier>
              </div>
            </StCandidate>)
          })}
        </StCandidateBox>
        </div>
        <StBtnBox>
          <StButton>준비하기</StButton>
          <StButton>방나가기</StButton>
          <VideoControler/>
        </StBtnBox>
      </StCandidateContainer>
  )
}

export default Candidate

const StCandidateContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-around;
  padding:7px;
  width: 763px;
  height: 191px;
  border: 1px solid #C1C1C1;
  border-radius: 0px 0px 12px 12px;
  bottom: 0;
`
const StCandidateBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 5px;
  width: 580px;
  height: 124px;
`
const StCandidate = styled.div`
  display: flex;
  width: 286px;
  height: 60px;
  border: 1px solid black;
  border-radius: 6px;
  justify-content: space-around;
  align-items: center;
`
const StNick = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
`
const StReady = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;
  color: #222222;
`
const StTier = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;
  color: #AAAAAA;
`
const StBtnBox = styled.div`
  position: relative;
  display: flex;
  border : 1px solid red;
  width: 130px;
  height: 165px;
  flex-direction: column;
  gap: 10px;
`
const StButton = styled.button`
  width: 130px;
  height: 44px;
  background: #222222;
  border-radius: 6px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: white;
`