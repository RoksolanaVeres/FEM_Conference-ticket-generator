import Header from "./components/Header";
import Heading from "./components/Heading";
import Instructions from "./components/Instructions";
import Form from "./components/Form";
import { useState } from "react";
import Ticket from "./components/Ticket";
import { userInfoInitialState, formErrorsInitialState } from "./constants";

export default function App() {
  const [ticketIsGenerated, setTicketIsGenerated] = useState(false);
  const [userInfo, setUserInfo] = useState(userInfoInitialState);
  const [formErrors, setFormErrors] = useState(formErrorsInitialState);

  return (
    <div className="container--main">
      <Header />
      <main>
        <Heading ticketIsGenerated={ticketIsGenerated} userInfo={userInfo} />
        <Instructions ticketIsGenerated={ticketIsGenerated} userInfo={userInfo} />
        {ticketIsGenerated ? (
          <Ticket userInfo={userInfo} />
        ) : (
          <Form
            setTicketIsGenerated={setTicketIsGenerated}
            userInfo={userInfo}
            setUserInfo={setUserInfo}
            formErrors={formErrors}
            setFormErrors={setFormErrors}
          />
        )}
      </main>
    </div>
  );
}
