import React from 'react'
import Chat from './ele/Chat'
import VideoChat from './ele/VideoChat'
import styled from 'styled-components';

const AwaitPage = () => {
  return (
    <StWrapper>
      <VideoChat/>
      <Chat/>
    </StWrapper>
  )
}

export default AwaitPage

const StWrapper = styled.div`
  display: flex;
  justify-content: center;
`