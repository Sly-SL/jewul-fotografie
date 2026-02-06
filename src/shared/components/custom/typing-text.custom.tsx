'use client';

import {useEffect, useState} from "react";

const WORDS = ["SERDCE WNĘTRZA", "ELEMENT, KTÓRY BUDUJE CHARAKTER DOMU"] as const;
const TYPING_SPEED = 100;
const ERASING_SPEED = 50;
const PAUSE_DURATION = 2000;

const TypingText = () => {
    const [isTyping, setIsTyping] = useState(true);
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        let timeout: NodeJS.Timeout;

        if (isTyping) {
            if (charIndex < WORDS[wordIndex].length) {
                timeout = setTimeout(() => setCharIndex((prev) => prev + 1), TYPING_SPEED);
            } else {
                timeout = setTimeout(() => setIsTyping(false), PAUSE_DURATION);
            }
        } else {
            if (charIndex > 0) {
                timeout = setTimeout(() => setCharIndex((prev) => prev - 1), ERASING_SPEED);
            } else {
                timeout = setTimeout(() => {
                    setWordIndex((prev) => (prev + 1) % WORDS.length);
                    setIsTyping(true);
                }, 0);
            }
        }

        return () => clearTimeout(timeout);
    }, [charIndex, isTyping, wordIndex]);

    const text = WORDS[wordIndex].slice(0, charIndex);

    return (
        <div className="h-8 flex items-center animate-fadeInUp delay-800">
      <span className="text-xl md:text-2xl bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent font-light">
        KOMINEK TO {text}
      </span>
            <span className="w-[3px] h-6 bg-gradient-to-t from-yellow-300/80 to-orange-500/70 mr-1 animate-blink"></span>
        </div>
    );
};

export default TypingText;