"use client";
import { motion } from "framer-motion";

const foodEmojis = [
  "🍕",
  "🥐",
  "🍩",
  "🍔",
  "🍜",
  "🥗",
  "🍣",
  "🍪",
  "🌮",
  "🥞",
  "🍇",
  "🍓",
  "🍔",
  "🍟",
  "🍦",
  "🥑",
  "🍉",
  "🍪",
  "🥒",
  "🍎",
  "🍒",
  "🥯",
  "🍊",
  "🍓",
];

const randomInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export function FloatingEmojis() {
  const emojiCount = 50; // Increased number of emojis
  const emojiElements = Array.from({ length: emojiCount }, (_, index) => {
    const top = randomInt(0, 99); // Randomly placed from top to bottom of the screen
    const left = randomInt(0, 99); // Randomly placed from left to right of the screen
    const delay = Math.random() * 2; // Delay each animation slightly
    const size = randomInt(20, 50); // Emoji size, can vary
    const duration = randomInt(4, 8); // Emojis can take different times to animate

    return (
      <motion.div
        key={index}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.9 }}
        transition={{
          duration: 0.29,
          delay: 1 + randomInt(0, foodEmojis.length) / 10,
          ease: "easeInOut",
        }}
        className="absolute select-none z-10"
        style={{
          top: `${top}%`,
          left: `${left}%`,
          fontSize: `${size}px`,
          pointerEvents: "none",
        }}
      >
        {foodEmojis[randomInt(0, foodEmojis.length - 1)]}
      </motion.div>
    );
  });

  return <>{emojiElements}</>;
}
