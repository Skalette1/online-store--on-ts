import { createHashRouter } from "react-router-dom";
import App from "../App";
import { NotFoundPage } from "../../pages/ui/NotFoundPage";
import { PadovanPage } from "../../pages/ui/PadovanPage";
import { RioPage } from "../../pages/ui/RioPage";
import { IzbaPage } from "../../pages/ui/IzbaPage";
import { DetaildedPage } from "../../pages/ui/detaildedPage/DetaildedPage";
import { SignIn } from "../../processes/auth/ui/SignIn";
import { SignUp } from "../../processes/auth/ui/SignUp";
import { OrderPage } from "../../processes/order/ui/orderList/OrderPage";
import { CartPage } from "../../pages/model/cart/CartPage";
import { BuyFirst } from "../../processes/order/ui/pay and delivery/ui/BuyFirst";
import { BuySecond } from "../../processes/order/ui/pay and delivery/ui/BuySecond";
import { BuyThird } from "../../processes/order/ui/pay and delivery/ui/BuyThird";
import { Condition } from "../../processes/order/ui/conditions/Condition";
import { Success } from "../../processes/order/ui/success/Success";

export const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "cart",
    element: <CartPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
  {
    path: "padovan",
    element: <PadovanPage />,
  },
  {
    path: "rio",
    element: <RioPage />,
  },
  {
    path: "izba",
    element: <IzbaPage />,
  },
  {
    path: "detailed",
    element: <DetaildedPage />,
  },
  {
    path: "signin",
    element: <SignIn />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
  {
    path: "orderpage",
    element: <OrderPage />,
  },
  {
    path: "buy1",
    element: <BuyFirst />,
  },
  {
    path: "buy2",
    element: <BuySecond />,
  },
  {
    path: "buy3",
    element: <BuyThird />,
  },
  {
    path: "success",
    element: <Success />,
  },
  {
    path: "condition",
    element: <Condition />,
  },
]);
