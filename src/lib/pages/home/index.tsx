/* eslint-disable react/jsx-no-undef */
import type { NextPage } from 'next';

import SomeText from '@/lib/components/samples/SomeText';
import Carousel from '@/lib/components/Swiper';

const Home: NextPage = () => {
  return (
    <>
      <div className="flex-col items-center justify-center gap-8 bg-white text-center lg:px-32">
        <SomeText />
      </div>
      <div className="base:min-h-screen max-h-screen bg-green">
        <Carousel />
      </div>
    </>
  );
};

export default Home;
