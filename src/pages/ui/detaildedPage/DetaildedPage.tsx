import React from "react";
import { Header } from "../../../widget/header/Header";
import { Card } from "../../../widget/detailed/ui/card/ui/Card";
import { Carousel } from "../../../widget/detailed/ui/carousel/ui/Carousel";
import { Rio } from "../../../features/rio/ui/Rio";
import { Padovan } from "../../../features/padovan/ui/Padovan";

export const DetaildedPage = () => {
  return (
    <div>
      <Header />
      <Card />
      <div className="carousel-container">
        <Carousel />
        <Carousel />
      </div>
      <h3 style={{color: 'red'}}>С этим товаром смотрят:</h3>
      <Rio />
      <h3 style={{color: 'red'}}>С этим товаром покупают</h3>
      <Padovan />
    </div>
  );
};
