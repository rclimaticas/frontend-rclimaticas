/* eslint-disable sonarjs/no-duplicate-string */

'use client';

/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-console */
import { Card, CardBody, CardFooter } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';

import { MapsData } from '@/lib/components/models/Datarc/Maps';

export default function Maps() {
  return (
    <div className="relative bottom-0 top-[100px] z-20 mt-60 mt-[-50px] grid w-full grid-cols-1 gap-2 p-5 md:mt-0 lg:grid-cols-2 lg:p-20 xl:bottom-0 xl:top-[-400px]">
      {MapsData.map((item, index) => (
        <Link href={item.link} key={index} passHref legacyBehavior>
          <a target="_blank" rel="noopener noreferrer">
            <Card
              shadow="sm"
              className="z-10 cursor-pointer transition-transform duration-700 hover:scale-105"
            >
              <CardBody className="flex items-center justify-center overflow-visible p-0">
                <Image
                  width={590}
                  height={590}
                  alt={item.title}
                  className="object-cover"
                  src={item.img}
                />
              </CardBody>
              <CardFooter className="items-center justify-center text-center text-xl text-black-300">
                <b>{item.title}</b>
              </CardFooter>
            </Card>
          </a>
        </Link>
      ))}
    </div>
  );
}
