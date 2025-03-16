import izba from "../../../../public/ghost.webp";
import assasins from '../../../../public/AC4_Black_Flag_soundtrack_enhanced.jpg'
import skyrim from '../../../../public/skyrim.webp'
interface Izba {
  readonly id: number;
  img: string;
  name: string;
  details: string;
  price: number;
}

export const izbaMocks: Izba[] = [
  {
    id: 1,
    img: izba,
    name: 'Ghost of Tsushima',
    details: "2020",
    price: 3400,
  },
  {
    id: 2,
    img: assasins,
    name: 'Assasins black flag',
    details: "2013",
    price: 1400,
  },
  {
    id: 3,
    img: skyrim,
    name: 'Skyrim',
    details: "2010",
    price: 3100,
  },
  {
    id: 4,
    img: izba,
    name: 'Ghost of Tsushima',
    details: "2020",
    price: 3400,
  },
  {
    id: 5,
    img: izba,
    name: 'Ghost of Tsushima',
    details: "2020",
    price: 3400,
  },
  {
    id: 6,
    img: izba,
    name: 'Ghost of Tsushima',
    details: "2020",
    price: 3400,
  },
  {
    id: 7,
    img: izba,
    name: 'Ghost of Tsushima',
    details: "2020",
    price: 3400,
  },
  {
    id: 8,
    img: izba,
    name: 'Ghost of Tsushima',
    details: "2020",
    price: 3400,
  },
];
