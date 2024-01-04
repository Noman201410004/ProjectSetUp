import flower from "../src/assets/licensed-image.jfif";

import Foo from './Components/Foo';

function App() {
 
var c= 1;
 
    

  return (
    <>
      {c}
      <Foo hidden={true} />
      <img src={flower} alt="" />
      <img src="hello.jpg" alt=" of me waving hello" />

      <h1>hel lo</h1>
    </>
  );
}

export default App;
