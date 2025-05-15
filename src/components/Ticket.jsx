import TicketPattern from "../assets/images/pattern-ticket.svg";
import logoMark from "../assets/images/logo-mark.svg";
import avatar from "../assets/images/image-avatar.jpg";
import gitHubIcon from "../assets/images/icon-github.svg";

export default function Ticket() {
  return (
    <div className="ticketContainer">
      <img className="ticketPattern" src={TicketPattern} />
      <div className="ticketInnerContainer">
        <div className="ticketNumber">#01609</div>
        <div className="conferenceData">
          <img src={logoMark} />
          <div className="conferenceDataText">
            <p className="ticketLogoText">Coding Conf</p>
            <p className="ticketDateLocation">Jan 31, 2025 / Austin, TX</p>
          </div>
        </div>
        <div className="participantData">
          <img src={avatar} className="participantAvatar" />
          <div className="participantDataText">
            <p className="participantName">Jonatan Kristof</p>
            <div className="participantGithubContainer">
              <img src={gitHubIcon} className="githubIcon" />
              <p className="githubUserName">@jonatankristof0101</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
