import hero_image from './Assets/hero_image.png';
import arrow from './Assets/arrow.png';

const Hero = () => {
  return (
    <div className='block w-full h-screen relative overflow-hidden'>
      <div className='bg-gradient-to-b from-pink-200 to-white h-full'>
        <div className='relative flex flex-col left-4 top-16 sm:left-10 md:left-20 lg:left-40 lg:top-40'>
          <h2 className='text-lg sm:text-xl md:text-2xl font-semibold mb-4 md:mb-7'>New Arrivals Only</h2>
          <p className='mb-1 text-4xl sm:text-5xl md:text-6xl font-medium'>
            new <span>👋🏻</span>
          </p>
          <p className='mb-1 text-4xl sm:text-5xl md:text-6xl font-medium'>collections</p>
          <p className='mb-4 text-4xl sm:text-5xl md:text-6xl font-medium'>for everyone</p>
          <button className='bg-red-500 text-white h-10 sm:h-12 w-48 sm:w-60 rounded-full flex items-center justify-center'>
            Latest Collection
            <img src={arrow} alt="Arrow" className='ml-2 h-4 w-4' />
          </button>
        </div>
        <img className='hidden lg:block absolute right-0 top-0 object-cover h-full w-full lg:w-auto ' src={hero_image} alt="model" />
      </div>
    </div>
  );
};

export default Hero;
