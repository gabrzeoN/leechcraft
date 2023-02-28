import styled from "styled-components";

export default function Text({ children }) {

  return (
    <TextContainer>
      <label htmlFor="">{ children }</label>
      <input type="text" />
    </TextContainer>
  );
}

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: aliceblue;
  width: 400px;
  height: 50px;
  label,
  input {
    width: 100%;
    border-radius: 5px;
  }
  

  input {
    border: 1px solid black;
  }
`;
