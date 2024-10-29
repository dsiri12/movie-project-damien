import Tile from "./components/tile/Tile";
function App() {
  return (
    <>
      <Grid
        gridItems={[
          <Tile
            title="Save up to $139 on Surface Pro, Copilot+ PC Bundle"
            description="Wrap up AI-powered speed and next-level versatility when you pair a new Surface Pro 11 and Surface Pro Keyboard."
          />,
        ]}
      />
      <div>Hello World!</div>
    </>
  );
}

export default App;
