import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers, searchUsers } from '../../actions/usersActions';


const Search = (props) => {

    const onChange = e => {
        props.searchUsers(e.target.value);
    };
    const onSubmit = async e => {
        e.preventDefault();
        await props.fetchUsers(props.text);
    }
        return (
            <div>
                <form onSubmit={onSubmit}>
                    <button
                        type="submit"
                        className="pink-button">
                        Buscar
                    </button>
                    <input
                        type="text"
                        className="form-control mt-3"
                        name="searchText"
                        placeholder="nombre de usuario..."
                        required
                        onChange={onChange}
                    />
                </form>
            </div>
        )
}

const mapStateToProps = state => ({
    text: state.usersSearch.text
})

export default connect(mapStateToProps, { fetchUsers, searchUsers })(Search);

