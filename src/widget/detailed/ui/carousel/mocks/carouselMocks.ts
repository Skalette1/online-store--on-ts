import pigeon from "../../../../../../public/gta.jpg";
import vorobey from "../../../../../../public/sanandreas.jpg";
import lastochka from "../../../../../../public/liberty_enhanced.jpg";
import skvorec from "../../../../../../public/gta4.webp";

interface Carousel {
  readonly id: number;
  img: string;
  name: string;
}
export const carousel: Carousel[] = [
  {
    id: 1,
    img: pigeon,
    name: "GTA 6",
  },
  {
    id: 2,
    img: vorobey,
    name: "GTA SA",
  },
  {
    id: 3,
    img: lastochka,
    name: "LIBERTY",
  },
  {
    id: 4,
    img: skvorec,
    name: "GTA 4",
  },
];
