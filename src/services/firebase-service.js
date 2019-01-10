import firebase from 'firebase';
import {config} from '../config';

let isInitialized = false;
export const initializeFirebase = () => {
    if (!isInitialized) {
        firebase.initializeApp(config);
        isInitialized = true;
    }
};