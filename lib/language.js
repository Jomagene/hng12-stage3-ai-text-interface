export default async function translate(
  textToTranslate,
  sourceLanguage,
  targetLanguage
) {
  try {
    let translator;

    if (!sourceLanguage) {
      console.warn('Could not detect language. Returning original text.');
      return textToTranslate;
    }
    // Now we've figured out the source language. Let's translate it!
    const translatorCapabilities = await self.ai.translator.capabilities();
    const canTranslate = translatorCapabilities.languagePairAvailable(
      sourceLanguage,
      targetLanguage
    );

    if (canTranslate === 'no') {
      console.warn('Translation is not available. Falling back to cloud API.');
      return textToTranslate;
    } else if (canTranslate === 'after-download') {
      console.log('Downloading translation model...');
      translator = await self.ai.translator.create({
        sourceLanguage: sourceLanguage,
        targetLanguage: targetLanguage,
        monitor(m) {
          m.addEventListener('downloadprogress', (e) => {
            console.log(`Downloaded ${e.loaded} of ${e.total} bytes.`);
          });
        },
      });
      await translator.ready;
    } else {
      translator = await self.ai.translator.create({
        sourceLanguage: sourceLanguage,
        targetLanguage: targetLanguage,
      });
    }

    return await translator.translate(textToTranslate);
  } catch (error) {
    console.error('Translation failed', error);
    return textToTranslate;
  }
}

// =================> Language detector <===========================
// =================> <===============> <===========================

export const languageDetector = async (textToTranslate) => {
  try {
    const detectorCapabilities = await self.ai.languageDetector.capabilities();
    const canDetect = detectorCapabilities.capabilities;

    //   Otherwise, let's detect the source language.

    if (canDetect === 'no') {
      console.warn('No language detector available on this browser.');
      return null;
    }

    let detector;
    if (canDetect === 'readily') {
      // The language detector can immediately be used.
      console.log('Language detector available');
      detector = await self.ai.languageDetector.create();
    } else {
      // The language detector can be used after model download.
      console.log('Downloading language detector model...');
      detector = await self.ai.languageDetector.create({
        monitor(m) {
          m.addEventListener('downloadprogress', (e) => {
            console.log(`Downloaded ${e.loaded} of ${e.total} bytes.`);
          });
        },
      });
      await detector.ready;
    }

    const [bestResult] = await detector.detect(textToTranslate);

    if (bestResult.detectedLanguage === null || bestResult.confidence < 0.4) {
      // We'll just return the input text without translating. It's probably mostly punctuation or something.
      console.warn(
        'Low confidence in detected language. Returning original text.'
      );
      return null;
    }
    return bestResult.detectedLanguage;
  } catch (error) {
    console.error('Language detection failed:', error);
    return null;
  }
};
