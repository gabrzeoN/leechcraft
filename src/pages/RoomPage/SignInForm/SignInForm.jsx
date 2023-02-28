import styled from "styled-components";
import Button from "./components/Button";
import Text from "./components/Text";

export default function SignInForm() {

  return (
    <SignInFormContainer>
      <Text>Email</Text>
      <Text>Password</Text>
      <Button>Sign In</Button>
    </SignInFormContainer>
  );
}

const SignInFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 50%;
  height: 300px;
  background-color: #ffffff;
  border: 2px solid black;
  border-radius: 50px;
`;
