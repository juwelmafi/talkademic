import React from 'react';
import { useEffect } from 'react';

const NoContent = () => {
  useEffect(() => {
        document.title = `Home | Talkademic`;
        window.scroll(0, 0)
        return () => {
          document.title = "Talkademic";
        };
      }, []);
  return (
    <div className='flex justify-center flex-col gap-5 items-center max-w-7xl h-[78vh]'>
      <h2 className='text-5xl md:text-7xl font-bold text-center'>Opps!</h2>
      <h2 className='text-2xl md:text-3xl font-thin text-center'>No content available now!</h2>
    </div>
  );
};

export default NoContent;