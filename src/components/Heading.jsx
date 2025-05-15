export default function Heading(ticketIsGenerated) {
  return (
    <h1>
      {" "}
      {ticketIsGenerated
        ? "Congrats, Jonatan Kristof! Your ticket is ready."
        : "Your Journey to Coding Conf 2025 Starts Here!"}
    </h1>
  );
}
