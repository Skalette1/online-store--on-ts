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
    name: "Vice city",
    details: "August 21st, 2012",
    details2: "Grand Theft Auto: Vice City (сокр. — GTA: Vice City или GTA: VC) — компьютерная игра в жанре action-adventure от третьего лица, разработанная британской студией Rockstar North и выпущенная американской студией Rockstar Games. Является четвёртой основной по счёту и второй трёхмерной игрой из серии Grand Theft Auto. Релиз игры состоялся 29 октября 2002 года для приставки PlayStation 2 и 12 мая 2003 года для персональных компьютеров. Австрийская студия Rockstar Vienna также портировала игру для Xbox, выпустив сборник Grand Theft Auto: Double Pack, куда также вошла предыдущая игра серии — Grand Theft Auto III. 4 января 2008 года игра стала доступна для скачивания с помощью интернет-сервиса Steam[5]. В честь десятой годовщины выхода игры, 6 декабря 2012 года Rockstar выпустила специальную версию игры для мобильных устройств под управлением операционных систем iOS и Android[6][7]. ",
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
