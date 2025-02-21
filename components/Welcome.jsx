'use client';
import Image from 'next/image';
import { Button } from './ui/button';
import Start from './Start';
import { useState } from 'react';
import translate from '@/lib/language';
import summarise from '@/lib/nonStreamSummarizer';
import toast, { Toaster } from 'react-hot-toast';

const Welcome = ({ data }) => {
  const [translated, setTranslated] = useState(Array(data.length).fill(''));
  const [targetLang, setTargetLang] = useState(
    Array(data.length).fill('') // Default language: English
  );
  const [summary, setSummary] = useState(Array(data.length).fill(''));

  // Handle language selection
  const handleLanguageChange = (i, event) => {
    if (targetLang == 'lang') {
      toast.error('Please Select a target language');
      return;
    }
    const newLanguages = [...targetLang];
    newLanguages[i] = event.target.value;
    setTargetLang(newLanguages);
  };

  const handleTranslate = async (i) => {
    if (!data[i][1]) {
      toast('No laguage detected');
      return;
    }
    const toastId = `translate-${i}`; // Unique toast ID
    toast.loading('Translating...', { id: toastId });
    try {
      const singleTrans = await translate(
        data[i][0],
        data[i][1],
        targetLang[i]
      );
      setTranslated((prev) => {
        const newTranslations = [...prev];
        newTranslations[i] = singleTrans;
        return newTranslations;
      });
      toast.success('Translation done', { id: toastId });
    } catch (error) {
      console.error('Translation failed :', error);
      toast.error('Could not translate', { id: toastId });
    }
  };

  const handleSummarize = async (i) => {
    const toastId = `summarize-${i}`; // Unique toast ID
    toast.loading('Summarizing...', { id: toastId });
    try {
      const summar = await summarise(data[i][0]);
      setSummary((prev) => {
        const newSummaries = [...prev];
        newSummaries[i] = summar;
        return newSummaries;
      });
      toast.success('Summarization succeeded!', { id: toastId });
    } catch (error) {
      console.error('Summarization failed :', error);
      toast.error('Error when summarizing.', { id: toastId });
    }
  };
  return (
    <>
      {data?.[0]?.[0] ? (
        data.map((el, i) => (
          <section key={i} className="flex-1 flex flex-col gap-2 pb-5">
            <Toaster />
            <div className="flex flex-col backdrop-blur-3xl w-fit p-2 rounded-2xl bg-[#303739] self-end ml-10">
              <p className="text-sm py-2 border-b border-[#4f4f4f]">{el[0]}</p>
              <p className="bg-none border-b py-2 text-xs border-[#4f4f4f] hover:btnSha">
                Detected language : {el[1]}
              </p>
              <div className="flex gap-1 justify-between p-1 rounded-bl-2xl">
                {el[0].trim().length >= 150 && (
                  <div className="flex items-cente">
                    <Button
                      className="border-[0.5px] border-[#383b44] hover:shadow-btnShad transition-all summarizeBnt"
                      onClick={() => handleSummarize(i)}>
                      <span className="hidden sm:inline-block p-0">
                        Summarize
                      </span>
                      <span className="sm:hidden inline-block">Sum</span>
                      <Image
                        src="/icons/short.svg"
                        width={20}
                        height={20}
                        alt="Short icon"
                      />
                    </Button>
                  </div>
                )}
                <div className="flex gap-2">
                  <select
                    defaultValue="lang"
                    className="bg-transparent border-b border-[#565b69] text-[rgb(165,174,201)] text-sm focus:ring-1 focus:ring-black dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-100 hover:shadow-btnShad rounded-sm transition-all"
                    onChange={(e) => handleLanguageChange(i, e)}>
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
                  <Button
                    className="border-[0.5px] border-[#383b44] hover:shadow-btnShad transition-all translateBnt  py-0"
                    onClick={() => handleTranslate(i)}>
                    <span className="hidden sm:inline-block">Translate</span>
                    <span className="sm:hidden inline-block">Tran</span>
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
            {translated[i] && (
              <div className="w-fit mr-10 p-2 rounded-2xl bg-[#16323f] self-start text-sm">
                {translated[i]}
              </div>
            )}
            {summary[i] && (
              <div className="w-fit mr-10 p-2 rounded-2xl bg-[#163f2a] self-start text-sm">
                {summary[i]}
              </div>
            )}
          </section>
        ))
      ) : (
        <Start />
      )}
    </>
  );
};
export default Welcome;
