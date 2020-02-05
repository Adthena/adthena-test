import React from 'React';
import ClipLoader from "react-spinners/ClipLoader";


const UserInfo = (props) => {
    const user = props.user;
    return (
        <>
            <ClipLoader
                className="clip-loader"
                size={150}
                loading={props.loading}
            />
            {!props.loading && <div>
                {user && user.length > 0 &&
                    <div className="user-info">
                        <div>{user[0].name}</div>
                        <div>{user[0].email}</div>
                        <div>{user[0].website}</div>
                    </div>
                }
                {user && user.length == 0 && <div className="user-info"> User not found</div>}
            </div>}
        </>);

}
export default UserInfo;