'use client';

import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { useState, useEffect } from 'react';

import Carousel from '@/lib/components/Datarc/CarouselAndContribution/Carousel';

export default function CarouselAndCarousel() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 200);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      {isLoading ? (
        <div className="animate-pulse space-y-4">
          <div className="flex items-center justify-center">
            <div className="flex h-[560px] w-full items-center justify-center rounded-md">
              <Box sx={{ display: 'flex' }}>
                <CircularProgress />
              </Box>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative bottom-[80px] bg-green-200 p-20">
          <Carousel />
        </div>
      )}
      {/* <Contribution /> */}
    </>
  );
}
