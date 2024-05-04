import About from "../pages/About";
import Home from "../pages/Home";
import Shop from "../pages/Shop/Shop";

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
    index: true,
    text: "샵",
    element: <Shop />,
    // children: [
    //   { index: true, element: < /> },
    //   { path: "ceomessage", element: < /> },
    //   { path: "careers", element: < /> },
    // ],
  },
];

export default navigationItems;
