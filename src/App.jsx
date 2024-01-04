import'./App.css' 
import Foo from './Components/Foo'

function App() {
  var baz=10;
var c= 1;

  return (
    <>
      {c}
      <Foo bar={baz} />
    </>
  );
}

export default App
