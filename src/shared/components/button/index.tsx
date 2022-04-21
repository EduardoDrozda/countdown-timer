import { ButtonHTMLAttributes } from "react";
import { Container } from "./styled";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  color: "primary" | "secondary";
}

export function Button({ label, color, ...rest }: Props) {
  return (
    <Container color={color} {...rest}>
      {label}
    </Container>
  );
}
