import {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Loader from '../Components/Loader';
import ProductCard from '../Components/ProductCard';

function Series() {
    const { name } = useParams();
    const decodedName = decodeURIComponent(name || '');
    const url = `/smiski.json`;
    const [state, setState] = useState({ loading: false, data: null, error: false });

    useEffect(() => {
        setState({ loading: true, data: null, error: false });
        axios.get(url).then(response => {
            const items = Array.isArray(response.data) ? response.data.filter(p => p.series === decodedName) : [];
            if (items && items.length > 0) {
                setState({ loading: false, data: items, error: false });
            } else {
                setState({ loading: false, data: null, error: true });
            }
        }).catch(() => {
            setState({ loading: false, data: null, error: true });
        });
    }, [url, decodedName]);

    if (state.error) return <div className='text-red-500'>Error loading series. Try again!</div>;
    if (state.loading) return <Loader />;

    return (
        <div>
            {state.data && (
                <div>
                    <h1 className='text-2xl font-bold mb-3 text-center'>{decodedName}</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        {state.data.map((product) => (
                            <div key={product.id}>
                                <ProductCard product={product} />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
    

export default Series;