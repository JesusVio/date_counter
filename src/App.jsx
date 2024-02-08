import { useState } from "react";

export default function App() {
  return (
    <>
      <Main />
    </>
  );
}

function Main() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  const handleStepDown = () => {
    setStep(step - 1);
  };

  const handleStepUp = () => {
    setStep(step + 1);
  };

  const handleClickDown = () => {
    setCount(count - step);
  };

  const handleClickUp = () => {
    setCount(count + step);
  };
  let dString = "";
  if (count === 0) {
    dString = `Today is ${date.toDateString()}`;
  } else if (count > 0) {
    dString = `${count} days from today is ${date.toDateString()}`;
  } else {
    dString = `${Math.abs(count)} days ago was ${date.toDateString()}`;
  }

  return (
    <div className="container">
      <div>
        <button onClick={handleStepDown} className="button">
          -
        </button>
        <span>Step : {step}</span>
        <button onClick={handleStepUp} className="button">
          +
        </button>
      </div>
      <div>
        <button onClick={handleClickDown} className="button">
          -
        </button>
        <span>Count : {count}</span>
        <button onClick={handleClickUp} className="button">
          +
        </button>
      </div>
      <div>
        <span>{dString}</span>
      </div>
    </div>
  );
}
