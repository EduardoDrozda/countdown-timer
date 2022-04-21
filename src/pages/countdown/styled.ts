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

  ${({ theme }) =>
    theme.medias.md({
      flexDirection: "column",
    })}
`;

export const HeaderTitle = styled.span`
  color: ${({ theme }) => theme.colors.green};
  font-weight: bold;

  font-size: 3rem;

  ${({ theme }) =>
    theme.medias.md({
      fontSize: "2rem",
      marginBottom: "1rem",
    })}
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

  ${({ theme }) =>
    theme.medias.md({
      fontSize: "3rem",
    })}
`;

export const CountdownWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 2rem;

  ${({ theme }) =>
    theme.medias.md({
      flexDirection: "column",
    })}
`;

export const TimeWrapper = styled.div`
  span {
    display: block;
    margin: 0 3rem;
  }

  span:first-child {
    color: ${({ theme }) => theme.colors.text};
    font-size: 8rem;

    ${({ theme }) =>
      theme.medias.md({
        fontSize: "5rem",
      })}
  }

  span:last-child {
    color: ${({ theme }) => theme.colors.green};
    font-size: 2rem;
    text-align: center;

    ${({ theme }) =>
    theme.medias.md({
      marginBottom: '1rem'
    })}
  }
`;
