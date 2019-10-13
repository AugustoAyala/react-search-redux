
import React, { Component } from 'react';
import store from '../../store';
import { initialUsers } from '../../actions/usersActions';
import Title from '../title/Title';
import Search from './Search';
import CardUsers from './CardUsers';

export default class Users extends Component {

    componentDidMount() {
        store.dispatch(initialUsers());
    }
    render() {
        return (
            <div className="row justify-content-center p-5">
                <br />
                <br />
                <div className="col-md-6 col-lg-8 top-card">
                    <Title  />
                    <div className="card border-white comments-headers">
                        <div className="card-header card-header-fondo border-light">
                            <Search />
                        </div>
                        <CardUsers />
                    </div>
                </div>
            </div>
        )
    }
}



