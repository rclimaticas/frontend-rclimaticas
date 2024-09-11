import Image from 'next/image';

const LoginPage = () => (
  <div className="bg-black h-xl flex flex-col sm:flex-row">
    {/* Imagem */}
    <div className="flex w-1/2 items-center justify-center bg-white">
      <Image
        src="https://rclimaticas-fileupload.s3.sa-east-1.amazonaws.com/JXrpbXn.md.png"
        alt="Imagem"
        width={500}
        height={500}
      />
    </div>

    {/* Formulário de login */}
    <div className="flex w-1/2 items-center justify-center">
      <div className="grid w-full max-w-md gap-5">
        <h2 className="text-left text-4xl font-bold">
          Plataforma Colaborativa dos Povos, Culturas e da Natureza
        </h2>
        <h3 className="text-left text-xl font-bold">
          Um espaço descentralizado com o propósito de conectar redes, saberes
          tradicionais, dados técnicos e acadêmicos.
        </h3>
        <button type="submit" className="bg-black w-full p-2 text-white">
          Saber Mais
        </button>
      </div>
    </div>
  </div>
);

export default LoginPage;
