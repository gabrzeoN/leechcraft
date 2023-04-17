import styled from "styled-components"

export default function Header() {

  return (
    <HeaderContainer>
      {/* Logo */}
      {/* <div>Go back Home</div> */}
      {/* Logout */}
      {/* Profile pic */}
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  background-color: #48507e;
  border: 1px solid black;
  height: 80px;
  width: 95%;
  margin-top: 30px;
  position: fixed;
  z-index: 1;
`;