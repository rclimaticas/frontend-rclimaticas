/* eslint-disable react-hooks/exhaustive-deps */

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';

import { OccurrencesData } from '../../models/Home/Ocorrences';

const { title, button } = OccurrencesData;

export default function Occurrences() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <>
      <div
        ref={ref}
        className={`mt-32 grid w-full gap-5 text-center transition-opacity duration-1000 lg:mt-0 lg:w-10/12 lg:text-left ${
          isVisible ? 'motion-preset-slide-right' : 'opacity-0'
        }`}
        style={{ transition: 'opacity 1s ease-in-out' }}
      >
        <h1 className="text-3xl lg:text-4xl">No período...</h1>
        <div className="text-xl lg:text-2xl">
          Foram registrados 20 ocorrências, sendo 6 animais selvagens
          encontrados, 4 conflitos com empreendimentos, 2 desmatamentos, 3
          poluições no rio, 1 poluição de solo/erosão, 1 queimada e 3 outras
          ocorrências.
        </div>
        <Link
          href="/assets/boletiminfo.pdf"
          passHref
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            type="submit"
            className="w-60 rounded-xl border-2 border-black-300 bg-orange p-2 text-xl font-bold text-black-300 shadow-[rgba(0,0,15,0.5)_-3px_5px_4px_0px] xl:w-1/2"
          >
            Ler Boletim Mensal
          </button>
        </Link>
      </div>

      <div
        className={`flex w-full flex-col justify-center gap-5 text-center transition-opacity duration-1000 lg:justify-end lg:text-right ${
          isVisible ? 'motion-preset-slide-left' : 'opacity-0'
        }`}
        style={{ transition: 'opacity 1s ease-in-out' }}
      >
        <div className="hidden xl:flex">
          <h2>
            {title.name}
            <Link
              href="https://arcg.is/1mzbme"
              passHref
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                type="submit"
                className="ml-0 mt-5 w-72 rounded-xl border-2 border-black-300 bg-orange p-2 text-xl text-black-300 shadow-[rgba(0,0,15,0.5)_-3px_5px_4px_0px] lg:ml-2 lg:mt-0 lg:w-3/5"
              >
                {button.name}
              </button>
            </Link>
          </h2>
        </div>
        <div className="flex flex-col font-sans xl:hidden">
          <h2 className="text-3xl lg:text-4xl">{title.name}</h2>
          <Link
            href="https://arcg.is/1mzbme"
            passHref
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              type="submit"
              className="ml-0 mt-3 w-72 rounded-xl border-2 border-black-300 bg-orange p-2 text-xl font-bold text-black-300 shadow-[rgba(0,0,15,0.5)_-3px_5px_4px_0px]"
            >
              {button.name}
            </button>
          </Link>
        </div>
        <div>
          <div className="flex items-center justify-center">
            <Image
              className="shadow-[rgba(0,0,15,0.5)_-10px_10px_4px_0px]"
              src="https://rclimaticas-fileupload.s3.sa-east-1.amazonaws.com/dashboard-DAWr450K.png"
              alt="Dashboard"
              width={700}
              height={700}
            />
          </div>
        </div>
      </div>
    </>
  );
}
