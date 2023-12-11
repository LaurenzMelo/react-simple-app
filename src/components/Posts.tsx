import React, { useEffect, useState } from 'react';
import { IPosts } from '../models/IPost';
import { ApiService } from '../services/ApiService';

interface IState{
    loading : boolean;
    posts : IPosts[];
};
interface IProps{};

let Posts:React.FC<IProps> = () => {
    let [state, setState] = useState<IState>({
        loading : false,
        posts : [] as IPosts[]
    })

    useEffect(() => {
        setState({...state, loading : true})

        ApiService.getPosts().then((response) => {
            setState({
                ...state,
                loading : false,
                posts : response.data.slice(0, 10)
            })
        })
    }, [])

    let { loading, posts } = state
    return (
        <React.Fragment>
            <div className="container">
                <div className="row justify-content-center mt-3">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header p-4 text-center">This is my first post!</div>
                            {
                                posts.length > 0 && posts.map(post => {
                                    return (
                                        <div className="card-body" key={post.id}>
                                            <h5 style={{margin: 0}}>{post.name}</h5>
                                            <span className="fst-italic">{post.email}</span>
                                            <p className="mt-3">{post.body}</p>
                                            <hr />
                                        </div>
                                    )
                                })
                            }
                            </div>
                        </div>
                    </div>
                </div>
        </React.Fragment>
    )
}

export default Posts;