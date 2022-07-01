import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import { Content } from "./TypedAnimation.style";

const rolesForTypingAnimation = [
  "desenvolvimento front-end",
  "desenvolvimento com React",
  "desenvolvimento com Next.js",
  "desenvolvimento de produtos digitais",
  "desenvolvimento de sistemas",
  "UX/UI design",
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

  return <Content ref={spanTyping}>desenvolvimento front-end</Content>;
}
