import React, { useState, useEffect } from 'react';
import './App.scss';

function getRandomName(): string {
  return `Clock-${Date.now().toString().slice(-4)}`;
}

export const App: React.FC = () => {
  const [clockName, setClockName] = useState('Clock-0');
  const [time, setTime] = useState(new Date().toUTCString().slice(-12, -4));

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date().toUTCString().slice(-12, -4));
    }, 1000);

    const nameIntervalId = setInterval(() => {
      setClockName(getRandomName());
    }, 3300);

    return () => {
      clearInterval(timerId);
      clearInterval(nameIntervalId);
    };
  }, []);

  return (
    <div className="App">
      <h1>React clock</h1>

      <div className="Clock">
        <strong className="Clock__name">{clockName}</strong>

        {' time is '}

        <span className="Clock__time">{time}</span>
      </div>
    </div>
  );
};
