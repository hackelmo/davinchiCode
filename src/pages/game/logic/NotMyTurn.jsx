import React, { useState } from "react";

const NotMyTurn = ({ mode }) => {
  //컴포넌트들 분리 하기
  //로직상 반복되는거 유틸함수 또는 훅으로 재사용성을 부여하기
  switch (mode) {
    case "":
      return <div>너 차례아니야</div>;
    default:
      return <div>기본값이야</div>;
  }
};

export default NotMyTurn;
