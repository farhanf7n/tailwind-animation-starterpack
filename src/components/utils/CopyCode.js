"use client";
import { useState } from "react";
import { LuCopy } from "react-icons/lu";
import { FaCheck } from "react-icons/fa6";

const CopyCode = ({ themeData }) => {
  const [copyDone, setCopyDone] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(themeData).then(() => {
      setCopyDone(true);
      setTimeout(() => {
        setCopyDone(false);
      }, 2000);
    });
  };
  return (
    <div className="relative group overflow-hidden">
      <button
        className="absolute z-10 bg-zinc-50 rounded top-2 flex gap-1 items-center right-2 px-2 mx-2 py-1 text-xs  "
        onClick={handleCopy}
      >
        {copyDone ? (
          <>
            <FaCheck />
            <p>Copied!</p>
          </>
        ) : (
          <>
            <LuCopy /> Copy code
          </>
        )}
      </button>
      <pre
        className="h-fit max-h-60 rounded-lg border border-zinc-200  no-scrollbar overflow-auto text-xs  bg-zinc-50 p-3 font-mono"
        style={{ fontFamily: "MonoLisa" }}
      >
        {themeData}
      </pre>
    </div>
  );
};

export default CopyCode;
