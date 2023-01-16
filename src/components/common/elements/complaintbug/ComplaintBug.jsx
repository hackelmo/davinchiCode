import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import emailjs from '@emailjs/browser';
import ComplainModal from './ComplainModal';

const ComplaintBug = () => {
  const [modal, setModal]=useState(false)
  const complainForm = useRef()
  const [input, setInput] = useState({name:"", 'reply_to':"", message:""})
  const [sending, setSending] = useState(null)

  const onChangeHandler = (e)=>{
    console.log(e.target)
    const {name, value}= e.target;
    setInput({...input, [name]:value})
  }

  const closeModalHandler = ()=>{
    setModal(false)
    setInput({name:"", 'reply_to':"", message:""})
  }

  const sendEmailHandler = (e)=>{
    setSending(true)
     e.preventDefault();
         emailjs
      .sendForm(
        process.env.REACT_APP_SERVICEID, process.env.REACT_APP_TEMPLATEID, complainForm.current, process.env.REACT_APP_PUBLICKEY)
      .then(
        (result) => {
          alert("정상적으로 버그가 신고되었습니다.");
          closeModalHandler()
        },
        (error) => {
          alert("전송을 실패했습니다.");
          closeModalHandler()
        })
  }
  return (<>
    <StBugBtn onClick={()=>setModal(true)}>버그신고</StBugBtn>
    <ComplainModal modal={modal} closeModal={closeModalHandler}>
      {sending? <h1>신고메일 보내는 중</h1>:
      <StComplaintContainer ref={complainForm}onSubmit={sendEmailHandler}>
        <StModalHeader><p>버그 신고</p>
        <StCloseBtn onClick={closeModalHandler}>X</StCloseBtn></StModalHeader>
        <StField>
          <label htmlFor="name">문의 제목</label>
          <StInput type="text" name="name" placeholder='이름을 입력해주세요.'value={input.name} onChange={onChangeHandler}/>
        </StField>
        <StField>
          <label htmlFor="message">문의 내용</label>
          <StConent type="text" name="message" placeholder='내용을 입력해주세요.'value={input.message} onChange={onChangeHandler}/>
        </StField>
        <StField>
          <label htmlFor="reply_to">메일 주소</label>
          <StInput type="text" name="reply_to" placeholder='답변받을 메일주소를 입력해주세요.' value={input.reply_to} onChange={onChangeHandler}/>
        </StField>
        <StBtnBox>
          <StBtn type="submit">신고하기</StBtn>
          <StBtn type="cancel"onClick={closeModalHandler}>취소하기</StBtn>
        </StBtnBox>
      </StComplaintContainer>}
    </ComplainModal>
  </>
  )
}

export default ComplaintBug

const StBugBtn = styled.button`
  width: 68px;
  height: 22px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;
`
const StModalHeader = styled.div`
  position: relative;
  display: flex;
  width: 400px;
  height: 58px;
  border-radius: 12px 12px 0 0 ;
  justify-content: center;
  align-items: center;
`
const StCloseBtn = styled.button`
  position: absolute;
  top:14px;
  right: 14px;
  background:none;
  border: none;
`
const StComplaintContainer = styled.div`
  display: flex;
  flex-direction:column;
  width: 400px;
  height: 429px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
  justify-content: center;
  align-items: center;
  gap: 5px;
`
const StField = styled.div`
  display: flex;
  margin-bottom: 10px;
  align-items: center;
  gap: 10px;
`
const StInput = styled.input`
  width: 290px;
  height: 30px;
`
const StConent = styled.input`
  width: 290px;
  height: 224px;
`
const StBtnBox = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 10px;
  gap: 10px;
`
const StBtn = styled.button`
  width: 101px;
  height: 34px;
  border-radius: 6px;
`