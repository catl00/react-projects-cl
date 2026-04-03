  import { Link } from 'react-router-dom';

const ProductCard = (props) => {
    return (
        <div className='overflow-hidden p-3'>
            <div>    
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
            </div>
            <div className='p-3'>
                <div className='font-bold text-xl mb-3'>
                    {props.product.name}
                </div>
                <div>
                    {props.product.description}
                </div>
                <div className='flex justify-center p-3'>
                    <p className='p-3 text-gray-500'>How many do you own?</p>
                    <input
                        type="number"
                        min="1"
                        defaultValue="0"
                        className='border p-2 rounded w-14 mr-2 rounded-full text-center'
                    />
                </div>
            </div>
        </div>
    )
}

export default ProductCard;