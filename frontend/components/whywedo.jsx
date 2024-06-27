import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import leftArrow from "../public/arrow-left.svg";
import rightArrow from "../public/arrow-right.svg";
import trofeu from '../assets/trofeu.svg'
import galeria from '../assets/galeria.png'
import imagem2 from '../assets/imagem2.svg'
import imagem3 from '../assets/imagem3.svg'
import fundoRoxo from '../assets/fundoRoxo.png'
import ButtonGreenGet from "./button/buttonGreenGet";
import React, { useState, useEffect } from 'react';


const WhyWeDo = () => {
  const images = [galeria, imagem2, imagem3];
  const [currentImage, setCurrentImage] = useState(images[0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage(currentImage => {
        const i = images.indexOf(currentImage);
        return images[(i + 1) % images.length];
      });
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <div className="px-10 py-24 justify-center sm:grid grid-cols-2 gap-10 sm:p-24 text-white bg-black">
        <div>
          <div>
            <h1 className="text-center sm:text-left text-5xl sm:text-3xl font-bold ">
              Why We Do What We Do
            </h1>
            <p className= 'text-center text-xl sm:text-left mt-10 sm:text-lg'>
            By creating a visual guide along the way, the designer or developer can get input from the other people involved in the website such as the customer, their manager, and other members of the team. 
            </p>
          </div>
          <div className="mx-auto justify-center content-center text-center sm:text-left mt-10 sm:grid sm:grid-cols-2 sm:gap-5 sm:mt-16">
            <div>
              <Image src={trofeu} alt="Trofeu" className="mx-auto justify-center sm:mx-0 sm:justify-start"/>
              <h2 className="mt-5 text-2xl font-bold">
                Reason One
              </h2>
              <p className= 'mt-5 text-xl sm:text-lg'>
              Web design partially overlaps web engineering in the broader scope of web development
              </p>
            </div>
            <div className="mt-10 sm:mt-0">
            <Image src={trofeu} alt="Trofeu" className="mx-auto justify-center sm:mx-0 sm:justify-start"/>
              <h2 className="mt-5 text-2xl font-bold">
                Reason Two
              </h2>
              <p className= 'mt-5 sm:text-lg text-xl'>
                Paper prototypes should be considered when the following is true
                </p>
            </div>
          </div>
        </div>
        <div className="mt-10">
        <Image src={currentImage} alt="Galeria"/>
        </div>
      </div>

      <div className="relative text-white">
        <Image src={fundoRoxo} alt="Fundo Roxo" className="h-60 sm:h-full sm:w-full" />
        <div className="absolute inset-0 flex flex-col sm:flex-row items-center justify-center text-center">
          <h1 className="p-2 sm:p-0 mt-10 sm:mt-0 text-lg sm:text-3xl font-bold">
            Get a free quote and start your project today
          </h1>
          <div className="mt-5 sm:mt-20 sm:ml-5">
            <ButtonGreenGet></ButtonGreenGet>
          </div>
        </div>
      </div>



    </div>
  );
};

export default WhyWeDo;
