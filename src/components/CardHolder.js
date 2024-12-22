import React from "react";
import Card from "./Card";
import { animationData } from "@/utils/data";

const CardWrapper = ({ data, name }) => {
  return (
    <div className="flex flex-col gap-4 w-full max-w-[950px] p-6 rounded-2xl bg-[#F9F9F9]">
      <div className="flex justify-between items-center w-full">
        <p className="bg-white px-4 py-1 text-sm font-medium border border-zinc-200 rounded-full w-fit">
          {name}
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 justify-center flex-wrap items-start">
        {data.map((animation) => (
          <div key={animation.id} className="w-full flex justify-center">
            <Card
              id={animation.id}
              animation={animation.className}
              name={animation.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const CardHolder = () => {
  const fadeAnimations = animationData.filter(
    (animation) => animation.animation === "Fade"
  );

  const bounceAnimations = animationData.filter(
    (animation) => animation.animation === "Bounce"
  );

  const slideAnimations = animationData.filter(
    (animation) => animation.animation === "Slide"
  );

  const scaleAnimations = animationData.filter(
    (animation) => animation.animation === "Scale"
  );

  const spinAnimations = animationData.filter(
    (animation) => animation.animation === "Spin"
  );

  const swingAnimations = animationData.filter(
    (animation) => animation.animation === "Swing"
  );

  const reactionAnimations = animationData.filter(
    (animation) => animation.animation === "Reaction"
  );

  const zoomAnimations = animationData.filter(
    (animation) => animation.animation === "Zoom"
  );

  const otherAnimations = animationData.filter(
    (animation) => animation.animation === "Other"
  );

  return (
    <>
      {/* <Settings /> */}
      <div className="w-full flex flex-col justify-start items-center gap-6">
        <CardWrapper name="Fade" data={fadeAnimations} />
        <CardWrapper name="Bounce" data={bounceAnimations} />
        <CardWrapper name="Slide" data={slideAnimations} />
        <CardWrapper name="Scale" data={scaleAnimations} />
        <CardWrapper name="Swing" data={swingAnimations} />
        <CardWrapper name="Spin" data={spinAnimations} />
        <CardWrapper name="Reaction" data={reactionAnimations} />
        <CardWrapper name="Zoom" data={zoomAnimations} />
        <CardWrapper name="Other" data={otherAnimations} />
      </div>
    </>
  );
};

export default CardHolder;
