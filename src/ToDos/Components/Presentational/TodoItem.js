import React, {Component} from 'react';
import {toggleTodo} from "../../../Actions/Actions";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

class TodoItem extends Component {

    constructor(props){
        super(props)
        this.state = {item: this.props.item}

    }
    componentDidMount(){
        console.log(this.state)
    }
    componentWillReceiveProps(next){
        console.log(next)
    }
    shouldComponentUpdate(state,porps){
        debugger
        console.log(state,porps)
    }

    render() {
        return (<li className="list-group-item">
            <div className="d-flex">
                <div className="col-2">
                    <input type="checkbox" value={this.state.item.state} checked={this.state.item.state}
                           onChange={() => this.props.toggleTodo(this.state.item.id)}/>
                </div>
                <div className="col-10 text-left">
                    <span>{this.state.item.name}</span>
                </div>
            </div>
        </li>);
    }
}



function mapDispatchToProps(dispatch) {
    return bindActionCreators({toggleTodo}, dispatch);
}

export default connect(null, mapDispatchToProps)(TodoItem);