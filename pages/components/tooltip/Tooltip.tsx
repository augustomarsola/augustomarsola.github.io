import { ReactNode } from "react";
import { Content } from "./Tooltip.styles";

interface TooltipProps {
  text: string;
  textAfterClick?: string;
  children: ReactNode;
}

export function Tooltip({ text, textAfterClick, children }: TooltipProps) {
  return (
    <Content>
      <div>{text}</div>
      {children}
    </Content>
  );
}
