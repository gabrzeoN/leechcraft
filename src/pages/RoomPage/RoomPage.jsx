import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import SignInForm from "./SignInForm/SignInForm";
import Video from "./Video/Video";

export default function RoomPage() {
  const [stream, setStream] = useState();

  const myVideo = useRef();

async function loadStream(){
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: true });
    console.log(stream);
    setStream(stream);
    myVideo.current.srcObject = stream;
  } catch (error) {
    console.log("ERROR", error);
  }
}

  useEffect(() => {
    loadStream();
  }, []);


  return (
    <Player playsInline ref={myVideo} autoPlay />
  );
}



const Player = styled.video`
  background-color: #91bde4;
  width: 600px;
  height: 600px;
`;