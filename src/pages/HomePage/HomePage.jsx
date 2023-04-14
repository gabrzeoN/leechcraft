import { Link } from "react-router-dom";
import styled from "styled-components";

export default function HomePage() {

  return (
    <SignInPageContainer>
      <h1>Login</h1>
      
      <Links>
        <Link to={"/sign-in/customers"} >Login como cliente</Link>
        <Link to={"/sign-up/customers"} >Me cadastrar como cliente</Link>
        <div></div>
        <Link to={"/sign-in/professionals"} >Login como profissional</Link>
        <Link to={"/sign-up/professionals"} >Me cadastrar como profissional</Link>
      </Links>
    </SignInPageContainer>
  );
}

const SignInPageContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: #7aa7ce;
  width: 600px;
  height: 800px;
  margin-left: 400px;
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  background-color: aliceblue;
  width: 100%;
  div {
    width: 100%;
    height: 3px;
    background-color: aliceblue;
  }
`;
