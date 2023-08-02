import { RootState } from "@/lib/store";
import { increment, decrement } from "@/lib/slice/counter-slice";
import { useSelector, useDispatch } from "react-redux";
import { useGetPokemonByNameQuery } from "@/lib/api/pokemon-api";

const useOverviewPage = () => {
  // ----------- dispatch and states ----------- //
  const dispatch = useDispatch();
  const counter = useSelector((state: RootState) => state.counter);

  // ----------- API Hooks calls ----------- //
  const bulbasaur = useGetPokemonByNameQuery("bulbasaur");

  /**
   * @description increment counter
   */
  function handleIncrement() {
    dispatch(increment());
  }

  /**
   * @description decrement counter
   */
  function handleDecrement() {
    dispatch(decrement());
  }

  return [
    { counter, bulbasaur },
    { handleIncrement, handleDecrement },
  ];
};

export default useOverviewPage;
