/* eslint-disable react/jsx-no-undef */
import type { NextPage } from 'next';

import SomeText from '@/lib/components/samples/SomeText';
import Carousel from '@/lib/components/Swiper';

const Home: NextPage = () => {
  return (
    <>
      <div className="flex-col items-center justify-center gap-8 text-center lg:px-20">
        <SomeText />
      </div>
      <div className="bg-orange px-20">
        <Carousel />
      </div>
    </>
  );
};

export default Home;
