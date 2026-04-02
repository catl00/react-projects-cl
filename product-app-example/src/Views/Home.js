import Loader from '../Components/Loader';
import ProductCard from '../Components/ProductCard';
import SeriesCard from '../Components/SeriesCard';
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
        // Aggregate unique series and pick a representative product for each series
        const seriesMap = {};
        products.data.forEach((p) => {
            if (!seriesMap[p.series]) {
                seriesMap[p.series] = { representative: p, count: 0 };
            }
            seriesMap[p.series].count += 1;
        });

        const seriesList = Object.keys(seriesMap).map((k) => {
            const rep = seriesMap[k].representative;
            // Prefer explicit seriesImage if present in the JSON
            const representative = {
                ...rep,
                images: rep.seriesImage || rep.images || rep.image || rep.imageUrl || ''
            };
            return ({
                series: k,
                representative,
                count: seriesMap[k].count,
            })
        });

        // Only show the two series and display them in a responsive two-column grid
        content = (
            <div className='mt-4 grid grid-cols-1 md:grid-cols-2 gap-6'>
                {seriesList.slice(0, 3).map((s) => (
                    <div key={s.series} className='w-full'>
                        <SeriesCard product={s.representative} count={s.count} />
                    </div>
                ))}
            </div>
        );
    }
    
    return (
        <div>
            <h1 className='font-bold text-2xl text-center'>Smiski Series</h1>
            {content}
        </div>
    );
}

export default Home;