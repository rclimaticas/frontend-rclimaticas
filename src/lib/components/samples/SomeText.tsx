import Image from 'next/image';

const LoginPage = () => (
  <div className="h-xl flex flex-col sm:flex-row">
    {/* Imagem */}
    <div className="hidden w-1/2 items-center bg-white lg:flex">
      <Image
        src="https://rclimaticas-fileupload.s3.sa-east-1.amazonaws.com/JXrpbXn.md.png"
        alt="Imagem"
        width={500}
        height={500}
      />
    </div>

    {/* Formulário de login */}
    <div className="flex w-full items-center justify-center bg-white text-black-200 lg:w-1/2">
      <div className="grid w-full gap-5 px-2">
        <h2 className="text-left text-5xl font-bold">
          Plataforma Colaborativa dos Povos, Culturas e da Natureza
        </h2>
        <h3 className="text-left text-xl font-bold">
          Um espaço descentralizado com o propósito de conectar redes, saberes
          tradicionais, dados técnicos e acadêmicos.
        </h3>
        <button type="submit" className="text-black w-full p-2">
          Saber Mais
        </button>
      </div>
    </div>
  </div>
);

export default LoginPage;
