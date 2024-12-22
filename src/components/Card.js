"use client";
import React from "react";
import { LuCopy } from "react-icons/lu";
import { useToast } from "@/hooks/use-toast";
import useSettingsStore from "@/utils/store";

const Card = ({ id, animation, name }) => {
  const { settings } = useSettingsStore();
  const { toast } = useToast();

  const animations = {
    "animate-fadeIn": "animate-fadeIn",
    "animate-fadeOut": "animate-fadeOut",
    "animate-fadeUp": "animate-fadeUp",
    "animate-fadeDown": "animate-fadeDown",
    "animate-fadeLeft": "animate-fadeLeft",
    "animate-fadeRight": "animate-fadeRight",
    "animate-slideUp": "animate-slideUp",
    "animate-slideDown": "animate-slideDown",
    "animate-slideLeft": "animate-slideLeft",
    "animate-slideRight": "animate-slideRight",
    "animate-slideIn": "animate-slideIn",
    "animate-slideOut": "animate-slideOut",
    "animate-rotate": "animate-rotate",
    "animate-scaleUp": "animate-scaleUp",
    "animate-scaleDown": "animate-scaleDown",
    "animate-scaleLeft": "animate-scaleLeft",
    "animate-scaleRight": "animate-scaleRight",
    "animate-scaleIn": "animate-scaleIn",
    "animate-scaleOut": "animate-scaleOut",
    "animate-scaleUpDown": "animate-scaleUpDown",
    "animate-scaleBounce": "animate-scaleBounce",
    "animate-bounce": "animate-bounce",
    "animate-bounceIn": "animate-bounceIn",
    "animate-bounceOut": "animate-bounceOut",
    "animate-bounceRight": "animate-bounceRight",
    "animate-bounceLeft": "animate-bounceLeft",
    "animate-bounceUp": "animate-bounceUp",
    "animate-bounceDown": "animate-bounceDown",
    "animate-zoomIn": "animate-zoomIn 0.5s ease-out",
    "animate-zoomOut": "animate-zoomOut 0.5s ease-out",
    "animate-pulse": "animate-pulse 1.5s infinite",
    "animate-rotate": "animate-rotate 1s linear infinite",
    "animate-shake": "animate-shake 0.5s ease-in-out",
    "animate-ping": "animate-ping",
    "animate-heartbeat": "animate-heartbeat",
    "animate-flipX": "animate-flipX",
    "animate-flipY": "animate-flipY",
    "animate-rollIn": "animate-rollIn",
    "animate-rollOut": "animate-rollOut",
    "animate-wobble": "animate-wobble",
    "animate-jello": "animate-jello",
    "animate-lightSpeedIn": "animate-lightSpeedIn",
    "animate-lightSpeedOut": "animate-lightSpeedOut",
    "animate-spinClockwise": "animate-spinClockwise",
    "animate-spinCounterClockwise": "animate-spinCounterClockwise",
    "animate-spinFast": "animate-spinFast",
    "animate-spinSlow": "animate-spinSlow",
    "animate-spinBounce": "animate-spinBounce",
    "animate-spinZigzag": "animate-spinZigzag",
    "animate-ripple": "animate-ripple",
    "animate-stretchX": "animate-stretchX",
    "animate-stretchY": "animate-stretchY",
    "animate-pendulum": "animate-pendulum",
    "animate-swingRotate": "animate-swingRotate",
    "animate-blurIn": "animate-blurIn",
    "animate-blurOut": "animate-blurOut",
    "animate-glowPulse": "animate-glowPulse",
    "animate-glow": "animate-glow",
    "animate-diagonalSwing": "animate-diagonalSwing",
    "animate-swingBounce": "animate-swingBounce",
    "animate-zoomInUp": "animate-zoomInUp",
    "animate-zoomInDown": "animate-zoomInDown",
    "animate-zoomInBottomRight": "animate-zoomInBottomRight",
    "animate-zoomInBottomLeft": "animate-zoomInBottomLeft",
    "animate-zoomInTopRight": "animate-zoomInTopRight",
    "animate-zoomInTopLeft": "animate-zoomInTopLeft",
    "animate-zoomInDown": "animate-zoomInDown",
    "animate-zoomInRight": "animate-zoomInRight",
    "animate-zoomInLeft": "animate-zoomInLeft",
    "animate-zoomOutLeft": "animate-zoomOutLeft",
    "animate-zoomOutRight": "animate-zoomOutRight",
    "animate-zoomOutUp": "animate-zoomOutUp",
    "animate-zoomOutDown": "animate-zoomOutDown",
  };
  const hoverAnimations = {
    "animate-fadeIn": "hover:animate-fadeIn",
    "animate-fadeOut": "hover:animate-fadeOut",
    "animate-fadeUp": "hover:animate-fadeUp",
    "animate-fadeDown": "hover:animate-fadeDown",
    "animate-fadeLeft": "hover:animate-fadeLeft",
    "animate-fadeRight": "hover:animate-fadeRight",
    "animate-slideUp": "hover:animate-slideUp",
    "animate-slideDown": "hover:animate-slideDown",
    "animate-slideLeft": "hover:animate-slideLeft",
    "animate-slideRight": "hover:animate-slideRight",
    "animate-slideIn": "hover:animate-slideIn",
    "animate-slideOut": "hover:animate-slideOut",
    "animate-rotate": "hover:animate-rotate",
    "animate-scaleUp": "hover:animate-scaleUp",
    "animate-scaleDown": "hover:animate-scaleDown",
    "animate-scaleLeft": "hover:animate-scaleLeft",
    "animate-scaleRight": "hover:animate-scaleRight",
    "animate-scaleIn": "hover:animate-scaleIn",
    "animate-scaleOut": "hover:animate-scaleOut",
    "animate-scaleUpDown": "hover:animate-scaleUpDown",
    "animate-scaleBounce": "hover:animate-scaleBounce",
    "animate-bounce": "hover:animate-bounce",
    "animate-bounceIn": "hover:animate-bounceIn",
    "animate-bounceOut": "hover:animate-bounceOut",
    "animate-bounceRight": "hover:animate-bounceRight",
    "animate-bounceLeft": "hover:animate-bounceLeft",
    "animate-bounceUp": "hover:animate-bounceUp",
    "animate-bounceDown": "hover:animate-bounceDown",
    "animate-zoomIn": "hover:animate-zoomIn 0.5s ease-out",
    "animate-zoomOut": "hover:animate-zoomOut 0.5s ease-out",
    "animate-pulse": "hover:animate-pulse 1.5s infinite",
    "animate-rotate": "hover:animate-rotate 1s linear infinite",
    "animate-shake": "hover:animate-shake 0.5s ease-in-out",
    "animate-ping": "hover:animate-ping ",
    "animate-heartbeat": "hover:animate-heartbeat",
    "animate-flipX": "hover:animate-flipX",
    "animate-flipY": "hover:animate-flipY",
    "animate-rollIn": "hover:animate-rollIn",
    "animate-rollOut": "hover:animate-rollOut",
    "animate-wobble": "hover:animate-wobble",
    "animate-jello": "hover:animate-jello",
    "animate-lightSpeedIn": "hover:animate-lightSpeedIn",
    "animate-lightSpeedOut": "hover:animate-lightSpeedOut",
    "animate-spinClockwise": "hover:animate-spinClockwise",
    "animate-spinCounterClockwise": "hover:animate-spinCounterClockwise",
    "animate-spinFast": "hover:animate-spinFast",
    "animate-spinSlow": "hover:animate-spinSlow",
    "animate-spinBounce": "hover:animate-spinBounce",
    "animate-spinZigzag": "hover:animate-spinZigzag",
    "animate-ripple": "hover:animate-ripple",
    "animate-stretchX": "hover:animate-stretchX",
    "animate-stretchY": "hover:animate-stretchY",
    "animate-pendulum": "hover:animate-pendulum",
    "animate-swingRotate": "hover:animate-swingRotate",
    "animate-blurIn": "hover:animate-blurIn",
    "animate-blurOut": "hover:animate-blurOut",
    "animate-glowPulse": "hover:animate-glowPulse",
    "animate-glow": "hover:animate-glow",
    "animate-diagonalSwing": "hover:animate-diagonalSwing",
    "animate-swingBounce": "hover:animate-swingBounce",
    "animate-zoomInUp": "hover:animate-zoomInUp",
    "animate-zoomInDown": "hover:animate-zoomInDown",
    "animate-zoomInBottomRight": "hover:animate-zoomInBottomRight",
    "animate-zoomInBottomLeft": "hover:animate-zoomInBottomLeft",
    "animate-zoomInTopRight": "hover:animate-zoomInTopRight",
    "animate-zoomInTopLeft": "hover:animate-zoomInTopLeft",
    "animate-zoomInDown": "hover:animate-zoomInDown",
    "animate-zoomInRight": "hover:animate-zoomInRight",
    "animate-zoomInLeft": "hover:animate-zoomInLeft",
    "animate-zoomOutLeft": "hover:animate-zoomOutLeft",
    "animate-zoomOutRight": "hover:animate-zoomOutRight",
    "animate-zoomOutDown": "hover:animate-zoomOutDown",
    "animate-zoomOutUp": "hover:animate-zoomOutUp",
  };

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code).then(() => {
      toast({
        description: `✅ Copied! class for ${name} animation`,
        variant: "custom",
      });
    });
  };

  // Dynamically handle hover animations
  const animationClass = settings.isEnabled
    ? animations[animation]
    : hoverAnimations[animation];

  return (
    <div className="flex flex-col w-fit items-center space-y-2">
      <div
        key={id}
        style={{
          animationDuration: `${
            animation === "animate-spinSlow"
              ? 2 * settings.duration
              : animation.includes("light")
              ? settings.duration / 2
              : settings.duration
          }ms`,
          animationDelay: `${settings.delay}ms`,
          animationTimingFunction: settings.timingFunction,
        }}
        className={`w-[100px] h-[100px] rounded-2xl shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] bg-gray-900 transform transition duration-500 ${
          animationClass // Hover animation
        }`}
      ></div>
      <div className="text-[0.8rem] font-medium flex px-1 justify-between w-full items-center">
        <p className="text-wrap z-20 w-[80px] leading-[0.9rem]">{name}</p>
        <button onClick={() => handleCopy(animation)}>
          <LuCopy className="hover:cursor-pointer" />
        </button>
      </div>
    </div>
  );
};

export default Card;
