import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const FormInput = styled.input`
  width: 100%;
  height: 3rem;

  outline: none;
  border: 0;
  border-radius: 1.2rem;

  background: ${({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.text};

  font-size: 1rem;

  padding: 0 1.5rem;
`;

export const FormLabel = styled.label`
  display: block;
  width: 100%;
  text-align: center;

  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text};

  margin-bottom: 1rem;
`;
