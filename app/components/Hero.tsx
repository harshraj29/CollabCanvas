"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { Spotlight } from "./ui/spotlight";

export function Hero() {
  const Heading = [
    {
      text: "CollabCanvas",
      className: "text-blue-500 dark:text-blue-500",
    },
  ]
  const words = [
    {
      text: "Documents",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "&",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "diagrams",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "for",
    },
    {
      text: "engineering teams",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <h1>
        <TypewriterEffectSmooth words={Heading} />
      </h1>
      <p className="text-neutral-600 dark:text-neutral-200 text-md sm:text-base  ">
        Collaborative experiences in days, not months
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Join now
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Signup
        </button>
      </div>
    </div>
  );
}
