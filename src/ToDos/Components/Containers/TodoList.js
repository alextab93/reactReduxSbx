import React, {Component} from 'react';
import TodoItem from '../Presentational/TodoItem';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTodo } from '../../../Actions/Actions';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.handleInput = this.handleInput.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this.state = {
            todo: ''
        };
    }

    handleInput({target}) {
        const text = target.value;
        this.setState({todo: text});
    }

    addTodo() {
        this.props.addTodo(this.state.todo);
        this.setState({todo: ''});
    }

    componentDidMount() { }



    render() {
        return (
            <div className="container">
                <div className="d-flex justify-content-center">
                    <div className="col-5 card shadow">
                        <div className="card-body">
                            <div className="form-group text-left">
                                <label>Description:</label>
                                <div className="row">
                                    <div className="col-8">
                                        <input className="form-control mr-3" type="text" value={this.state.todo} onChange={this.handleInput}/>
                                    </div>
                                    <div className="col-4">
                                        <button className="btn btn-success btn-block" onClick={() => this.addTodo()}>Save</button>
                                    </div>
                                </div>
                            </div>
                            <ul className="list-group">
                                {this.props.todos.map(item => (
                                    <TodoItem key={'todo_' + item.id} item={item}/>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        todos: state.TodoApp.todos
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({addTodo}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);