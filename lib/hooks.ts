import { useState, useEffect } from "react";

export function useTyping(words: string[][]) {
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const [targetLine1, targetLine2] = words[wordIndex];
    const typingSpeed = isDeleting ? 30 : 65;
    const pauseTime = 2200;

    const handleTyping = () => {
      if (!isDeleting) {
        if (line1.length < targetLine1.length) {
          setLine1(targetLine1.substring(0, line1.length + 1));
        } else if (line2.length < targetLine2.length) {
          setLine2(targetLine2.substring(0, line2.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (line2.length > 0) {
          setLine2(targetLine2.substring(0, line2.length - 1));
        } else if (line1.length > 0) {
          setLine1(targetLine1.substring(0, line1.length - 1));
        } else {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [line1, line2, isDeleting, wordIndex, words]);

  return { line1, line2, wordIndex, words };
}
