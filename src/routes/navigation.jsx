import About from "../pages/About";
import Home from "../pages/Home";
import Join from "../pages/Join";
import Login from "../pages/Login";
import Lookbook from "../pages/Lookbook/LookBook";
import Acc from "../pages/Shop/Acc";
import Best from "../pages/Shop/Best";
import Bottom from "../pages/Shop/Bottom";
import Ops from "../pages/Shop/Ops";
import Outer from "../pages/Shop/Outer";
import ProductDetail from "../pages/Shop/ProductDetail";
import Shop from "../pages/Shop/Shop";
import Top from "../pages/Shop/Top";

const navigationItems = [
  {
    id: "login",
    path: "/login",
    index: true,
    text: "로그인",
    element: <Login />,
  },
  {
    id: "join",
    path: "/join",
    index: true,
    text: "회원가입",
    element: <Join />,
  },
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
      { path: "detail/:productId", element: <ProductDetail /> },
    ],
  },
  {
    id: "lookbook",
    path: "/lookbook",
    index: true,
    text: "룩북",
    element: <Lookbook />,
  },
];

export default navigationItems;
