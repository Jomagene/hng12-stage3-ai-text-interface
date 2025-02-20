import Prompt from './Prompt';
import Welcome from './Welcome';

const Main = () => {
  return (
    <main className="main-container flex flex-col flex-1">
      <Welcome />
      <Prompt />
    </main>
  );
};
export default Main;
