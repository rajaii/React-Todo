import React from 'react';

const SearchForm = (props) => {

 return (
    <div>
        <form name='search'>
            <input className='textenter'
                type='text'
                value={props.list}
                placeholder='Search Here'
                name='search'
                onChange={props.sU1}
            />
            
        </form>
        <button className='textenter' value={props.list} onClick={props.searchUtility} >Search here!</button>
    </div>
 )

}

export default SearchForm;