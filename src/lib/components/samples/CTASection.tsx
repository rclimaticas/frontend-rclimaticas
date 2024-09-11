/* eslint-disable @next/next/no-img-element */

const repoName = 'sozonome/nextarter-tailwind';

const CTASection = () => {
  return (
    <div className="grid justify-items-center gap-2.5">
      <div className="flex items-center gap-2">
        <a
          href={`https://vercel.com/import/git?s=https://github.com/${repoName}`}
          className="flex items-center"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            className="w-23 h-8"
            src="https://vercel.com/button"
            alt="Vercel deploy button"
          />
        </a>

        <a
          href={`https://app.netlify.com/start/deploy?repository=https://github.com/${repoName}`}
          className="flex items-center"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            className="w-23 h-8"
            src="https://www.netlify.com/img/deploy/button.svg"
            alt="Netlify deploy button"
          />
        </a>
      </div>

      <div className="flex items-center gap-2">
        <a
          className="from-gray-100 to-green-200 text-green-700 hover:from-gray-200 hover:to-green-200 hover:text-green-800 rounded-lg bg-gradient-to-br p-2 font-semibold"
          href={`https://github.com/${repoName}/generate`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Use This Template
        </a>
        <a
          className="rounded-3xl p-2 text-xs font-semibold"
          href={`https://github.com/${repoName}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Repository
        </a>
      </div>
    </div>
  );
};

export default CTASection;
