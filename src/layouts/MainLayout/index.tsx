import Header from "../../components/Header";
import { Outlet } from "react-router-dom";
import "./index.css"

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      <main className="mx-auto w-full max-w-2xl backgroup-main h-lvh border rounded-3xl border-color pt-1">
        <div className="h-full overflow-y-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
