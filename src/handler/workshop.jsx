import React from "react";
import {RouteHandler, Link} from "react-router";

class Workshop extends React.Component {
    render(){
        let parentStyle = {
            textAlign: "center",
            backgroundColor: "lightgray",
            padding: 8
        };

        return (
            <div style={parentStyle}>
                <h3>hey I am Parent</h3>
                <ChildComponent/>
            </div>
        );
    }
}

var ChildComponent = React.createClass({
    render: function() {
        let childStyle = {
            backgroundColor: "#f04e2f",
            padding: 10
        };

        return (
            <div style={childStyle}>I am child</div>
        );
    }
});

// let Workshop = React.createClass({
//     getInitialState: function() {
//         return ({
//             todo: [],
//             newTodo: ""
//         });
//     },
//
//     handleInputChange: function(e) {
//         this.setState({
//             newTodo: e.target.value
//         });
//     },
//
//     handleSubmit: function() {
//         let nextTodos = this.state.todo.concat([this.state.newTodo]);
//
//         this.setState({
//             newTodo: "",
//             todo: nextTodos
//         })
//     },
//
//     render: function() {
//         let parentStyle = {
//             textAlign: "center",
//             backgroundColor: "lightgray",
//             width: 400,
//             margin: "0 auto",
//             padding: 8
//         };
//         let inputStyle = {
//             fontSize: 16,
//             padding: 8
//         };
//
//         return (
//             <div style={parentStyle}>
//                 <h3>Todo List</h3>
//                 <input style={inputStyle} onChange={this.handleInputChange} value={this.state.newTodo}/>
//                 <button style={inputStyle} onClick={this.handleSubmit}>Add</button>
//                 <TodoList todo={this.state.todo}/>
//                 <StateMonitor currentState={this.state}/>
//             </div>
//         );
//     }
// });
//
// let TodoList = React.createClass({
//     render: function() {
//         let style={
//             list: {
//                 listStyle: "none",
//                 margin: "20px 0 0 0",
//                 padding: 0
//             },
//             item: {
//                 background: "white",
//                 padding: "10px 20px",
//                 border: "1px solid lightgray"
//             }
//         };
//
//         let todo = this.props.todo;
//
//         let todoContent = todo.map((item, i) => {
//             return (
//                 <li key={i} style={style.item}>{item}</li>
//             )
//         });
//
//         return (
//             <ul style={style.list}>
//                 {todoContent}
//             </ul>
//         );
//     }
// });
//
// let StateMonitor = React.createClass({
//     render: function() {
//         let style={
//             color: "white",
//             background: "#333",
//             padding: 20,
//             marginTop: 50,
//             textAlign: "left"
//         };
//
//         let stateJson = JSON.stringify(this.props.currentState);
//         stateJson = stateJson.replace(/(":)/g, (pat) => {return `${pat}&nbsp;&nbsp;&nbsp;&nbsp;`});
//         stateJson = stateJson.replace(/("todo")|(,"newTodo")/g, (pat) => {return `<br/><br/><span style="color: #f04e2f;">${pat}</span>`});
//         stateJson = stateJson.replace(/}/g, (pat) => {return `<br/><br/>${pat}`});
//
//         return (
//             <div style={style} dangerouslySetInnerHTML={{__html: stateJson}}/>
//         );
//     }
// });

export default Workshop;
