import bird from "../../../../public/Vice-city-cover_enhanced.jpg";
import san from "../../../../public/sanandreas.jpg";
import four from "../../../../public/liberty_enhanced.jpg";
import five from "../../../../public/gta.jpg";
interface Species {
  readonly id: number;
  img: string;
  name: string;
  details: string;
  details2?: string;
}

export const speciesMoks: Species[] = [
  {
    id: 1,
    img: bird,
    name: "vice city",
    details: "August 21st, 2012",
    details2: "legend",
  },
  {
    id: 2,
    img: san,
    name: "San Andreas",
    details: "March 11st, 2012",
  },
  {
    id: 3,
    img: four,
    name: "Liberty city",
    details: "May 1st, 2002",
  },
  {
    id: 4,
    img: five,
    name: "Grand thef Auto 6",
    details: "August 21st, 2026",
  },
  {
    id: 5,
    img: bird,
    name: "counter strike",
    details: "August 21st, 2012",
  },
  {
    id: 6,
    img: bird,
    name: "counter strike",
    details: "August 21st, 2012",
  },
  {
    id: 7,
    img: bird,
    name: "counter strike",
    details: "August 21st, 2012",
  },
  {
    id: 8,
    img: bird,
    name: "counter strike",
    details: "August 21st, 2012",
  },
];
