export default function Instructions({ ticketIsGenerated, userInfo }) {
  return (
    <p className="instructions-text">
      {ticketIsGenerated
        ? `We've emailed your ticket to ${userInfo.email} and will send updates in the run up to the event`
        : "Secure your spot at next year's biggest coding conference"}
    </p>
  );
}
