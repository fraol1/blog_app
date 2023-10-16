import { useDarkMode } from "../context/ThemeContext";

const Toggle = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <div
      onClick={toggleDarkMode}
      className=' bg-black relative rounded-2xl space-x-5 flex items-center  justify-between'>
      <img src='/moon.png' className='w-4' width={14} alt='' />
      <div
        className={`bg-white transition-all duration-500 w-5 rounded-full h-5 absolute ${
          isDarkMode ? "-left-5" : "right-0"
        }`}></div>
      <img src='/sun.png' className=' w-4' alt='' />
    </div>
  );
};

export default Toggle;
