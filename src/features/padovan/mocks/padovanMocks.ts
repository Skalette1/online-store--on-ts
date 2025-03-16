import padovan from "../../../../public/witcherCard.jpg";
import rdr from "../../../../public/rdr2.jpg";
import csGO from "../../../../public/csgo.png";
import ghost from "../../../../public/ghost.webp";
import last from "../../../../public/lastOf.jpg";

interface Padovan {
  readonly id: number;
  img: string;
  name: string;
  details: string;
  price: number;
  gramms: any;
}

export const padovanMocks: Padovan[] = [
  {
    id: 1,
    img: padovan,
    name: "Witcher 3",
    details: "May 19th, 2015",
    price: 2490,
    gramms: [
      {
        id: 1,
        gramm1: "200 г",
        gramm2: "400 г",
        gramm3: "800 г",
        gramm4: "1 кг",
      },
    ],
  },
  {
    id: 2,
    img: rdr,
    name: "Read Dead Redemption 2",
    details: "October 26, 2018",
    price: 4900,
    gramms: [
      {
        id: 1,
        gramm1: "200 г",
        gramm2: "400 г",
        gramm3: "800 г",
        gramm4: "1 кг",
      },
    ],
  },
  {
    id: 3,
    img: csGO,
    name: "counter strike",
    details: "August 21st, 2012",
    price: 1490,
    gramms: [
      {
        id: 1,
        gramm1: "200 г",
        gramm2: "400 г",
        gramm3: "800 г",
        gramm4: "1 кг",
      },
    ],
  },
  {
    id: 4,
    img: ghost,
    name: "Ghost of Tsushima",
    details: "June 26, 2020",
    price: 4900,
    gramms: [
      {
        id: 1,
        gramm1: "200 г",
        gramm2: "400 г",
        gramm3: "800 г",
        gramm4: "1 кг",
      },
    ],
  },
  {
    id: 5,
    img: last,
    name: "the last of us",
    details: "june 3, 2013",
    price: 4200,
    gramms: [
      {
        id: 1,
        gramm1: "200 г",
        gramm2: "400 г",
        gramm3: "800 г",
        gramm4: "1 кг",
      },
    ],
  },
  {
    id: 6,
    img: padovan,
    name: "Witcher 3",
    details: "May 19th, 2015",
    price: 1000,
    gramms: [
      {
        id: 1,
        gramm1: "200 г",
        gramm2: "400 г",
        gramm3: "800 г",
        gramm4: "1 кг",
      },
    ],
  },
  {
    id: 7,
    img: ghost,
    name: "Ghost of Tsushima",
    details: "June 26, 2020",
    price: 4900,
    gramms: [
      {
        id: 1,
        gramm1: "200 г",
        gramm2: "400 г",
        gramm3: "800 г",
        gramm4: "1 кг",
      },
    ],
  },
  {
    id: 8,
    img: last,
    name: "the last of us",
    details: "june 3, 2013",
    price: 4200,
    gramms: [
      {
        id: 1,
        gramm1: "200 г",
        gramm2: "400 г",
        gramm3: "800 г",
        gramm4: "1 кг",
      },
    ],
  },
  {
    id: 9,
    img: rdr,
    name: "Read Dead Redemption 2",
    details: "October 26, 2018",
    price: 4900,
    gramms: [
      {
        id: 1,
        gramm1: "200 г",
        gramm2: "400 г",
        gramm3: "800 г",
        gramm4: "1 кг",
      },
    ],
  },
  {
    id: 10,
    img: ghost,
    name: "Ghost of Tsushima",
    details: "June 26, 2020",
    price: 4900,
    gramms: [
      {
        id: 1,
        gramm1: "200 г",
        gramm2: "400 г",
        gramm3: "800 г",
        gramm4: "1 кг",
      },
    ],
  },
  {
    id: 11,
    img: last,
    name: "the last of us",
    details: "june 3, 2013",
    price: 4200,
    gramms: [
      {
        id: 1,
        gramm1: "200 г",
        gramm2: "400 г",
        gramm3: "800 г",
        gramm4: "1 кг",
      },
    ],
  },
  {
    id: 12,
    img: csGO,
    name: "counter strike",
    details: "August 21st, 2012",
    price: 1490,
    gramms: [
      {
        id: 1,
        gramm1: "200 г",
        gramm2: "400 г",
        gramm3: "800 г",
        gramm4: "1 кг",
      },
    ],
  },
  {
    id: 13,
    img: ghost,
    name: "Ghost of Tsushima",
    details: "June 26, 2020",
    price: 4900,
    gramms: [
      {
        id: 1,
        gramm1: "200 г",
        gramm2: "400 г",
        gramm3: "800 г",
        gramm4: "1 кг",
      },
    ],
  },
];
