import React from "react";
import { Link } from 'react-router-dom';
import { useHttpRequest } from '../Hooks/HttpRequests';
import Loader from './Loader';

function NavMenu(props) {
    const url = `/smiski.json`;
    const products = useHttpRequest(url);

    // Build unique series list in order of first appearance
    let seriesList = [];
    if (products.data && Array.isArray(products.data)) {
        const seen = new Set();
        products.data.forEach(p => {
            if (p.series && !seen.has(p.series)) {
                seen.add(p.series);
                seriesList.push(p.series);
            }
        });
    }

    return (
        <div>
            <div className="font-bold p-2 text-2xl"> <Link to="/">Smiski Tracker</Link></div>
            {products.loading ? (
                <Loader />
            ) : (
                <ul>
                    <li>
                        <Link
                            to="/"
                            className='bg-green-500 text-white p-2 flex justify-center mt-3'
                            onClick={props.closeMenu}
                        >
                            All Series
                        </Link>
                    </li>
                    {seriesList.map((series) => (
                        <li key={series}>
                            <Link
                                to={`/series/${encodeURIComponent(series)}`}
                                className='bg-green-500 text-white p-2 flex justify-center mt-3'
                                onClick={props.closeMenu}
                            >
                                {series}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default NavMenu;