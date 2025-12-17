import { CustomSearch } from "./CustomSearch";

export const CustomNavbar = () => {
  return (
    <section className="flex fixed bg-bone w-full h-30 justify-center items-center inset-0">
      <CustomSearch />
    </section>
  );
};
