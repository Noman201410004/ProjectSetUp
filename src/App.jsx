import flower from "../src/assets/licensed-image.jfif";

import Foo from "./Components/Foo";
import UseStateHook from "./Hook/UseStateHook";

function App() {
  

  return (
    <>
    <Foo title={"d"} />
      <img style={{ width: "200px" }} src={flower} alt="" />

      <h1>hello</h1>
      <Foo superLongParam="bar" anotherSuperLongParam="baz" />
      <UseStateHook></UseStateHook>
    </>
  );
}

export default App;
