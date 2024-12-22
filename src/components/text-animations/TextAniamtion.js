import React from "react";
import TextBlurReveal from "./TextRevealPerChar";
import WordAnimation from "./WordAnimation";
import ScrambleTextAnimation from "./ScrambleTextAnimation";
import TextWordBlurRevealSide from "./TextWordBlurRevealSide";
import TextWordBlurRevealUp from "./TextWordBlurRevealUp";
import TextShimmerEffect from "./TextShimmerEffect";
import CopyCode from "../utils/CopyCode";
import { textAnimationTailwindConfig } from "@/utils/data";

const TextAniamtion = () => {
  return (
    <div>
      <div className="max-w-[600px] mx-auto mb-14">
        <div>
          <p className="font-medium mb-2 text-base">Text Animations</p>
          <p>
            Bring your text to life with stunning animations! Easily apply
            dynamic effects to words, sentences, or even individual characters
            using Tailwind CSS animations.
          </p>
        </div>

        <div className="mt-4">
          <p className="font-medium py-1">Installation</p>
          <ul className="list-disc pl-6">
            <li className="py-2 space-y-2">
              <p className=" mb-2">
                Copy and paste the following code into your{" "}
                <code className="font-semibold px-2 py-1 bg-zinc-50 rounded ">
                  tailwind.config.js
                </code>{" "}
                file under <code>theme</code> section:
              </p>
              <CopyCode themeData={textAnimationTailwindConfig} />
            </li>
            <li>
              Customize the animation using Tailwind&apos;s @keyframes and
              animation utilities.
            </li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TextBlurReveal
          text="Text Char Blur Reveal Animation"
          charDelay={0.05}
        />
        <ScrambleTextAnimation text="Scramble Text" />
        <TextWordBlurRevealSide text="Text Word Blur Side Animation" />
        <TextWordBlurRevealUp text="Text Word Blur Up Animation" />
        <WordAnimation />
        <TextShimmerEffect text="Text Shimmer Effect" />
      </div>
    </div>
  );
};

export default TextAniamtion;
