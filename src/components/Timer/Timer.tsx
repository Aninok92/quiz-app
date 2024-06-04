import React, { useEffect } from 'react';
import { useTimer } from 'react-timer-hook';

interface TimerProps {
  expiryTimestamp: Date;
  onExpire: () => void;
}

const Timer: React.FC<TimerProps> = ({ expiryTimestamp, onExpire }) => {
  const { seconds, minutes, isRunning, start, pause, resume, restart } = useTimer({
    expiryTimestamp,
    onExpire,
  });

  useEffect(() => {
    start();
  }, [start]);

  return (
    <div className="flex items-center justify-end text-lg font-semibold">
      {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
    </div>
  );
};

export default Timer;