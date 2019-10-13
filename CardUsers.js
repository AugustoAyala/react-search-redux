import React from 'react';
import { connect } from 'react-redux';

const CardUsers = ({users}) => {
        return (
            <div>
                {users.length > 0 ?
                    <div className="card-body list-comments ">
                        <span className="text-dark">Usuarios</span>
                        {users.map(user =>
                            <div className="p-3"
                                key={user.id}>
                                <p className="modificar"> {user.name}</p>
                            </div>)}
                    </div>
                    : null
                }
            </div>
        )
}
const mapStateToProps = state => ({
    users: state.usersSearch.users
})

export default connect(mapStateToProps)(CardUsers);
