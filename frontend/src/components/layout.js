import { Link, Outlet } from 'react-router-dom';
import NavBar from './navbar';

export default function Layout() {
    return (
        <div id="container">
            <header>
                <Link to="/">
                    <h1>Gamestar Gallery</h1>
                </Link>
                <NavBar/>
            </header>
            <main>
                <Outlet />

            </main>
            <footer>
                Data sourced using <a href="https://www.rawg.io/">rawg.io</a>
            </footer>
        </div>
    )
}
