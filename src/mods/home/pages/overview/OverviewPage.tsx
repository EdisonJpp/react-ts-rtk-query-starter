import useOverviewPage from "./useOverviewPage";

const OverviewPage = () => {
  const [{ counter, bulbasaur }, actions] = useOverviewPage();

  return (
    <div>
      <h1>Overview Page</h1>
      <h3> {bulbasaur?.isLoading ? "Loading...." : bulbasaur?.data.name}</h3>

      <p>Counter: {counter?.value}</p>

      <button onClick={actions.handleIncrement}>Increment</button>
      <button onClick={actions.handleDecrement}>Decrement</button>
    </div>
  );
};

export default OverviewPage;
