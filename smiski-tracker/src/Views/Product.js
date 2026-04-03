import {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Loader from '../Components/Loader';

function Product() {
    const {id} = useParams();
    // fetch the local JSON stored in public/smiski.json and select the item by id
    const url = `/smiski.json`;
    const [product, setProduct] = useState({
        loading: false, 
        data: null, 
        error: false
    });

    let content = null;

    useEffect(() => {
        setProduct({loading: true, data: null, error: false});
        axios.get(url).then(response => {
            // response.data is an array of products; find the one matching the id
            const found = Array.isArray(response.data) ? response.data.find(p => String(p.id) === String(id)) : null;
            if (found) {
                setProduct({loading: false, data: found, error: false});
            } else {
                setProduct({loading: false, data: null, error: true});
            }
        }).catch(error => {
            setProduct({loading: false, data: null, error: true});
        });
    }, [url, id])

    if (product.error) {
        content = <div className='text-red-500'>Error loading product. Try again!</div>
    }   

    if (product.loading) {
        content = <Loader />
    }
    
    if (product.data) {
        content =
            <div className='p-3'>
                <h1 className='text-2xl font-bold mb-3 text-center'>{product.data.name}</h1> 
                <div className='flex items-center justify-center mb-3'>
                    {(() => {
                        const img = product.data.imageUrl || product.data.image || product.data.images || '';
                        return img ? (
                            <img
                                src={img}
                                alt={product.data.name}
                            />
                        ) : null;
                    })()}
                </div>
                <div className='text-center'>
                    {product.data.description}
                </div>
            </div>
    }

    return (
        <div>
            {content}
        </div>
    )
    
}
    

export default Product;