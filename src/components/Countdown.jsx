import React, { useEffect, useState } from 'react';
import Confetti from 'react-dom-confetti';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import cake from '../assets/cake.svg';

toast.configure({
  autoClose: 15000,
  draggable: true,
});

const Countdown = ({ start, stop, discount, celebration, product, photo }) => {
  const [counter, setCounter] = useState(start);
  const [timer, setTimer] = useState(null);
  const [message, setMessage] = useState(null);
  const [confetti, setConfetti] = useState(false);
  const [pressbtnStatus, setPressbtnStatus] = useState(false);

  // console.log(start, stop, discount, celebration, product);

  // countdown timer
  const surprise = () => {
    let result = setInterval(() => {
      setCounter((c) => c - 1);
    }, 1000);
    setTimer(result);
  };

  // press button handler
  const handlePress = () => {
    setPressbtnStatus(true);
    surprise();
  };

  // toastify
  const notify = () => {
    toast(`${product} ${discount}% off. Order now!!`);
  };

  useEffect(() => {
    if (counter === stop) {
      clearInterval(timer);
      setMessage(`happy ${celebration}`);
      setConfetti(true);
      notify();
      document.title = `${discount}% off on ${product} | MEGA DEALS `;
    } else {
      setMessage(counter);
    }
  }, [counter]);

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="mt-20">
          {confetti ? (
            <img src={cake} alt="cake" className="w-32 h-32" />
          ) : (
            <button
              className="m-5 px-9 py-12 bg-green-500 hover:bg-green-400 rounded-full text-white text-2xl shadow-sm hover:shadow-lg"
              onClick={handlePress}
              disabled={pressbtnStatus}
            >
              press
            </button>
          )}
        </div>
        {/* display quote */}
        <div className="m-10 text-opacity-80 text-4xl capitalize">
          {message}
        </div>
        {/* confetti  */}
        <Confetti active={confetti} />
        {/* random image */}
        {confetti && (
          <img src={photo} alt={message} className="w-80 rounded-xl sm:w-3/5" />
        )}
      </div>
    </>
  );
};

export default Countdown;
