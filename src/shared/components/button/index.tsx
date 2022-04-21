import { ButtonHTMLAttributes } from "react";
import { Container } from "./styled";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  color: "primary" | "secondary";
}

export function Button({ label, color, id, ...rest }: Props) {
  return (
    <Container id={id} data-testid={id} color={color} {...rest}>
      {label}
    </Container>
  );
}
