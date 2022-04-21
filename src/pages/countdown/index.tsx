import { useCallback, useEffect, useState } from "react";
import { Button } from "../../shared/components";
import { useCountdown } from "../../shared/contexts";
import {
  ButtonWrapper,
  Container,
  TimeWrapper,
  Header,
  HeaderTitle,
  MissingTimeWrapper,
  MissingTitle,
  CountdownWrapper,
} from "./styled";

import { useNavigate } from "react-router-dom";

export default function Countdown() {
  const { countdownDate } = useCountdown();
  const navigate = useNavigate();

  const [day, setDay] = useState(0);
  const [hour, setHour] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const buildTimer = useCallback(() => {
    const countdown = new Date(countdownDate).getTime();

    setInterval(() => {
      const now = new Date().getTime();
      const timeleft = countdown - now;

      const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );

      const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

      setDay(days);
      setHour(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    }, 1000);
  }, [countdownDate]);

  const returnToHome = useCallback(() => {
    navigate("/");
  }, [navigate]);

  useEffect(() => {
    if (!countdownDate.length) {
      returnToHome();
      return;
    }

    buildTimer();
  }, [returnToHome, countdownDate, buildTimer]);

  return (
    <Container>
      <Header>
        <HeaderTitle>Contador</HeaderTitle>
        <ButtonWrapper>
          <Button
            type="button"
            color="primary"
            label="Reiniciar"
            onClick={returnToHome}
          />
        </ButtonWrapper>
      </Header>

      <MissingTimeWrapper>
        <MissingTitle>Faltam</MissingTitle>
        <CountdownWrapper>
          <TimeWrapper>
            <span>{day}</span>
            <span>Dias</span>
          </TimeWrapper>

          <TimeWrapper>
            <span>{hour}</span>
            <span>Horas</span>
          </TimeWrapper>

          <TimeWrapper>
            <span>{minutes}</span>
            <span>Minutos</span>
          </TimeWrapper>

          <TimeWrapper>
            <span>{seconds}</span>
            <span>Segundos</span>
          </TimeWrapper>
        </CountdownWrapper>
      </MissingTimeWrapper>
    </Container>
  );
}
