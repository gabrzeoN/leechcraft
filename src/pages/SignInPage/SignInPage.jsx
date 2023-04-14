import { Link } from "react-router-dom";
import styled from "styled-components";
import SignInForm from "./SignInForm/SignInForm";
import BackgroudPhoto from "../../assets/images/image-01.jpg";

export default function SignInPage() {

  return (
    <SignInPageContainer>
      <MainContent backgroud={BackgroudPhoto}>
        <h1>Meet me here</h1>
      </MainContent>

      <FormContent>
        <SignInForm />
        <Links>
          <Link to={"/sign-in/customers"} >Login as client</Link>
          <Link to={"/sign-up/customers"} >Sign up as client</Link>
          <Link to={"/sign-in/professionals"} >Login as professional</Link>
          <Link to={"/sign-up/professionals"} >Sign up professional</Link>
        </Links>
      </FormContent>
    </SignInPageContainer>
  );
}

const SignInPageContainer = styled.main`
  display: flex;
  background-color: #7aa7ce;
  height: 100vh;
`;

const MainContent = styled.div`
  width: 70%;
  height: 100%;
  background-image: url(${BackgroudPhoto}); 
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: flex;
  opacity: 0.95;
  justify-content: center;

  h1 {
    margin-top: 10.625rem;
    font-size: 80px;
    font-weight: bold;
    color: #33374d;
    text-shadow: .125rem 0 #fff, -0.125rem 0 #fff, 0 .125rem #fff, 0 -0.125rem #fff,
                  .0625rem .0625rem #fff, -0.0625rem -0.0625rem #fff, .0625rem -0.0625rem #fff, -0.0625rem .0625rem #fff;
  }
`;

const FormContent = styled.div`
  padding: 0px 3%;
  width: 30%;
  height: 100%;
  background-color: #33374d;
  border: 3px solid #686868;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 30px;
  align-items: center;
  a, a:visited{
    text-decoration: none;
    color: #bebebe;
    :hover {
      color: #ffffff;
    }
    margin-top: 14px;
  }
`;
