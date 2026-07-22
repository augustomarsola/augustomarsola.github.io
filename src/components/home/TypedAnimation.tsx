import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import { Content } from "./TypedAnimation.style";

const rolesForTypingAnimation = [
  "Front-End Development",
  "Full-Stack Development",
  "React",
  "TypeScript",
  "Next.js",
  "Node.js",
  ".NET",
  "AWS",
  "GCP",
  "Microsoft Azure",
  "Python",
  "RPA",
  "Digital Product Development",
  "Software Development",
];

interface TypedAnimationProps {
  timeDelay: number;
}

export function TypedAnimation({ timeDelay }: TypedAnimationProps) {
  const spanTyping = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const typeOptions = {
      strings: rolesForTypingAnimation,
      startDelay: timeDelay * 1200,
      typeSpeed: 40,
      backSpeed: 60,
      backDelay: 2500,
      smartBackspace: true,
      loop: true,
      showCursor: true,
    };

    const typed = new Typed(spanTyping.current!, typeOptions);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.destroy();
    };
  }, [timeDelay]);

  return <Content ref={spanTyping}>Front-End Development</Content>;
}
