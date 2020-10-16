import React, { Component } from 'react';
import { Link } from 'react-router-dom'

const items = [{ text: 'Buy grocery', done: true },
{ text: 'Play guitar', done: false },
{ text: 'Romantic dinner', done: false }
];

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showParagraph: false,
            // items: 
        }
    }
    render() {
        const { showParagraph } = this.state;
        return (
            <div className="App">
                <button><Link
                    to={{
                        pathname: "/admin",
                        state: { name: "Admin" }
                    }}
                >Home</Link></button>

                <React.Fragment>
                    <a href="#" onClick={() => this.setState({ showParagraph: !showParagraph })}>Want to buy a new car?</a>
                    {showParagraph && <p>Call +11 22 33 44 now!</p>}
                </React.Fragment>;


                <TodoList
                    items={items}
                    onListClick={(event) =>{alert(`Parrent called`);console.log("List clicked!")}}
                    onItemClick={(item, event) => { console.log(item, event) }}
                />
            </div>

        );
    }

}


const TodoItem = (props) => <li onClick={props.onClick}>{props.item.text}</li>
class TodoList extends React.Component {
    render() {
        const { items, onListClick } = this.props;
        return (<ul onClick={onListClick}>
            {items.map((item, index) =>
                <TodoItem item={item} key={index} onClick={this.handleItemClick.bind(this,
                    item)} />)}
        </ul>);
    }
    handleItemClick(item, event) {
        alert(`clicked ${item.text}`)

        if(item.done){
            event.stopPropagation()
        }
        // Write your code here
    }
}


export default Home;
