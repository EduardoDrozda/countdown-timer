import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.green};
  font-weight: bold;

  font-size: 3rem;
  margin-bottom: 3rem;
`;

export const Form = styled.form`
  width: 17rem;
`;

export const SubmitButtonWrapper = styled.div`
  width: 100%;
  margin-top: 1rem;
`;
