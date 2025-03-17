import feedingTrough from "../../../../../public/witcher3cover.jpeg";
import mix from "../../../../../public/rdr2.jpg";
import eat from "../../../../../public/ghost.webp";

interface Katalog {
  readonly id: number;
  img: string;
  name: string;
  details: string;
}
export const katalog: Katalog[] = [
  {
    id: 1,
    img: feedingTrough,
    name: "Witcher",
    details: "Game of the Year🏆",
  },
  {
    id: 2,
    img: mix,
    name: "Rdr 2",
    details: "Game of the Year🏆",
  },
  {
    id: 3,
    img: eat,
    name: "Ghost of Tsushima",
    details: "Game of the Year🏆",
  },
];
