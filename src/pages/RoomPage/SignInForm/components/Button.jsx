import styled from "styled-components";

export default function Button({ children }) {

  return (
    <ButtonContainer>
      {children}
    </ButtonContainer>
  );
}

const ButtonContainer = styled.button`
  background-color:  #32b632;
  width: 400px;
  height: 30px;
  border-radius: 10px;
  border: 0px;
`;
