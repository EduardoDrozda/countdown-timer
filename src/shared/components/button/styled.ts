import styled from "styled-components";

interface ButtonProps {
  color: "primary" | "secondary";
}

export const Container = styled.button<ButtonProps>`
  width: 100%;

  background: ${({ theme }) => theme.colors.green};
  border: none;
  border-radius: 1.2rem;

  padding: 0.7rem;

  font-size: 1.3rem;
  font-weight: 600;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.6);
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.gray};
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.3;
    cursor: not-allowed;

    transition: opacity 2s;
  }
`;
