import Image from 'next/image';

const Header = ({ setData }) => {
  return (
    <header className="h-f-container flex justify-between backdrop-blur-2xl rounded-3xl items-center fixed top-0 bg-[#252d3454] z-30">
      <div
        className="flex gap-2 p-2 pr-5 cursor-pointer rounded-full items-center header-logo hover:shadow-btnShad"
        tabIndex={1}>
        <Image src={'/icons/gtAI.svg'} alt="GtAI logo" height={40} width={40} />
        <p className="text-2xl sm:text-3xl font-bold text-white logo-name">
          GText AI
        </p>
      </div>
      <picture
        className="p-[10px] rounded-full cursor-pointer clear-logo hover:scale-105 hover:shadow-btnShad"
        tabIndex={1}
        onClick={(e) => {
          e.target.classList.remove('animate-sweep'); // Remove the class first
          void e.target.offsetWidth; // Trigger a reflow (force re-render)
          e.target.classList.add('animate-sweep'); // Add the class back
          setData([]);
        }}>
        <Image
          src={'/icons/clear.png'}
          alt="clear chat"
          height={36}
          width={36}
        />
      </picture>
    </header>
  );
};
export default Header;
