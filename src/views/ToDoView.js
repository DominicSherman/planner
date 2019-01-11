import React, {Component} from 'react';
import '../css/views/ToDoView.css';
import {insertToDoItem} from '../services/firebase-service';
import ToDoItem from '../components/ToDoItem';

export default class ToDoView extends Component {
    componentDidMount() {
        const input = document.getElementById('newItemInput');

        input.addEventListener('keyup', (event) => {
            event.preventDefault();
            if (event.key === 'Enter') {
                this.handleSubmit()
            }
        });

        this.props.actions.setToDoItems();
    }

    handleSubmit = () => {
        const {actions: {setCurrEditingItem}, currEditingItem} = this.props;

        insertToDoItem(currEditingItem);
        setCurrEditingItem(null);
    };

    getValue = () => this.props.currEditingItem ? this.props.currEditingItem : '';

    render() {
        const {actions: {setCurrEditingItem}, toDoItems} = this.props;

        return (
            <div className={'column'}>
                <div className={'ToDo-wrapper center'}>
                    <div className={'ToDo-inputWrapper row'}>
                        <input
                            className={'ToDo-input'}
                            id={'newItemInput'}
                            type={'text'}
                            value={this.getValue()}
                            onChange={(event) => setCurrEditingItem(event.target.value)}
                            placeholder={'New item'}
                        />
                    </div>
                </div>
                <div className={'ToDo-itemsWrapper'}>
                    {
                        toDoItems.map((item, index) =>
                            <ToDoItem
                                numItems={toDoItems.length}
                                item={item}
                                index={index}
                            />
                        )
                    }
                </div>
            </div>
        );
    }
}