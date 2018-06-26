import React from 'react';

export const TodoItem = (props) => {
    return (
        <li className="list-group-item">
            <div className="d-flex">
                <div className="col-2">
                    <input type="checkbox" checked={props.item.state} onChange={props.change}/>
                </div>
                <div className="col-10 text-left">
                    <span>{props.item.name}</span>
                </div>
            </div>
        </li>
    );
};
