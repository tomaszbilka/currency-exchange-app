"use client";

import { useState } from "react";

const Exchange = () => {
  const [value, setValue] = useState(0);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const sendExchangeRequestHandler = async () => {
    setIsLoading(true);
    setIsError(false);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/transactions`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            value,
          }),
        }
      );
      const data = await response.json();

      setIsLoading(false);
      setValue(0);
      alert(
        `Exchanged ${value} EUR to ${data.amountInPln} PLN. Your transaction is saved in data base.`
      );
    } catch (err) {
      setIsError(true);
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="flex gap-2 items-center">
        <input
          className="px-4 py-2 text-black rounded"
          type="number"
          min={0}
          value={value}
          step={0.01}
          onChange={(e) => setValue(Number(e.target.value))}
          disabled={isLoading}
        />
        <label className="text-2xl">EUR &rarr; PLN</label>
      </div>
      {isLoading ? (
        <div className="text-gray-500 my-4">Loading...</div>
      ) : (
        <button
          className="border rounded-full px-4 py-2 hover:bg-gray-200 hover:text-black"
          onClick={sendExchangeRequestHandler}
        >
          Exchange now
        </button>
      )}
      {isError && (
        <div className="text-red-500 my-4">Error with fetching data!</div>
      )}
    </div>
  );
};

export default Exchange;
