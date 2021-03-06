import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { SearchByKeyBar } from './SearchByKeyBar';
import { Filter } from './Filter';
import './Header.css';

export const Header = ({activity,setActivity}) => {
    const [searchdisplay, setsearchdisplay] = useState(false);
    const [filterDisplay, setfilterDisplay] = useState(false)

    const handleDisplaySearchBar = () => {
        setsearchdisplay( e => !e);
        setfilterDisplay(false);
    } 

    const handleDisplayFilter = () => {
        setfilterDisplay( e => !e);
        setsearchdisplay(false);
    } 

    return <header>
            <button onClick={handleDisplaySearchBar} className='search-by-key-button'><span id="icon-seach"></span></button>
            { searchdisplay && <SearchByKeyBar activity={activity} setActivity={setActivity}/> }
            { (!searchdisplay && !filterDisplay) && <h1>WhyAreYouBored?</h1> }
            { filterDisplay && <Filter activity={activity} setActivity={setActivity}/>}
            <button  onClick={handleDisplayFilter} className='search-by-filter-button'><span id="icon-filter"></span></button>
        </header>;
};

Header.propTypes = {
    setActivity: PropTypes.func.isRequired,
};