// @ts-nocheck
'use client'

import React, { useState, useEffect } from "react";
import * as HeroIcons from '@heroicons/react/24/solid';

export default function Home() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [currentIconIndex, setCurrentIconIndex] = useState(0);

  const iconComponents = Object.values(HeroIcons);

  useEffect(() => {
    const updateCursorPosition = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });

      // Change the icon whenever the mouse moves
      setCurrentIconIndex((prevIndex) => (prevIndex + 1) % iconComponents.length);
    };

    // Attach event listener for mousemove
    window.addEventListener("mousemove", updateCursorPosition);

    // Cleanup: remove event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
    };
  }, [iconComponents]);

  const CurrentIcon = iconComponents[currentIconIndex];

  return (
    <div className="flex justify-center items-center" style={{ position: 'relative', height: '100vh' }}>
      <div
        style={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle at center, white 0%, black 50%)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CurrentIcon className="text-black h-64 w-64" />
      </div>
    </div>
  );
}
