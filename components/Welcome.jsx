import Image from 'next/image';
import { Button } from './ui/button';

const Welcome = ({ text, setText }) => {
  return (
    <>
      {!text ? (
        <section className="flex flex-col gap-3 items-center justify-center flex-1">
          <Image src="/icons/gtAI.svg" alt="logo icon" width={60} height={60} />
          <div className="flex flex-col gap-2 items-center w-full">
            <p className="text-center opacity-75 text-sm">Hi, Dear User !</p>
            <h1 className="text-2xl sm:text-3xl font-bold sm:font-extrabold text-white opacity-70 text-center">
              I Can translate or resume Texts
            </h1>
          </div>
          <p className="text-sm text-center max-w-lg opacity-70">
            As for now, The summarizer works only for English texts and is
            available when the text provided exceeds 150 characters. The
            translator
          </p>
        </section>
      ) : (
        <section className="flex-1 flex flex-col gap-2">
          <div className="flex flex-col backdrop-blur-3xl w-fit p-2 rounded-2xl bg-[#0e1214] self-end ml-10">
            <p className="text-sm">{text}</p>
            <div className="flex gap-1 justify-between p-1 rounded-bl-2xl">
              {text.trim().length >= 150 && (
                <Button className="border-[0.5px] border-[#383b44] hover:shadow-btnShad transition-all summarizeBnt">
                  <span className="hidden sm:inline-block">Summarize</span>
                  <span className="sm:hidden inline-block">S</span>
                  <Image
                    src="/icons/short.svg"
                    width={20}
                    height={20}
                    alt="Short icon"
                  />
                </Button>
              )}

              <div className="flex gap-2">
                <select
                  defaultValue="lang"
                  className="bg-transparent border-b border-[#565b69] text-[rgb(165,174,201)] text-sm focus:ring-1 focus:ring-black dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-100 hover:shadow-btnShad rounded-sm transition-all">
                  <option value="lang">Lang</option>
                  <option value="en">Engl</option>
                  <option value="zh">Chin</option>
                  <option value="hi">Hin</option>
                  <option value="es">Span</option>
                  <option value="fr">French</option>
                  <option value="ar">Arab</option>
                  <option value="bn">Beng</option>
                  <option value="pt">Port</option>
                  <option value="ru">Rus</option>
                </select>
                <Button className="border-[0.5px] border-[#383b44] hover:shadow-btnShad transition-all translateBnt">
                  <span className="hidden sm:inline-block">Translate</span>
                  <span className="sm:hidden inline-block">Trans</span>
                  <Image
                    src="/icons/language.svg"
                    width={20}
                    height={20}
                    alt="Translate icon"
                  />
                </Button>
              </div>
            </div>
          </div>
          <div className="w-fit mr-10 p-2 rounded-2xl bg-[#0e1214] self-start">
            Hey
          </div>
        </section>
      )}
    </>
  );
};
export default Welcome;
