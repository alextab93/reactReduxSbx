import React, {Component} from 'react';
import TodoItem from '../Presentational/TodoItem';

export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this.state = {
            todo: '',
            list: [{name: 'correr', state: false, id: 1}, {name: 'Aprender redux', state: true, id: 2}]
        };
    }

    handleChange(id) {
        const newList = this.state.list.map(item => {
           if(item.id === id) {
               item.state = !item.state;
           }
           return item;
        });
        this.setState({todo: '', list: newList});
    }

    handleInput({target}) {
        const text = target.value;
        this.setState({todo: text});
    }

    addTodo() {
        const id = this.state.list.length + 1;
        const newList = [...this.state.list, {id: id, name: this.state.todo, state: false}];
        this.setState({list: newList});
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="container">
                <div className="d-flex justify-content-center">
                    <div className="col-5 card">
                        <div className="card-body">
                            <div className="form-group text-left">
                                <label className="px-3">Description:</label>
                                <div className="d-flex">
                                    <div className="col-8">
                                        <input className="form-control mr-3" type="text" value={this.state.todo} onChange={this.handleInput}/>
                                    </div>
                                    <div className="col-4">
                                        <button className="btn btn-success" onClick={() => this.addTodo()}>Save</button>
                                    </div>
                                </div>

                            </div>
                            <ul className="list-group">
                                {
                                    this.state.list.map(item => (
                                        <li key={'todo_' + item.id} className="list-group-item">
                                            <input type="checkbox" checked={item.state} onChange={() => this.handleChange(item.id)}/>

                                            <label className="switch">
                                                <input type="checkbox"/>
                                                <div className="slider round"></div>
                                            </label>

                                            <span>{item.name}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}