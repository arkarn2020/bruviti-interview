import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// internal
import CountDown from '../components/Countdown';
import { getImage } from '../redux/actions/randomImage';
import { quotes, company } from '../shared/data';

const Home = () => {
  const dispatch = useDispatch();
  const image = useSelector((state) => state.image);

  useEffect(() => {
    const fetchRandomImg = async () => {
      await dispatch(getImage());
    };
    fetchRandomImg();
  }, [dispatch]);

  // generate random integer b/w 1 and 50
  const generateRandomInt = () => {
    return Math.floor(Math.random() * 50 + 1);
  };

  // assign random integers
  let start = generateRandomInt();
  let stop = generateRandomInt();
  let discount = generateRandomInt();

  // swap if start < stop
  if (start < stop) [start, stop] = [stop, start];

  // generate random item from a list of array items
  const generateRandomItem = (arr) => {
    let index = Math.floor(Math.random() * arr.length);
    return arr[index];
  };

  // generate random happy quote
  let celebration = generateRandomItem(quotes);

  // generate random company name
  let companyName = generateRandomItem(company);

  return (
    <div className="max-w-5xl bg-gray-100 mx-auto min-h-screen">
      <div className="flex flex-col justify-center items-center">
        {image.status != 200 ? (
          'loading...'
        ) : (
          <CountDown
            start={start}
            stop={stop}
            discount={discount}
            celebration={celebration}
            product={companyName}
            photo={image.request?.responseURL}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
