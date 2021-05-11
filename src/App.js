import './App.css';
import Search from '../src/components/search/Search';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className = 'text-primary mb-3 mt-4'>Search Github User</h1>
      </header>
      <Search/>
      <div>
        <a className = 'git-repo' target = '_blank' href = 'https://github.com/snehadr23/search-github-user'>
          <i className = 'fab fa-github'></i>
        </a>
      </div>
    </div>
  );
}

export default App;
