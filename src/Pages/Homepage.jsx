import React from "react";
import HomeCarousel from "../customer/Components/Carousel/HomeCarousel";
import { homeCarouselData } from "../customer/Components/Carousel/HomeCaroselData";
import HomeProductSection from "../customer/Components/Home/HomeProductSection";
import { mens_tops } from "../Data/MensTops/mens_tops";
import { women_top } from '../Data/Women/women_top'



const Homepage = () => {

  return (
    <div className="">
      <HomeCarousel images={homeCarouselData} />

          <div className="space-y-10 py-20">
              <HomeProductSection data={mens_tops} section={"Mens Tops"} />

     {/*
        <HomeProductSection data={dressPage1} section={"Dress"} />
        <HomeProductSection data={gounsPage1} section={"Women's Gouns"} />
        <HomeProductSection data={kurtaPage1} section={"Women's Kurtas"} />*/}
      </div>

      
    </div>
  );
};

export default Homepage;
