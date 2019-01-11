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
                <div className={'ToDoItem-textWrapper'}>
                    <p>{item.text}</p>
                </div>
                <div
                    className={'ToDoItem-iconWrapper center'}
                    onClick={() => deleteToDoItem(item.itemId)}
                >
                    <img
                        alt={''}
                        src={trashIcon}
                        className={'ToDoItem-icon'}
                    />
                </div>
            </div>
        )
    }
}