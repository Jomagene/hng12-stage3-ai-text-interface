import Image from 'next/image';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';

const Prompt = ({ setText }) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    // Get the form data
    const formData = new FormData(event.target);
    const inputText = formData.get('prompt');

    setText(inputText);
  };

  return (
    <form
      className="bg-[#0e1214] backdrop-blur-3xl rounded-2xl"
      onSubmit={handleSubmit}>
      <Textarea
        name="prompt"
        placeholder="What would you like to translate or get summarized ?"
        className="focus:border hover:shadow-btnShad rounded-lg pb-14 m-[-1px] text-sm min-h-32"
      />
      <div className="flex gap-2 justify-end absolute bottom-0 left-0 right-0 p-3 bg-[#0e1214] backdrop-blur-3xl rounded-bl-2xl">
        <Button
          className="border-[0.5px] border-[#383b44] hover:shadow-btnShad transition-all translateBnt send"
          type="submit">
          Send
          <Image
            src="/icons/send.svg"
            width={20}
            height={20}
            alt="Send icon"
            className="transition-all duration-300"
          />
        </Button>
      </div>
    </form>
  );
};
export default Prompt;
