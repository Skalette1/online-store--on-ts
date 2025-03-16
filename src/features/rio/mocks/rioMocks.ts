import rio from "../../../../public/rdrCard.webp";
import spiderMan from "../../../../public/spider.jpg";
import miles from "../../../../public/miles.webp";
import assasins from "../../../../public/assasins.webp";
interface Rio {
  readonly id: number;
  img: string;
  name: string;
  details: string;
  price: number;
}
export const rioMocks: Rio[] = [
  {
    id: 1,
    img: rio,
    name: "Read Dead Redemption",
    details: "October 26, 2003",
    price: 4000,
  },
  {
    id: 2,
    img: spiderMan,
    name: "Spider man",
    details: "September 15, 2016",
    price: 4900,
  },
  {
    id: 3,
    img: miles,
    name: "Spider man: Miles Morales",
    details: "September 15, 2016",
    price: 4000,
  },
  {
    id: 4,
    img: assasins,
    name: "Assasins",
    details: "june 06, 2009",
    price: 4000,
  },
  {
    id: 5,
    img: rio,
    name: "Read Dead Redemption 2",
    details: "October 26, 2018",
    price: 4000,
  },
  {
    id: 6,
    img: rio,
    name: "Read Dead Redemption 2",
    details: "October 26, 2018",
    price: 4000,
  },
  {
    id: 7,
    img: rio,
    name: "Read Dead Redemption 2",
    details: "October 26, 2018",
    price: 4000,
  },
  {
    id: 8,
    img: rio,
    name: "Read Dead Redemption 2",
    details: "October 26, 2018",
    price: 4000,
  },
];
