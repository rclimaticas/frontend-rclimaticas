/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */

'use client';

import React from 'react';

export interface CarouselIndicatorProps {
  activeIndex: number;
  length: number;
  maxIndicatorVisible?: number;
  onSetActiveIndex: (index: number) => void;
}

export default function CarouselIndicator({
  activeIndex,
  length,
  maxIndicatorVisible = 5,
  onSetActiveIndex,
}: CarouselIndicatorProps) {
  const maxIndicator =
    length > maxIndicatorVisible ? maxIndicatorVisible : length;

  return (
    <div className="carousel-indicator">
      {Array.from(Array(maxIndicator), (_, index) => {
        return (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events
          <div
            key={index}
            className={`carousel-indicator-dots ${activeIndex === index ? 'w-4 opacity-100' : 'bg-gray-400 w-2'}`}
            onClick={() => {
              onSetActiveIndex(index);
            }}
          />
        );
      })}
    </div>
  );
}
