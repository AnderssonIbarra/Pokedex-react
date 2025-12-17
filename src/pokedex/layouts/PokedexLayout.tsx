import { Outlet } from "react-router";
import { CustomNavbar } from "../components/custom/CustomNavbar";
import { CustomButtonList } from "../components/custom/CustomButtonList";

export const PokedexLayout = () => {
  return (
    <div>
      <CustomNavbar />
      <Outlet />
      <CustomButtonList />
    </div>
  );
};
