
import React, { useState } from 'react';
import PropTypes from 'prop-types';


const UserSearch = (props) => {
    const [value, setValue] = useState('');
    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    props.handleSearch(value);
                    setValue('')
                }}
            >
                <input
                    type="text"
                    className="user-search"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    placeholder="search for a user tolist..."
                    disabled={props.disabled}
                />
            </form>
            {props.error && <div className="error-message">Error fetching data</div>}
        </div>)
}

UserSearch.propTypes = {
    handleSearch: PropTypes.func.isRequired,
};
export default UserSearch;



