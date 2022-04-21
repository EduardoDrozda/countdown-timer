import { forwardRef, InputHTMLAttributes } from "react";
import { Container, FormInput, FormLabel } from "./styles";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ label, id, ...rest }, ref) => {
    return (
      <Container>
        {label && <FormLabel htmlFor={id}>{label}</FormLabel>}
        <FormInput
          id={id}
          ref={ref}
          name="dateValue"
          data-testid={id}
          {...rest}
        />
      </Container>
    );
  }
);
