import React from 'react'
import styled from 'styled-components'

const Loading = () => {
  return (
    <StWrapper>
      <StContainer>Loading중..</StContainer>
    </StWrapper>
  )
}

export default Loading

const StWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  border:  1px solid red;
  justify-content: center;
  align-items: center;
`
const StContainer = styled.div`
  width: 500px;
  height: 500px;
  border:  1px solid blue;
`