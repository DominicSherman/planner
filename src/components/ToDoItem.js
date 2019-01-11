import React, {Component} from 'react';
import '../css/components/ToDoItem.css';
import trashIcon from '../assets/trash-icon.png';
import {deleteToDoItem} from '../services/firebase-service';

export default class ToDoItem extends Component {
    render() {
        const {item, index, numItems} = this.props;

        return (
            <div
                className={'ToDoItem-wrapper row spaceBetween'}
                style={index === numItems - 1 ? {border: '0'} : null}
            >
                <p>{item.text}</p>
                <img
                    alt={''}
                    src={trashIcon}
                    className={'ToDo-icon'}
                    onClick={() => deleteToDoItem(item.itemId)}
                />
            </div>
        )
    }
}