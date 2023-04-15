import { Link } from "react-router-dom";
import styled from "styled-components";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HistoryIcon from '@mui/icons-material/History';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import EventIcon from '@mui/icons-material/Event';

export default function HomePage() {

  return (
    <HomePageContainer>
      <header>
        {/* Logo */}
        {/* <div>Go back Home</div> */}
        {/* Logout */}
        {/* Profile pic */}
      </header>
      <main>
        <section className="panel">
          <div className="screen">
            <h1>My schedule</h1>
            {/* <p>Set the time you are available for meeting</p> */}
            <CalendarMonthIcon />
          </div>

          <div className="screen">
            <h1>Set a meeting</h1>
            {/* <p>Set a meeting according to someone else's schdule</p> */}
            <EventIcon />
          </div>

          <div className="screen">
            <h1>Meeting history</h1>
            {/* <p>List of all of your contacts</p> */}
            <HistoryIcon />
          </div>

          <div className="screen">
            <h1>My Contacts</h1>
            {/* <p>List of all of your contacts</p> */}
            <AccountCircleIcon />
          </div>

          <div className="screen">
            <h1>My private room</h1>
            {/* <p>Test your microfone and webcan before you enter a meeting</p> */}
            <MeetingRoomIcon />
          </div>
        </section>
      </main>
    </HomePageContainer>
  );
}

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #33374d;
  width: 100vw;
  height: 100vh;
  position: relative;
  header {
    background-color: #48507e;
    border: 1px solid black;
    height: 80px;
    width: 95%;
    margin-top: 30px;
    position: fixed;
    z-index: 1;
  }
  main{
    width: 95%;
    /* background-color: #487e58; // TODO: erase */
    margin-top: 170px;
    .panel {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .screen {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #48507e;
        width: 300px;
        height: 300px;
        margin: 10px 0px;
        h1 {
          color: white;
          font-size: 20px;
          font-weight: bold;
          margin-top: 30px;
        }
      }
      .screen > :nth-child(2) {
        font-size: 244px;
        color: #33374d;
      }
    }
  }
`;
