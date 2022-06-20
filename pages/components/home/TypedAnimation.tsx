import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import { Content } from "./TypedAnimation.style";

const rolesForTypingAnimation = [
  "desenvolvimento front-end",
  "desenvolvimento de produtos digitais",
  "UX/UI design",
];

const typeOptions = {
  strings: [
    "desenvolvimento front-end",
    "desenvolvimento de produtos digitais",
    "UX/UI design",
  ],
  startDelay: 300,
  typeSpeed: 40,
  backSpeed: 100,
  backDelay: 100,
  smartBackspace: true,
  loop: true,
  showCursor: true,
  cursorChar: "!",
};

export function TypedAnimation() {
  const spanTyping = useRef<HTMLParagraphElement>(null);
  const [teste, setTeste] = useState("Teste");

  useEffect(() => {
    const typed = new Typed(spanTyping.current!, typeOptions);
  }, []);

  return <Content ref={spanTyping}></Content>;
}
