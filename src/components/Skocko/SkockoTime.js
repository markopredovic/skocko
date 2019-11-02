import React, { useEffect } from 'react';

const SkockoTime = ({
  time,
  updateTime,
  endGame,
  is_game_ended,
  is_success,
  is_game_started
}) => {
  useEffect(() => {
    const timer = setInterval(() => {
      if (!is_game_started) {
        return clearInterval(timer);
      }
      if (time === 60 || is_game_ended) {
        endGame(is_success);
        return clearInterval(timer);
      }
      updateTime(time + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [time, is_game_started]);

  return (
    <div className="l-time">
      <div
        className="l-inner-content"
        style={{ height: `${(time / 60) * 100}%`, backgroundColor: "yellow" }}
      ></div>
    </div>
  );
};

export default SkockoTime;