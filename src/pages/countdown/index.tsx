import { useCallback, useEffect, useRef, useState } from "react";
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

import music from "../../assets/mp3/TheFinalCountdown.mp3";

let timeInterval: NodeJS.Timer;

export default function Countdown() {
  const { countdownDate } = useCountdown();
  const navigate = useNavigate();

  const [day, setDay] = useState(0);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  const audioRef = useRef<HTMLAudioElement>(null);

  const buildTimer = useCallback(() => {
    const countdown = new Date(countdownDate).getTime();

    timeInterval = setInterval(() => {
      const now = new Date().getTime();
      const timeleft = countdown - now;

      const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );

      const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

      const itsFinalCountdown =
        days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0;

      if (itsFinalCountdown) {
        audioRef.current?.play();
      }

      setDay(days);
      setHour(hours);
      setMinute(minutes);
      setSecond(seconds);
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

    return () => {
      clearInterval(timeInterval);
    };
  }, [returnToHome, countdownDate, buildTimer]);

  return (
    <Container>
      <audio ref={audioRef}>
        <source type="audio/mp3" src={music} />
      </audio>
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
            <span>{minute}</span>
            <span>Minutos</span>
          </TimeWrapper>

          <TimeWrapper>
            <span>{second}</span>
            <span>Segundos</span>
          </TimeWrapper>
        </CountdownWrapper>
      </MissingTimeWrapper>
    </Container>
  );
}
