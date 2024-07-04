"use client";

import React, { useState, useEffect } from 'react';

const messages = [
  'I am a programmer',
  'I am a student',
  'I am a tech enthusiast',
  'I am a data analyzer',
  'I am a math lover',
  'I am a cricket lover'
];
const Typewriter = () => {
    const [currentMessage, setCurrentMessage] = useState('');
    const [messageIndex, setMessageIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
  
    useEffect(() => {
      const typeSpeed = isDeleting ? 40 : 80;
      const timeout = setTimeout(() => {
        const currentMessageFull = messages[messageIndex];
  
        if (isDeleting) {
          if (charIndex > 0) {
            setCurrentMessage((prev) => prev.slice(0, -1));
            setCharIndex((prev) => prev - 1);
          } else {
            
            // pause before starting
            setTimeout(() => setIsDeleting(false), 500);
            setMessageIndex((prev) => (prev + 1) % messages.length);
          }
        } else {
          if (charIndex < currentMessageFull.length) {
            setCurrentMessage((prev) => prev + currentMessageFull[charIndex]);
            setCharIndex((prev) => prev + 1);
          } else {
            setTimeout(() => setIsDeleting(true), 2000); // Pause before deleting
          }
        }
      }, typeSpeed);
  
      return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, messageIndex]);
  
    return <h2 className="typewriter">{currentMessage}</h2>;
  };

export default Typewriter;


