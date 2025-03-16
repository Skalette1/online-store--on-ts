import pigeon from "../../../../../../public/pigeon.png";
import vorobey from "../../../../../../public/vorobey.png";
import lastochka from "../../../../../../public/lastochka.png";
import skvorec from "../../../../../../public/skvorec.png";

interface Carousel {
  readonly id: number;
  img: string;
  name: string;
}
export const carousel: Carousel[] = [
  {
    id: 1,
    img: pigeon,
    name: "Голубь",
  },
  {
    id: 2,
    img: vorobey,
    name: "Воробей",
  },
  {
    id: 3,
    img: lastochka,
    name: "Ласточка",
  },
  {
    id: 4,
    img: skvorec,
    name: "Скворец",
  },
];
