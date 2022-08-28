import './App.css';
import ApiDemo from './demos/api';
import SimpleDemo from './demos/simple';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Deel test - build an autocomplete component</h1>
        <p>
          In this page you can see some example of the autocomplete component that I built.
        </p>
        <p>I develop it with the idea of being a published npm package, so it is a bit flexible</p>

        <h2>Description of the idea</h2>
        
        <p>
          The autocomplete component that I built it leaves to the developer the logic of searching,
          so in the demos in this page it will be visible how I implemented the requested features using the components
        </p>
      


        
      </header>


      <SimpleDemo></SimpleDemo>


      <ApiDemo></ApiDemo>
    </div>
  );
}

export default App;
