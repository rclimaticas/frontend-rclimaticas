/* eslint-disable react/jsx-no-undef */
import type { NextPage } from 'next';

import SomeText from '@/lib/components/samples/SomeText';
import Carousel from '@/lib/components/Swiper';

const Home: NextPage = () => {
  return (
    <div className="overflow-hidden">
      <div className="flex-col items-center justify-center gap-8 bg-white text-center lg:px-32">
        <SomeText />
      </div>
      <div className="base:min-h-screen max-h-full bg-green-200 p-5 md:p-32">
        <Carousel />
      </div>
    </div>
  );
};

export default Home;
