import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Header = styled.header`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2rem;
`;

export const HeaderTitle = styled.span`
  color: ${({ theme }) => theme.colors.green};
  font-weight: bold;

  font-size: 3rem;
`;

export const ButtonWrapper = styled.div`
  width: 150px;
`;

export const MissingTimeWrapper = styled.div`
  height: 100%;
  text-align: center;
`;

export const MissingTitle = styled.span`
  display: block;

  color: ${({ theme }) => theme.colors.gray};

  font-size: 5rem;
  font-weight: 500;
`;

export const CountdownWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 2rem;
`;

export const TimeWrapper = styled.div`
  span {
    display: block;
    margin: 0 3rem;
  }

  span:first-child {
    color: ${({ theme }) => theme.colors.text};
    font-size: 8rem;
  }

  span:last-child {
    color: ${({ theme }) => theme.colors.green};
    font-size: 2rem;
    text-align: center;
  }
`;
