"use client"
import { Button } from "@material-tailwind/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
export default function HeroSell() {
  const numSmallImages = 7; // Number of small images
  const bigImageSize = 480; // Diameter of big image container
  const smallImageSize = 50; // Diameter of small images

  // Calculate the angle between each small image
  const angleStep = (2 * Math.PI) / numSmallImages;
  // State to hold the size of the big image
  const [bigImageWidth, setBigImageWidth] = useState(bigImageSize);
  // Calculate the radius of the circle (half of big image container)
  const radius = bigImageWidth / 2;

  // Generate positions for small images
  const smallImagePositions = Array.from({ length: numSmallImages }, (_, index) => {
    const angle = angleStep * index;
    const x = radius * Math.cos(angle) + radius - smallImageSize / 2;
    const y = radius * Math.sin(angle) + radius - smallImageSize / 2;
    return { x, y };
  });



  // Recalculate small image positions when the big image size changes
  useEffect(() => {
    const updateBigImageWidth = () => {
      const newWidth = document.getElementById('big_image')?.offsetWidth||0;
      setBigImageWidth(newWidth);
    };
    updateBigImageWidth();
    window.addEventListener('resize', updateBigImageWidth);
    return () => window.removeEventListener('resize', updateBigImageWidth);
  }, []);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputGroupClick = () => {
    // Focus on the input field when the input group is clicked
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  return (
    <>
        <section id="Sell_Hero" className=" flex justify-center items-center w-full animate-DownToUp">
            <div className="flex flex-col-reverse lg:flex-row gap-16 items-center max-w-[100rem] w-full my-14 px-2 sm:px-10">
            <div className=" w-full lg:w-[50%] lg:text-start text-center space-y-8">
                <h3 className="font-poppins font-semibold text-4xl md:text-6xl dark:text-[#ecf0f5] text-[rgb(19,23,39)] w-full lg:max-w-[35rem] md:leading-[4.3rem]">The best platform for selling your <span className="text-[#B0926A]">products</span></h3>
                <p className="text-blue-gray-500 dark:text-[#B3B9C4] lg:max-w-[35rem]">Utilizing our platform will simplify your product sales strategy considerably. Don't hesitate, start selling now!</p>
                <div onClick={handleInputGroupClick} id="Input_group" className=" cursor-text border-2 dark:hover:bg-[#2C333A] group flex lg:max-w-[35rem] pl-6  items-center space-x-2 rounded-full bg-white p-2 dark:border-[#22262B] dark:group-hover:bg-[#2C333A] dark:bg-[#1D2125] justify-between">
                  <input
                      ref={inputRef}
                      className=" h-full w-full outline-none group-active: dark:text-white dark:group-hover:bg-[#2C333A] dark:bg-[#1D2125] text-gray-700 pr-2 bg-slate-50 "
                      type="text"
                      id="Product_name"
                      placeholder="Enter your product name" />
                  <Button placeholder={""} type="submit" className="min-w-[8rem] dark:text-[#ecf0f5]  bg-[#B0926A] rounded-full text-base sm:py-4" style={{textTransform:"initial"}}>Sell</Button>
                </div>
                
            </div>
            <div className="lg:w-[50%] w-[70%] flex justify-center items-center relative">
              <div id="big_image" className="flex group justify-center items-center p-10 rounded-full outline outline-2 outline-[#B0926A]" style={{ position: 'relative' }}>
                <div className="w-full h-full flex justify-center items-center">
                  <Image alt="Sell page hero image" className="rounded-full " width={400} height={400} src={"/sellers/0.jpg"} />
                  <div className="w-full max-w-[400px] max-h-[400px] h-full rounded-full absolute group-hover:inline hidden animate-Fade bg-[#00000052]"></div>
                  <div className="w-full max-w-[400px] max-h-[400px] h-full absolute text-[#ecf0f5] animate-Fade hidden group-hover:flex items-center justify-center">
                    <h4 className="text-3xl max-w-[20rem] text-center font-bold cursor-default">BE LIKE OUR BEST SELLERS</h4>
                  </div>
                </div>
                {smallImagePositions.map((position, index) => (
                    <img alt="Sell page hero image" key={index} style={{ left: position.x, top: position.y }} id="small_images" className="rounded-full absolute h-[50px] w-[50px] object-cover" src={`/sellers/${index+1}.jpg`} />
                ))}
              </div>
            </div>
            </div>
      </section>

    </>
  )
}
