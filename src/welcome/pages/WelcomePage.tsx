import { useNavigate } from "react-router";
import { useContext } from "react";

import { CustomTitle } from "../components/CustomTitle";
import { CustomLogo } from "../components/CustomLogo";
import { CustomLoading } from "@/components/CustomLoading";

import { handleStarted } from "../actions/handle-started.action";
import { PokemonsContext } from "@/context/PokemonsContext";

export const WelcomePage = () => {
  const navigate = useNavigate();
  const { setPokemons, setLoading, loading } = useContext(PokemonsContext);

  const onStart = async () => {
    try {
      setLoading(true);
      const data = await handleStarted();
      setPokemons(data);
    } finally {
      setLoading(false);
    }
    navigate("/pokedex");
  };

  return (
    <>
      {loading && <CustomLoading />}
      <div className="flex flex-col h-dvh justify-center items-center">
        <CustomLogo />
        <CustomTitle />
        <button
          className="font-lato cursor-pointer text-lg px-5 py-2 font-bold text-white bg-red-normal rounded-full active:bg-red-bold"
          onClick={onStart}
        >
          Get started
        </button>
      </div>
    </>
  );
};
