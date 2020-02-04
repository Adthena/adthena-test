import React from 'React';

const UserInfo = (props) => {
    const user = props.user;
    if (user) {
        if (user.length > 0) return (
            <div>
                {user && user.length > 0 &&
                    <div className="user-info" >

                        <div>{user[0].name}</div>
                        <div>{user[0].email}</div>
                        <div>{user[0].website}</div>
                    </div>}
            </div>)
        else return <div className="user-info">User not found</div>
    }
    else return '';
}
export default UserInfo;