'use client';
import Prompt from './Prompt';
import Welcome from './Welcome';
import { useState } from 'react';

const Main = () => {
  const [text, setText] = useState('');
  const [data, setData] = useState([]);

  return (
    <main className="main-container flex flex-col flex-1">
      <Welcome text={text} setText={setText} data={data} />
      <Prompt setText={setText} text={text} setData={setData} />
    </main>
  );
};
export default Main;
