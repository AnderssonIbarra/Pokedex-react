import { use, useEffect } from "react";
import { useSearchParams } from "react-router";

import { IconFavActive, IconFavDisable, IconClose } from "../assets/Icons";

import { PokemonsContext } from "@/context/PokemonsContext";

import { usePokemon } from "../hooks/usePokemon";

import { capitalize } from "@/lib/capitalize";
import { formatType } from "@/lib/formatType";

import { CustomLoading } from "../../components/CustomLoading";
import { EmptyList } from "./EmptyList";

import heroBg from "../assets/hero.png";

const styleParagraph =
  "w-full text-lg text-gray-normal mt-2.5 mb-0 mx-0 pb-2.5 border-b-[#e8e8e8] border-b border-solid";

export const PokemonDetail = () => {
  const { toggleFavorite, isFavorite, setPokemonInData } = use(PokemonsContext);
  const [searchParams, setSearchParams] = useSearchParams();

  const idSlug = searchParams.get("pokemon") || "";
  const { data, isLoading } = usePokemon(idSlug);

  useEffect(() => {
    if (data) {
      setPokemonInData(data.name);
    }
  }, [data, setPokemonInData]);

  if (isLoading) return <CustomLoading />;

  if (!data) return <EmptyList />;

  const handlerClose = () => {
    setSearchParams((prev) => {
      prev.delete("pokemon");
      return prev;
    });
  };

  const handlerShare = () => {
    const textCopy = `Name: ${capitalize(data.name)}, Weight: ${
      data.weight
    }, Height: ${data.height}, Types: ${formatType(data.types)}`;
    navigator.clipboard.writeText(textCopy);
  };

  return (
    <section className="flex flex-col fixed bg-[rgb(0,0,0,0.6)] w-full h-dvh justify-center items-center inset-0 z-10">
      <div className="bg-white relative w-79 h-126 rounded-md md:w-145 md:h-126">
        <button
          className="absolute cursor-pointer right-3 top-3 hover:scale-105"
          onClick={() => handlerClose()}
        >
          <IconClose />
        </button>
        <div
          className="flex w-79 h-55 bg-no-repeat bg-center bg-cover justify-center items-center rounded-[6px_6px_0_0] md:w-145"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <img
            src={data.image}
            alt={`Imagen de ${data.name}`}
            className="w-45 h-45"
          />
        </div>
        <div className="flex flex-col px-7.5 py-2.5">
          <p className={styleParagraph}>
            <strong>Name: </strong>
            {capitalize(data.name)}
          </p>
          <p className={styleParagraph}>
            <strong>Weight: </strong>
            {data.weight}
          </p>
          <p className={styleParagraph}>
            <strong>Height: </strong>
            {data.height}
          </p>
          <p className={styleParagraph}>
            <strong>Types: </strong>
            <span>{formatType(data.types)}</span>
          </p>
        </div>
        <div className="flex h-fit justify-between px-5 md:px-7.5">
          <button
            className="bg-red-normal font-bold text-lg text-white cursor-pointer px-5 py-3 rounded-full active:bg-red-bold"
            onClick={() => handlerShare()}
          >
            Share to my friends
          </button>
          <button
            className="cursor-pointer"
            onClick={() => toggleFavorite(data.name)}
          >
            {isFavorite(data.name) ? <IconFavActive /> : <IconFavDisable />}
          </button>
        </div>
      </div>
    </section>
  );
};
