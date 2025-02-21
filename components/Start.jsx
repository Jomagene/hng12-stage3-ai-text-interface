import Image from 'next/image';

const Start = () => {
  return (
    <section className="flex flex-col gap-3 items-center justify-center flex-1">
      <Image src="/icons/gtAI.svg" alt="logo icon" width={60} height={60} />
      <div className="flex flex-col gap-2 items-center w-full">
        <p className="text-center opacity-75 text-sm">Hi, Dear User !</p>
        <h1 className="text-2xl sm:text-3xl font-bold sm:font-extrabold text-white opacity-70 text-center">
          I Can translate or resume Texts
        </h1>
      </div>
      <p className="text-sm text-center max-w-lg opacity-70">
        As for now, The summarizer works only for English texts and is available
        when the text provided exceeds 150 characters. The translator is
        available for any caracter.
      </p>
    </section>
  );
};
export default Start;
