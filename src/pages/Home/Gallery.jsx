import React, { useEffect } from "react";

const Gallery = () => {

    useEffect(() => {
      document.title = `Gallery | Talkademic`;
      window.scroll(0, 0)
      return () => {
        document.title = "Talkademic";
      };
    }, []);
  

  return (
    <div>
      <section className="py-6  ">
        <h2 className="text-center text-2xl md:text-3xl font-bold my-3">
          Explore Our Language Learning Moments
        </h2>
        <p className="text-center w-[90%] md:w-[60%] lg:w-[50%] mx-auto text-xs md:text-sm mb-10">
          Browse through vibrant snapshots of our language learning community,
          cultural events, and immersive experiences that inspire your journey
          to fluency.
        </p>

        <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
          <img
            src="https://i.ibb.co.com/nsh5j6Dn/image1.jpg"
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded object-cover shadow-sm min-h-96 md:col-start-3 md:row-start-1  aspect-square"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 object-cover aspect-square"
            src="https://i.ibb.co.com/Gv40Rsnr/image9.png"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 object-cover  aspect-square"
            src="https://i.ibb.co.com/LD0SPwL5/image2.jpg"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 object-cover  aspect-square"
            src="https://i.ibb.co.com/20PpZwdj/image3.jpg"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 object-cover  aspect-square"
            src="https://i.ibb.co.com/JR50VLB3/image4.jpg"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 object-cover aspect-square"
            src="https://i.ibb.co.com/HLWK0BDJ/image5.jpg"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 object-cover aspect-square"
            src="https://i.ibb.co.com/1GQ7VTrj/image7.jpg"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 object-cover aspect-square"
            src="https://i.ibb.co.com/zhNqBpNV/image8.jpg"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48   object-cover aspect-square"
            src="https://i.ibb.co.com/v4jb2p2P/image6.jpg"
          />
          <img
            src="https://i.ibb.co.com/20jGNpfC/image10.jpg"
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded object-cover shadow-sm min-h-96 md:col-start-1 md:row-start-3  aspect-square"
          />
        </div>
      </section>
    </div>
  );
};

export default Gallery;
