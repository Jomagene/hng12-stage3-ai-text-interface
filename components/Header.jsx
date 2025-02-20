import Image from 'next/image';

const Header = () => {
  return (
    <header className="h-f-container flex justify-between items-center absolute top-0">
      <div className="flex gap-2 p-2 pr-5 cursor-pointer rounded-full items-center header-logo">
        <Image src={'/icons/gtAI.svg'} alt="GtAI logo" height={50} width={50} />
        <p className="text-3xl font-bold text-white logo-name">GText AI</p>
      </div>
      <picture className="p-2">
        <Image
          src={'/icons/clear.png'}
          alt="clear chat"
          height={40}
          width={40}
        />
      </picture>
    </header>
  );
};
export default Header;
