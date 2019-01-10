import firebase from 'firebase';
import uuid from 'uuid';
import moment from 'moment';

import {config} from '../config';
import {ITEM_DATE_FORMAT} from './moment-service';

let isInitialized = false;

export const initializeFirebase = () => {
    if (!isInitialized) {
        firebase.initializeApp(config);
        isInitialized = true;
    }
};

export const insertToDoItem = async (text) => {
    const itemId = uuid.v4();

    await firebase.database().ref(`to_do/${itemId}`).set({
        itemId,
        text,
        time: moment().format(ITEM_DATE_FORMAT)
    });
};

export const getToDoItems = () => firebase.database().ref('to_do');