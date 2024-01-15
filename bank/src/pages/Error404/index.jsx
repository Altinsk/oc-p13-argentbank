import { Link } from 'react-router-dom';

export default function Error404() {
    return (
        <main>
            <h1>Error 404</h1>
            <Link to="/">Retourner à la page d'accueil</Link>
        </main>
    );
}
