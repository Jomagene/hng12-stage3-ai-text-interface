import Image from 'next/image';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import translateUnknownCustomerInput from '@/lib/language';
import summarise from '@/lib/nonStreamSummarizer';

const Prompt = () => {
  return (
    <section className="bg-[#0e1214] backdrop-blur-3xl rounded-2xl">
      <Textarea
        placeholder="What would you like to translate or get summarized ?"
        className="focus:border hover:shadow-btnShad rounded-lg pb-14 m-[-1px] text-sm min-h-40"
      />
      <div className="flex gap-2 justify-between absolute bottom-0 left-0 right-2 p-3 bg-[#0e1214] backdrop-blur-3xl rounded-bl-2xl">
        <Button className="border-[0.5px] border-[#383b44] hover:shadow-btnShad transition-all">
          <span className="hidden sm:inline-block">Summarize</span>
          <span className="sm:hidden inline-block">Sum</span>
          <Image
            src="/icons/short.svg"
            width={20}
            height={20}
            alt="Short icon"
          />
        </Button>
        <div className="flex gap-2">
          <select
            defaultValue="lang"
            className="bg-transparent border-b border-[#565b69] text-[rgb(165,174,201)] text-sm focus:ring-1 focus:ring-black dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-100 hover:shadow-btnShad rounded-sm transition-all">
            <option value="lang">Lang</option>
            <option value="en">English</option>
            <option value="zh">Chinese</option>
            <option value="hi">Hindi</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="ar">Arabic</option>
            <option value="bn">Bengali</option>
            <option value="pt">Portuguese</option>
            <option value="ru">Russian</option>
          </select>
          <Button className="border-[0.5px] border-[#383b44] hover:shadow-btnShad transition-all">
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
    </section>
  );
};
export default Prompt;
