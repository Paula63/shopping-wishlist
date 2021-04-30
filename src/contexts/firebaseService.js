import { toast } from 'react-toastify';
import firebase from '../firebase';
import { setUserProfileData } from './firestoreService';

export async function socialLogin(selectedProvider) {
    let provider;

    if(selectedProvider === 'facebook') {
        provider = new firebase.auth.FacebookAuthProvider();
    }

    if (selectedProvider === 'google') {
        provider = new firebase.auth.GoogleAuthProvider();
    }

    try {
        const result = await firebase.auth().signInWithPopup(provider);
        if (result.additionalUserInfo.isNewUser) {
            await setUserProfileData(result.user);
        }
    } catch (error) {
        toast.error(error.message);
    }
}