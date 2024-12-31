import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Greeting from "./Greeting";

function App() {
  let name = 'Pranav';
  return (
    <div>
    <h1>Hello {name}</h1>
    <Greeting name = {'Akash'}/>
    <Greeting name = {'Ayush'}/>
   {/* <Home name = {name} age = {24}/>
    <Contact />
    <About /> */}
    </div>
  );
}
export default App;
