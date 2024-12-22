"use client";
import { themeData } from "@/utils/data";
import { LuCopy } from "react-icons/lu";
import { useToast } from "@/hooks/use-toast";

const BasicAnimationGuide = () => {
  const { toast } = useToast();
  const handleCopy = () => {
    navigator.clipboard.writeText(themeData).then(() => {
      toast({
        description: `✅ Copied! the tailwind.config.js code`,
        variant: "custom",
      });
    });
  };
  return (
    <div className="mx-auto w-full max-w-[600px] flex flex-col gap-6">
      <div>
        <p className="font-medium text-base">Installation</p>
        <ul className="list-disc pl-5 text-sm">
          <li className="py-2">
            <p className=" mb-2">
              Copy and paste the following code into your{" "}
              <code
                className="font-semibold px-2 py-1 bg-zinc-50 rounded font-mono"
                style={{ fontFamily: "MonoLisa" }}
              >
                tailwind.config.js
              </code>{" "}
              file under <code style={{ fontFamily: "MonoLisa" }}>theme</code>{" "}
              section:
            </p>
            <div className="relative group overflow-hidden">
              <button
                onClick={handleCopy}
                className="absolute z-10 bg-zinc-50 rounded top-2 flex gap-1 items-center right-2 px-2 mx-2 py-1 text-xs  "
              >
                <LuCopy /> Copy code
              </button>
              <pre
                className="h-fit max-h-60 no-scrollbar overflow-auto text-xs border rounded-xl bg-zinc-50 p-3 font-mono"
                style={{ fontFamily: "MonoLisa" }}
              >
                {themeData}
              </pre>
            </div>
          </li>
          <li>
            <p>
              Simply copy the classes for the animations below and paste them
              directly into your code!
            </p>
          </li>
        </ul>
      </div>
      <small className="px-2 border-l-2 border-s-zinc-100 p-1 ">
        <span className="font-medium">Note:</span> Hover/Click over the card to
        see the animations
      </small>
    </div>
  );
};

export default BasicAnimationGuide;
