import { useState } from "react";

export function Todo({ text, createdAt }) {
  const [open, setOpen] = useState(false);

  function toggleOpen() {
    setOpen(!open);
  }

  return (
    <li>
      {text} {open ? createdAt : null}
      <button onClick={toggleOpen}>{!open ? "Show" : "Hide"} date</button>
    </li>
  );
}
