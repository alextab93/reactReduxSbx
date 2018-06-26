import React from 'react';

export const TodoItem = (props) => {
    return (
        <li className="list-group-item" onClick={props.change}>
            <div className="d-flex">
                <div className="col-2">
                    <input type="checkbox" checked={props.item.state} onChange={props.change} readOnly/>
                </div>
                <div className="col-10 text-left">
                    <span>{props.item.name}</span>
                </div>
            </div>
        </li>
    );
};
