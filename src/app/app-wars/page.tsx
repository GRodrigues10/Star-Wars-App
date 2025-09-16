"use client";
import React, { useEffect } from "react";

import { StylesAppWars } from "./page.styled";
import Header from "@/components/header/Header";
import Section1 from "@/components/section1/Section1";
import Section2 from "@/components/section2/Section2";
import Section3 from "@/components/section3/Section3";
import Section4 from "@/components/section4/Section4";
import Section5 from "@/components/section5/Section5";
import Section6 from "@/components/section6/Section6";
import Footer from "@/components/footer/Footer";

function page() {
  return (
    <StylesAppWars>
      {Array.from({ length: 100 }).map((_, i) => (
        <div key={i} className="star"></div>
      ))}
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Footer/>
    </StylesAppWars>
  );
}

export default page;
