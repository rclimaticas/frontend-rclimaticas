/* eslint-disable react/jsx-no-undef */
import type { NextPage } from 'next';

import Carousel from '@/lib/components/Home/Carousel/index';
import Hero from '@/lib/components/Home/Hero/index';
import Occurrences from '@/lib/components/Home/Ocorrences/index';
import SupportMapBiomesWidget from '@/lib/components/Home/SupportAndMapBiomes/index';

const Home: NextPage = () => {
  return (
    <>
      <div className="mt-[-65px] flex-col items-center justify-center gap-8 bg-white p-5 text-center lg:mt-0 lg:px-32">
        <Hero />
      </div>
      <div className="bg-green-200 p-5 lg:p-32">
        <Carousel />
      </div>
      <Occurrences />
      <SupportMapBiomesWidget />
    </>
  );
};

export default Home;
