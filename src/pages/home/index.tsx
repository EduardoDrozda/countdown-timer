import { FormEvent, useCallback } from "react";
import { Button, Input } from "../../shared/components";
import { useCountdown } from "../../shared/contexts";
import { SubmitButtonWrapper, Container, Form, Title } from "./styles";

import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const { countdownDate, saveCountdownDate } = useCountdown();

  function getMinValidDate() {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate());
    return tomorrow.toISOString().split("T")[0];
  }

  const handleCountdownDate = useCallback(
    (value: string) => {
      saveCountdownDate(value);
    },
    [saveCountdownDate]
  );

  const handleStartCountdown = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      navigate("/countdown");
    },
    [navigate]
  );

  return (
    <Container>
      <Title>Contador</Title>
      <Form onSubmit={handleStartCountdown}>
        <Input
          label="Informe uma data"
          placeholder="DD/MM/AAAA"
          autoFocus
          value={countdownDate}
          onChange={(e) => handleCountdownDate(e.target.value)}
          min={getMinValidDate()}
        />

        <SubmitButtonWrapper>
          <Button
            disabled={countdownDate.length < 10}
            type="submit"
            label="Iniciar contagem"
            color="primary"
          />
        </SubmitButtonWrapper>
      </Form>
    </Container>
  );
}
