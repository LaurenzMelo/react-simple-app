import React from 'react';

interface IState{};
interface IProps{};

let Dashboard:React.FC<IProps> = () => {
    return (
        <React.Fragment>
            <div className="container text-center">
                <div className="row">
                    <div className="col mt-5">
                        <h3> Welcome to my Simple React App </h3>
                        <p className="fs-italic mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo doloribus eligendi, qui eos vitae reprehenderit illo eius laudantium dicta explicabo repellendus minima ex aliquam sit quidem perferendis suscipit. Sapiente, quibusdam!</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Dashboard;