import React, { useState } from "react";

export default function Bar({ label, defaultValue }) {
  const [height, setHeight] = useState(defaultValue);
  const [barHeight, setBarHeight] = useState(defaultValue);

  function updateBar() {
    if (height <= 100) {
      setBarHeight(Number(height));
    }
  }
  return (
    <div className="flex flex-col items-center justify-end">
      <div
        style={{ height: barHeight * 3 }}
        className="flex min-h-[2px] w-16 flex-col justify-center rounded-t-xl border-2 bg-gradient-to-t from-blue-400  to-blue-600 transition-all duration-500"
      ></div>
      <h2 className="my-2 font-bold text-black/90">{label}</h2>
      <input
        className="rounded-lg border-2 border-gray-400 text-center text-lg font-semibold outline-none"
        type="number"
        min={0}
        max={100}
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <button
        className="hover:bg-black-100 my-2 rounded-lg border border-gray-200 bg-blue-400 py-2 px-5 text-sm font-medium text-gray-900 hover:bg-blue-500 hover:text-black"
        onClick={updateBar}
      >
        Refresh
      </button>
    </div>
  );
}
