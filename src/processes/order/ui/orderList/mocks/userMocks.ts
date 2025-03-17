import musashi from "../../../../../public/musashi.jpg";

interface User {
  readonly id: number;
  img: string;
  name: string;
  email: string;
  address: string;
}

export const user: User[] = [
  {
    id: 1,
    img: musashi,
    name: "Николаев Николай Николаевич",
    email: "taidj-23003@yandex.ru",
    address: "Россия, г. Москва, ул. Ленина, д. 50, кв. 2, ",
  },
];
