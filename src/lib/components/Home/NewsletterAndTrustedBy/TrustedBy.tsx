/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import Contribution from '@/lib/components/Home/Contribution/index';

export default function Newsletter() {
  return (
    <div className="h-full lg:h-[50px]">
      <div className="relative bottom-0 w-full p-5 lg:bottom-40 lg:p-32 xl:bottom-[1250px]">
        <h1 className="mb-2 text-center text-3xl lg:text-right lg:text-4xl">
          Desenvolvido por
        </h1>
        <img src="https://rclimaticas-fileupload.s3.sa-east-1.amazonaws.com/trusted-Jh7-Pct1.png" />
      </div>
      <Contribution />
    </div>
  );
}
