export default async function summarise(longText) {
  const summarizerCapabilities = await self.ai.summarizer.capabilities();
  const canSummarize = summarizerCapabilities.available;
  let summarizer;

  if (canSummarize === 'no') {
    console.warn(
      "The current browser supports the Summarizer API, but it can't be used at the moment. Check the available disk space"
    );
    return;
  }
  if (canSummarize === 'after-download') {
    console.log('Downloading translation model...');
    summarizer = await self.ai.summarizer.create({
      monitor(m) {
        m.addEventListener('downloadprogress', (e) => {
          console.log(`Downloaded ${e.loaded} of ${e.total} bytes.`);
        });
      },
    });
    await summarizer.ready;
  } else {
    summarizer = await self.ai.summarizer.create();
  }

  return await summarizer.summarize(longText);
}
