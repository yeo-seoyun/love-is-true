import { Outlet, useLocation } from "react-router-dom";
import { Provider } from "jotai";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ScrollToTop from "../components/ScrollToTop.jsx";
import Header from "../components/organisms/Header.jsx";
import Footer from "../components/organisms/Footer.jsx";
import SubHeader from "../components/organisms/SubHeader.jsx";

function Layout() {
  const queryClient = new QueryClient();
  const location = useLocation();

  return (
    <QueryClientProvider client={queryClient}>
      <Provider>
        <div className="w-full h-full">
          <Header />
          {location.pathname !== "/" && <SubHeader />}
          <ScrollToTop />
          <main>
            <Outlet />
          </main>
          <Footer />
        </div>
      </Provider>
    </QueryClientProvider>
  );
}

export default Layout;
