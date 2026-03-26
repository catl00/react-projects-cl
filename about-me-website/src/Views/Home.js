import React from 'react';
import HelloWorld from '../Components/HelloWorld';

function Home() {
    return (
        <div>
            <h1 className='font-bold text-2xl'>Home Page</h1>
             <HelloWorld name="Catherine" />
        </div>
    );
}

export default Home;