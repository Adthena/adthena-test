
import React, { useState } from 'react';

const UserSearch = (props) => {
    const [value, setValue] = useState('');
    return (
        <form
            onSubmit={e => {
                e.preventDefault()
                props.handleSearch(value)
                setValue('')
            }}
        >

            <input
                type="text"
                className="user-search"
                value={value}
                onChange={e => setValue(e.target.value)}
                placeholder="search for a user tolist..."
            />
        </form>)
}

export default UserSearch;