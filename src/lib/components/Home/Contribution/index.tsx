/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';

import LigaLogo from '@/lib/components/Home/Contribution/LigaLogo';
import { ContributionData } from '@/lib/components/models/Home/Contribution';

const { title, button } = ContributionData;

export default function Contribution() {
  return (
    <div className="relative bottom-0 grid gap-4 p-5 text-center text-3xl lg:bottom-40 xl:bottom-[1450px] xl:p-32 xl:text-justify">
      <h1 className="text-3xl lg:text-4xl">{title.name}</h1>
      <div className="text-xl font-light lg:text-2xl">{title.description}</div>
      <img src="https://rclimaticas-fileupload.s3.sa-east-1.amazonaws.com/financiadores-CY6bvfzI+(1).png" />
      <div className="flex w-full items-center justify-center">
        <Link
          href="https://www.espiralds.com/doe"
          passHref
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            type="submit"
            className="ml-0 mt-5 w-56 rounded-xl border-2 border-black-300 bg-orange p-2 text-xl font-semibold text-black-300 shadow-[rgba(0,0,15,0.5)_-3px_5px_4px_0px] lg:ml-5 lg:mt-5"
          >
            {button.name}
          </button>
        </Link>
      </div>
      <div className="hidden rounded-full xl:flex">
        <LigaLogo />
      </div>
    </div>
  );
}
