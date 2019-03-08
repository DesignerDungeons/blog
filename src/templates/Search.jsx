import React from 'react';

export default ({searchString, updateFunction}) =>
    (<div className="search-bar">
        <span>Search</span>
        <input type='text' value={searchString} onChange={event => updateFunction(event.target.value) }/>
    </div>);
