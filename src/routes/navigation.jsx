import About from "../pages/About";
import Home from "../pages/Home";
import Acc from "../pages/Shop/Acc";
import Best from "../pages/Shop/Best";
import Bottom from "../pages/Shop/Bottom";
import Ops from "../pages/Shop/Ops";
import Outer from "../pages/Shop/Outer";
import Shop from "../pages/Shop/Shop";
import Top from "../pages/Shop/Top";

const navigationItems = [
  {
    id: "home",
    path: "/",
    index: true,
    text: "홈",
    element: <Home />,
  },
  {
    id: "about",
    path: "/about",
    index: true,
    text: "정보",
    element: <About />,
  },
  {
    id: "shop",
    path: "/shop",
    text: "샵",
    element: <Shop />,
    children: [
      { index: true, element: <Best /> },
      { path: "outer", element: <Outer /> },
      { path: "top", element: <Top /> },
      { path: "ops", element: <Ops /> },
      { path: "bottom", element: <Bottom /> },
      { path: "acc", element: <Acc /> },
    ],
  },
];

export default navigationItems;
