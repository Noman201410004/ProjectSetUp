import flower from "../src/assets/licensed-image.jfif";

import Foo from "./Components/Foo";
import UseCallBack from "./Hook/UseCallBack";
import UseContext from "./Hook/UseContext";
import UseMemo from "./Hook/UseMemo";
import UseRefUsing from "./Hook/UseRefUsing";
import UseStateHook from "./Hook/UseStateHook";

function App() {
  

  return (
    <>
    {/* <UseCallBack></UseCallBack> */}
    <UseRefUsing></UseRefUsing>
    {/* <Foo title={"d"} />
      <img style={{ width: "200px" }} src={flower} alt="" />

      <h1>hello</h1>
      <Foo superLongParam="bar" anotherSuperLongParam="baz" />
      <UseStateHook></UseStateHook>
      <UseMemo></UseMemo> */}
    </>
  );
}

export default App;
