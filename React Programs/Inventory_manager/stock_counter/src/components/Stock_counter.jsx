import React, { useState } from 'react';

function Stock_counter() {
  const [count, setCount] = useState(10);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 rounded-2xl bg-amber-300 px-2 py-2">
      <h1 className="font-bold text-2xl">Stock counter</h1>

      <h2 className="text-xl">{count}</h2>

      <div className="flex gap-3">
        <button
          className="bg-blue-600  px-4 py-2 rounded hover:bg-blue-700"
          onClick={() => setCount(count + 1)}
        >
          Add stock
        </button>

        <button
          className={`px-4 py-2 rounded 
            ${count === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}
          `}
          onClick={() => setCount(count - 1)}
          disabled={count === 0}
        >
          Remove stock
        </button>
      </div>
    </div>
  );
}

export default Stock_counter;
