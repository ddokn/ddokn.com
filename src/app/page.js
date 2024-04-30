'use client'
import { useEffect } from 'react';

import Image from "next/image";
import AOS from "aos";
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(()=>{
    AOS.init();
  }, []);
  
  return (
    <div>
      <h1
        data-aos="fade-up"
        data-aos-easing="ease-out"
        data-aos-duration="100"
        data-aos-once="true"
        data-aos-delay="300"
      >Hello, ddokn world!!</h1>
      <p
        data-aos="fade-up"
        data-aos-easing="ease-out"
        data-aos-duration="150"
        data-aos-once="true"
        data-aos-delay="450"
      >안녕하세요!!</p>
    </div>
  );
}
