'use client'
import { Search } from 'lucide-react';


const SearchBar = () => {
    return (
        <div className='flex items-center relative'>
            <input type="text" placeholder='Search'/>
            <button className="absolute right-0"><Search className='w-5 h-5'/></button>
        </div>
    );
};

export default SearchBar;