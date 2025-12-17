import { IconLoading } from "@/pokedex/assets/Icons";

export const CustomLoading = () => {
  return (
    <section className="flex flex-col fixed bg-[rgb(0,0,0,0.6)] w-full h-dvh justify-center items-center inset-0 z-10">
      <div className="w-26.5 h-26.5 animate-spin">
        <IconLoading />
      </div>
    </section>
  );
};
