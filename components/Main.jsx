'use client';
import Prompt from './Prompt';
import Welcome from './Welcome';
import { useState } from 'react';

const Main = () => {
  const [text, setText] = useState('');
  return (
    <main className="main-container flex flex-col flex-1">
      <Welcome text={text} setText={setText} />
      <Prompt setText={setText} />
    </main>
  );
};
export default Main;
