export default function Heading({ ticketIsGenerated, userInfo }) {
  return (
    <h1>
      {ticketIsGenerated
        ? `Congrats, ${userInfo.fullName}! Your ticket is ready.`
        : "Your Journey to Coding Conf 2025 Starts Here!"}
    </h1>
  );
}
