import React, {Component} from 'react';
import '../css/components/ToDoItem.css';

export default class ToDoItem extends Component {
    render() {
        const {item, index, numItems} = this.props;

        return (
            <div
                className={'ToDoItem-wrapper column center'}
                style={index === numItems -1 ? {border: '0'} : null}
            >
                <p>{item.text}</p>
            </div>
        )
    }
}