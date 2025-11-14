"use client";
import React from "react";

const DEFAULT_PHRASES = [
  "Frontend Developer",
  "UI Designer",
  "AWS Learner",
];

const FadeLoop = ({
  phrases = DEFAULT_PHRASES,
  interval = 2000,
  className = "",
}) => {
  const [index, setIndex] = React.useState(0);
  const [visible, setVisible] = React.useState(true);

  React.useEffect(() => {
    let mounted = true;
    const tick = () => {
      if (!mounted) return;
      setVisible(false);
      setTimeout(() => {
        if (!mounted) return;
        setIndex((i) => (i + 1) % phrases.length);
        setVisible(true);
      }, 250); // fade-out duration
    };

    const id = setInterval(tick, interval);
    return () => {
      mounted = false;
      clearInterval(id);
    };
  }, [phrases, interval]);

  return (
    <span
      className={
        "inline-block transition-opacity duration-300 " +
        (visible ? "opacity-100" : "opacity-0") +
        (className ? " " + className : "")
      }
    >
      {phrases[index]}
    </span>
  );
};

export default FadeLoop;
