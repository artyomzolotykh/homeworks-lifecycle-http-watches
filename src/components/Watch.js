import React from "react";

const getHoursDeg = (hours, minutes) => {
  return (hours * 30) + (minutes * 0.5);
}

const getMinutesDeg = (minutes, seconds) => {
  return (minutes * 6) + (seconds * 0.1);
}

const getSecondsDeg = seconds => {
  return (seconds * 6);
}

const Watch = props => {

  const {id, title, time} = props.item;

  const [hours, setHours] = React.useState(new Date().getUTCHours() + Number(time));
  const [minutes, setMinutes] = React.useState(new Date().getUTCMinutes());
  const [seconds, setSeconds] = React.useState(new Date().getUTCSeconds());
  let timeout;

  const getTime = () => {
    setHours(new Date().getUTCHours() + Number(time));
    setMinutes(new Date().getUTCMinutes());
    setSeconds(new Date().getUTCSeconds());
  }

  React.useEffect(() => {
    getTime();
    timeout = setTimeout(getTime, 1000);

    return () => {
      clearTimeout(timeout);
    }
  });

  const handleRemoveItem = id => {
    props.removeItem(id);
  }

  return (
    <div className="Watch">
      <button onClick={() => handleRemoveItem(id)} className="watch_remove">x</button>
      <div className="watch_title">{title}</div>
      <div className="circle">
        <div className="hours" style={{transform: `rotate(${getHoursDeg(hours, minutes)}deg)` }}></div>
        <div className="minutes" style={{transform: `rotate(${getMinutesDeg(minutes, seconds)}deg)`}}></div>
        <div className="seconds" style={{transform: `rotate(${getSecondsDeg(seconds)}deg)`}}></div>
      </div>
    </div>
  )
}

export default Watch;