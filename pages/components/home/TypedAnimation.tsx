import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import { Content } from "./TypedAnimation.style";

const rolesForTypingAnimation = [
  "desenvolvimento front-end",
  "desenvolvimento de produtos digitais",
  "desenvolvimento de sistemas",
  "UX/UI design",
];

export function TypedAnimation() {
  const spanTyping = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const typeOptions = {
      strings: rolesForTypingAnimation,
      startDelay: 300,
      typeSpeed: 40,
      backSpeed: 60,
      backDelay: 2000,
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
  }, []);

  return <Content ref={spanTyping}>desenvolvimento front-end</Content>;
}
