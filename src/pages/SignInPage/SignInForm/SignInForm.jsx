import { useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../../../contexts/UserContext.jsx";
import * as authApi from "../../../services/auth.js";

export default function SignInForm() {
  const [disabled, setDisabled] = useState(false);
  const [signInData, setSignInData] = useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { setUser } = useContext(UserContext);

  async function handleSubmit(e) {
    console.log(pathname);
    e.preventDefault();
    setDisabled(true);
    try {
      let promise = null;
      if (pathname === "/sign-in/customers") {
        promise = await authApi.signInCustomers(signInData);
      } else if (pathname === "/sign-in/professionals"){
        promise = await authApi.signInProfessionals(signInData);
      }
      localStorage.setItem("teleconsultas_user", JSON.stringify(promise.data));
      setUser(promise.data);
      console.log(promise.data);
      navigate("/");
      setDisabled(false);
    } catch (error) {
      alert(error.response.data);
      console.log(error.response.data);
      setDisabled(false);
    }
  }

  return (
    <SignInFormContainer onSubmit={handleSubmit}>
      <Text>
        <label htmlFor="">Email</label>
        <input
          type="text"
          value={signInData.email}
          onChange={(e) => setSignInData({ ...signInData, email: e.target.value })}
          disabled={disabled}
          required
        />
      </Text>
      <Text>
        <label htmlFor="">Password</label>
        <input
          type="password"
          value={signInData.password}
          onChange={(e) => setSignInData({ ...signInData, password: e.target.value })}
          disabled={disabled}
          required
        />
      </Text>
      <Button
        type="submit"
        disabled={disabled}
      >
        Sign in
      </Button>
    </SignInFormContainer>
  );
}

const SignInFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  background-color: #ffffff;
  border: 3px solid #686868;
  * {
    font-size: 24px;
  }
  box-shadow: 7px 5px 139px -29px rgba(0,0,0,0.75) inset;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: black;
  width: 80%;
  label {
    margin-top: 40px;
  }
  input {
    border-radius: 0px;
    border: 1px solid #808080;
    padding: 5px 10px;
    margin-top: 5px;
  }
`;

const Button = styled.button`
  background-color:  #5726b3;
  &:hover {
    background-color:  #421786;
  }
  color: #eeeeee;
  width: 80%;
  height: 40px;
  margin: 40px 0px;
  border: 0px;
`;
