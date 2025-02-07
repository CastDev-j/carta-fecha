import { useState, useEffect } from "react";
import { intervalToDuration } from "date-fns";
import { Envelope } from "./Envelope";

const dateRevealSecret = new Date("2025-02-14T00:00:00");

export const Card = () => {
  const [remainingTime, setRemainingTime] = useState(
    intervalToDuration({ start: new Date(), end: dateRevealSecret })
  );

  const [isRevealSecret, setIsRevealSecret] = useState(new Date() >= dateRevealSecret);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setRemainingTime(intervalToDuration({ start: now, end: dateRevealSecret }));

      // Comprobar si la fecha ya pasó
      if (now >= dateRevealSecret) {
        setIsRevealSecret(true);
        clearInterval(interval); // Detener el intervalo cuando se revele el secreto
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number | undefined): string =>
    String(num || 0).padStart(2, "0");

  console.log(remainingTime);
  

  return (
    <div className="fade-up">
		
      <div className="text-center text-pink-500 mb-6">
        <p className={`text-lg font-semibold ${isRevealSecret ? "opacity-0" : ""}`}>
          Faltan{" "}
          <span className="text-2xl">{formatNumber(remainingTime.days)}</span> días,{" "}
          <span className="text-2xl">{formatNumber(remainingTime.hours)}</span> horas,{" "}
          <span className="text-2xl">{formatNumber(remainingTime.minutes)}</span> minutos y{" "}
          <span className="text-2xl">{formatNumber(remainingTime.seconds)}</span> segundos para ver el secreto.
        </p>
      </div>
      <Envelope isOpen={isRevealSecret} />
    </div>
  );
};
