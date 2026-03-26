  import { Link } from 'react-router-dom';

const ProductCard = (props) => {
    return (
        <div className='border mb-4 rounded overflow-hidden p-3'>
            <Link to={`/products/${props.product.id}`}>
                {/** normalize possible image fields from the JSON: imageUrl | image | images */}
                {(() => {
                    const img = props.product.imageUrl || props.product.image || props.product.images || '';
                    return (
                        <div
                            style={{
                                backgroundImage: img ? `url('${img}')` : undefined,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'contain',
                                backgroundPosition: 'center',
                                height: '200px',
                            }}
                        />
                    )
                })()}
            </Link>
            <div className='p-3'>
                <div className='font-bold text-xl mb-3'>
                    <Link to={`/products/${props.product.id}`}>
                        {props.product.name}
                    </Link>
                </div>
                <div className='font-bold text-xl mb-3'>
                    ${props.product.price}
                </div>
                <div>
                    {props.product.description}
                </div>
                <Link to={`/products/${props.product.id}`}
                    className='bg-green-500 text-white p-2 flex justify-center mt-3'
                >
                        View
                </Link>
            </div>
        </div>
    )
}

export default ProductCard;