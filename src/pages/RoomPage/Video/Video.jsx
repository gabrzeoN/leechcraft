import styled from "styled-components";

export default function Video({ children }){
  console.log(children);
  return (
    <>
      <VideoContainer>
      </VideoContainer>
    </>
  );
}

const VideoContainer = styled.div`
  background-color: #91bde4;
  width: 300px;
  height: 300px;
`;
