/* eslint-disable react/jsx-no-undef */
import type { NextPage } from 'next';
import Image from 'next/image';

import Carousel from '@/lib/components/Carousel/Carousel';
import SomeText from '@/lib/components/samples/SomeText';

const imagesItems = [
  <Image
    className="h-full w-full"
    src="https://rclimaticas-fileupload.s3.sa-east-1.amazonaws.com/collaborate1.png"
    width={500}
    height={500}
    alt="teste"
  />,
  <Image
    className="h-full w-full"
    src="https://rclimaticas-fileupload.s3.sa-east-1.amazonaws.com/collaborate2.png"
    alt="teste"
    width={500}
    height={500}
  />,
  <Image
    className="h-full w-full"
    src="https://rclimaticas-fileupload.s3.sa-east-1.amazonaws.com/collaborate3.png"
    alt="teste"
    width={500}
    height={500}
  />,
  <Image
    className="h-full w-full"
    src="https://rclimaticas-fileupload.s3.sa-east-1.amazonaws.com/collaborate4.png"
    alt="teste"
    width={500}
    height={500}
  />,
];

const Home: NextPage = () => {
  return (
    <div className="flex-col items-center justify-center gap-8 text-center lg:px-20">
      <SomeText />
      <Carousel items={imagesItems} />
    </div>
  );
};

export default Home;
