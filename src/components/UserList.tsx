import React, { useEffect, useState } from 'react';
import { IUser } from '../models/IUser';
import { ApiService } from '../services/ApiService';

interface IState{
    loading : boolean;
    users : IUser[];
};
interface IProps{};


let UserList:React.FC<IProps> = () => {
    let [state, setState] = useState<IState>({
        loading: false,
        users: [] as IUser[]
    })

    useEffect(() => {
        setState({...state, loading : true})
        ApiService.getUsers().then((response) => {
            setState({
                ...state,
                users : response.data,
                loading : false
            })
        })
    }, [])

    let {users, loading} = state;
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h3 className="text-primary mt-3"> User List </h3>
                        <table className="table table-hover text-center table-striped table-dark mt-3">
                            <thead className="bg-success text-white">
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.length > 0 && users.map(user => {
                                        return (
                                            <tr>
                                                <td>{user.name}</td>
                                                <td>{user.email}</td>
                                                <td>{user.phone}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default UserList;