import './App.css';

function App() {
  return (
    <div className="App">
      <header className="container">
        <h1>Crystalline Codex</h1>
        <nav>
            <a href="https://github.com/kittywizard/crystalline-codex" className="nav-link">github</a>
            <a href="#" className="nav-link">link</a>
        </nav>
    </header>

    <main className="container content">
                <button id="submit" className="btn">Roll</button>

        <div className="container results">
            <div className="characterInfo">
            </div>

            <div className="statInfo">
            </div>

            <button className="btn" id="resetBtn">Roll Again?</button>

        </div>
    </main>
    </div>
  );
}

export default App;
