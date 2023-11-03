import React from 'react';

const Header = ({category, setCategory,price, setPrice}) => {
    return(
        <div className='header-container'>
            <div className='category-container'>
                <button className={`${category === 'all' ? 'active' : 'inactive'}`} onClick={() => setCategory('all')}>All</button>
                <button className={`${category === 'cloth' ? 'active' : 'inactive'}`} onClick={() => setCategory('cloth')}>Cloth</button>
                <button className={`${category === 'shoe' ? 'active' : 'inactive'}`} onClick={() => setCategory('shoe')}>Shoe</button>
                <button className={`${category === 'book' ? 'active' : 'inactive'}`} onClick={() => setCategory('book')}>Book</button>
            </div>
            <select defaultValue={price} onChange={(e) => setPrice(e.target.value)} className='sort-input'>
                <option value={0}>None</option>
                <option value={1}>Price (Low to High)</option>
                <option value={-1}>Price (High to Low)</option>
            </select>
        </div>
    )
}
export default Header;