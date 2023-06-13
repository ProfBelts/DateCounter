import "./styles.css";
import { useState } from "react";

function App() {
  return (
    <div className="app">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [counter, setCounter] = useState(0);
  const [currentDate, setCurrentDate] = useState(getCurrentDate());

  function handleMinus() {
    setStep((s) => s - 1);
  }

  function handlePlus() {
    setStep((s) => s + 1);
  }

  function handleMinusCount() {
    setCurrentDate(getPreviousDate(currentDate));
    setCounter((c) => c - step);
  }

  function handlePlusCount() {
    setCurrentDate(getNextDate(currentDate));
    setCounter((c) => c + step);
  }

  function getCurrentDate() {
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];

    const currentDate = new Date();
    const weekday = weekdays[currentDate.getDay()];
    const month = months[currentDate.getMonth()];
    const day = currentDate.getDate();
    const year = currentDate.getFullYear();

    const formattedDate = `${weekday}, ${month} ${day} ${year}`;
    return formattedDate;
  }

  function getPreviousDate(date) {
    const current = new Date(date);
    current.setDate(current.getDate() - step);
    return current.toDateString();
  }

  function getNextDate(date) {
    const current = new Date(date);
    current.setDate(current.getDate() + step);
    return current.toDateString();
  }

  return (
    <div>
      <div className="counter">
        <button className="button" onClick={handleMinus}>
          {" "}
          -{" "}
        </button>
        <h1> Step: {step} </h1>
        <button className="button" onClick={handlePlus}>
          {" "}
          +{" "}
        </button>
      </div>

      <div className="counter">
        <button className="button" onClick={handleMinusCount}>
          {" "}
          -{" "}
        </button>
        <h1> Counter: {counter} </h1>
        <button className="button" onClick={handlePlusCount}>
          {" "}
          +{" "}
        </button>
      </div>

      <div>
        <h2>
          {counter === 0
            ? "Today is "
            : counter > 0
            ? `${counter} day/days from today is `
            : `${Math.abs(counter)} day/days ago was `}
        </h2>
        <h2> {currentDate} </h2>
      </div>
    </div>
  );
}

export default App;
