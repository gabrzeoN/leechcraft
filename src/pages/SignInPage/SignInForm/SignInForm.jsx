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
        <label htmlFor="">Senha</label>
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
        ENTRAR
      </Button>
    </SignInFormContainer>
  );
}

const SignInFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  height: 300px;
  background-color: #ffffff;
  border: 2px solid black;
  border-radius: 50px;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: aliceblue;
  color: black;
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

const Button = styled.button`
  background-color:  #32b632;
  width: 400px;
  height: 30px;
  border-radius: 10px;
`;
