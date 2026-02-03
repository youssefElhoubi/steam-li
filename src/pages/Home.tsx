import React from 'react'
import FilterSidebar from './../components/FilterSidebar';
import Header from '../layouts/Header';

const Home : React.FC = () => {
    return (
        <div>
            <Header />
            <FilterSidebar/>
        </div>
    )
}

export default Home