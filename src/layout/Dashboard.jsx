import { NavLink, Outlet } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="App">
      <NavLink to={'/'} className={({ isActive }) =>
        isActive ? "home__link home__link--inactive" : " home__link home__link--active"
      }>
        <h1>Pokedex</h1>
      </NavLink>
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