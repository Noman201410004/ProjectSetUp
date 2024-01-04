import flower from "../src/assets/licensed-image.jfif";

import Foo from './Components/Foo';

function App() {
 
var c= 1;
 
    

  return (
    <>
      {c}
      <Foo title={"d"} />
      <img style={{ width: "200px" }} src={flower} alt="" />
     

      <h1>hel lo</h1>
    </>
  );
}

export default App;
