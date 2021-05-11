import './App.css';
import Search from '../src/components/search/Search';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className = 'text-primary mb-3 mt-4'>Search Github User</h1>
      </header>
      <Search/>
    </div>
  );
}

export default App;
