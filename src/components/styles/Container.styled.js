import styled from "styled-components";

// export const Main = styled.div`
//   background-color: yellow;
// `;

export const Title = styled.h1`
  width: 1000px;
  font-family: Arial;
  max-width:100%;
  padding: 0 35%;
  font-size: 50px;
  margin: 0 auto;
`;
export const Title2 = styled.div`
  width: 1000px;
  font-family: Arial;
  max-width:100%;
  padding: 0 35%;
  font-size: 20px;
  margin: 0 auto;
`;

export const BodyContainer = styled.div`
  display: flex;
  top: 10%;
  padding: 5% 20% 2% 20%;
  font-family: Arial;
  font-size: 20px;
`;

export const BodyContainer2 = styled.div`
  padding: 2% 20% 2% 20%;
  font-family: Arial;
  font-size: 20px;
`;

export const ButtonContainer = styled.div`
  width: 1000px;
  max-width:100%;
  padding: 0 35%;
  font-size: 50px;
  margin: 0 auto;
`;

export const ModalContainer = styled.div`
  display: flex;;
  padding: 5% 20% 2% 20%;
  font-size: 30px;
  aligh-items: center;
`;

export const ModalItem = styled.div`
  position: fixed;
  background-color: gray;
  z-index: 4;
  left: 20%;
  right: 20%;
  top: 10%;
  bottom: 5%;
  justify-content: center;
  font-size: 20px;
  font-family: Arial;
  flex-direction: column;
`;