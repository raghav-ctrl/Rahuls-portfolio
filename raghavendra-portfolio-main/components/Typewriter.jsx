"use client";
import React from "react";

const Typewriter = ({ text, speed = 80, className = "", cursorClassName = "" }) => {
  const [displayed, setDisplayed] = React.useState("");
  const [done, setDone] = React.useState(false);
  const [showCursor, setShowCursor] = React.useState(true);

  React.useEffect(() => {
    setDisplayed("");
    setDone(false);
    let i = 0;
    const id = setInterval(() => {
      setDisplayed((prev) => prev + text.charAt(i));
      i += 1;
      if (i >= text.length) {
        clearInterval(id);
        setDone(true);
      }
    }, Math.max(10, speed));
    return () => clearInterval(id);
  }, [text, speed]);

  React.useEffect(() => {
    if (!done) return;
    const blink = setInterval(() => setShowCursor((v) => !v), 500);
    return () => clearInterval(blink);
  }, [done]);

  return (
    <span className={className}>
      {displayed}
      <span className={cursorClassName} style={{ opacity: showCursor ? 1 : 0 }}>|</span>
    </span>
  );
};

export default Typewriter;
