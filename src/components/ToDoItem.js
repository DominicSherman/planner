import React, {Component} from 'react';
import '../css/components/ToDoItem.css';
import trashIcon from '../assets/trash-icon.png';
import {deleteToDoItem} from '../services/firebase-service';
import {FiTrash2} from 'react-icons/fi';

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
                    <FiTrash2
                        color={'red'}
                        size={25}
                    />
                </div>
            </div>
        )
    }
}