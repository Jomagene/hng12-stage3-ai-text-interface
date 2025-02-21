'use client';
import Prompt from './Prompt';
import Welcome from './Welcome';
import { useState } from 'react';

const Main = ({ setData, data }) => {
  const [text, setText] = useState('');

  return (
    <main className="main-container flex flex-col flex-1">
      <Welcome data={data} />
      <Prompt setText={setText} setData={setData} />
    </main>
  );
};
export default Main;
