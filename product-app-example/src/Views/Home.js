import Loader from '../Components/Loader';
import ProductCard from '../Components/ProductCard';
import { useHttpRequest } from '../Hooks/HttpRequests';

function Home() {
    // fetch the local JSON from the public folder
    const url = `/smiski.json`;
    
    let products = useHttpRequest(url);

    let content = null;

    if (products.error) {
        content = <div className='text-red-500'>Error loading product. Try again!</div>
    }   

    if (products.loading) {
        content = <Loader />
    }

    if (products.data) {
        content =
            products.data.map((product) => (
                <div key={product.id}>
                    <ProductCard 
                        product = {product}
                    />
                </div>
            ))
    }
    
    return (
        <div>
            <h1 className='font-bold text-2xl'>Series 1</h1>
            {content}
        </div>
    );
}

export default Home;