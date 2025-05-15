import Header from "./components/Header";
import Heading from "./components/Heading";
import Instructions from "./components/Instructions";
import Form from "./components/Form";
import { useState } from "react";
import Ticket from "./components/Ticket";

export default function App() {
  const [ticketIsGenerated, setTicketIsGenerated] = useState(true);
  return (
    <div className="container--main">
      <Header />
      <main>
        <Heading ticketIsGenerated={ticketIsGenerated} />
        <Instructions ticketIsGenerated={ticketIsGenerated} />
        {ticketIsGenerated ? <Ticket /> : <Form />}
      </main>
    </div>
  );
}
