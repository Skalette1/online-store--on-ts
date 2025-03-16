import React from "react";
import { Padovan } from "../../features/padovan/ui/Padovan";
import { Katalog } from "../../widget/header/katalog/ui/Katalog";
import { BirdSpecies } from "../../features/birdSpecies/ui/BirdSpecies";
import { Rio } from "../../features/rio/ui/Rio";
import { Izba } from "../../features/izba/ui/Izba";

export const Home = () => {
  return (
    <div>
      <Katalog />
      <Padovan />
      <BirdSpecies />
      <Rio />
      <Izba />
    </div>
  );
};
