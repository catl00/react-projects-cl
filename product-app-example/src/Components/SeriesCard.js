import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

// SeriesCard re-uses a representative product from the series to display
// an image and the series name. Home will pass a representative product
// and a count of items in the series.
const SeriesCard = (props) => {
    const product = props.product || {};
    const seriesName = product.series || 'Series';
    const img = product.imageUrl || product.image || product.images || '';
    const count = props.count || 0;

    return (
        <div className='border mb-4 rounded overflow-hidden p-3'>
            <Link to={`/series/${encodeURIComponent(seriesName)}`}>
                <div
                    style={{
                        backgroundImage: img ? `url('${img}')` : undefined,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        height: '150px',
                    }}
                />
            </Link>
            <div className='p-3'>
                <div className='font-bold text-xl mb-3'>
                        {seriesName}
                </div>
                <div className='text-sm text-gray-600'>
                    {count > 0 ? `${count} items` : null}
                </div>
                <Link to={`/series/${encodeURIComponent(seriesName)}`}
                    className='bg-green-500 text-white p-2 flex justify-center mt-3'
                >
                        View
                </Link>
            </div>
        </div>
    )
}

export default SeriesCard;