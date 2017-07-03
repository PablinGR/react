import React from 'react';

const SearchBox = (props) =>(
    <div>
        <input 
            type="text" 
            value={props.value}
            onChange={props.onChange}
        />
    </div>
);

export default SearchBox;