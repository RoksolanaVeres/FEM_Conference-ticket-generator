import TicketPattern from "../assets/images/pattern-ticket.svg";
import logoMark from "../assets/images/logo-mark.svg";
import gitHubIcon from "../assets/images/icon-github.svg";

function getRandomNumber() {
  return Math.floor(Math.random() * 100000);
}

export default function Ticket({ userInfo }) {
  return (
    <div className="ticketContainer">
      <img className="ticketPattern" src={TicketPattern} />
      <div className="ticketInnerContainer">
        <div className="ticketNumber">#{getRandomNumber()}</div>
        <div className="conferenceData">
          <img src={logoMark} />
          <div className="conferenceDataText">
            <p className="ticketLogoText">Coding Conf</p>
            <p className="ticketDateLocation">Jan 31, 2025 / Austin, TX</p>
          </div>
        </div>
        <div className="participantData">
          <img src={userInfo.avatarPreview} className="participantAvatar" />
          <div className="participantDataText">
            <p className="participantName">{userInfo.fullName}</p>
            <div className="participantGithubContainer">
              <img src={gitHubIcon} className="githubIcon" />
              <p className="githubUserName">{userInfo.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
