import { useSearchParams } from "react-router";

export const EmptyList = () => {
  const [, setSearchParams] = useSearchParams();

  const handlerBack = () => {
    const newSearchParams = new URLSearchParams();

    newSearchParams.delete("pokemon");

    setSearchParams(newSearchParams);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-gray-bold m-2.5">Uh-oh!</h1>
      <p className="text-xl font-medium text-gray-normal mt-0 mb-6">
        You look lost on your journey!
      </p>

      <button
        className="bg-red-normal text-white text-lg font-bold cursor-pointer px-5 py-3 rounded-full border-0 active:bg-red-bold"
        onClick={() => handlerBack()}
      >
        Go back home
      </button>
    </div>
  );
};
