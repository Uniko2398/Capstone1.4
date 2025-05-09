import React from "react";
import BigCardComp from "../components/BigCardComp";
import CardSlideComp from "../components/CardSlideComp";
import SquaresSection from "../components/SquaresSection";
import HeroComp from "../components/HeroComp";
import HeroSlideComp from "../components/HeroSlideComp";

function HomePage() {
  return (
    <>
      <BigCardComp />
      <SquaresSection />
      <CardSlideComp />
      <BigCardComp />
      <HeroComp />
      <BigCardComp />
      <HeroSlideComp />
    </>
  );
}

export default HomePage;
