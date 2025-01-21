import { Outlet } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="App">
      <header>
        <h1>Pokedex</h1>
      </header>
      <main className='container'>
        <Outlet />
      </main>
      <footer className='footer'>
        <p>Powered by Jonathan Tellez</p>
      </footer>
    </div>
  );
}

export default Dashboard;