import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { dataFromSnapshot } from "../firebase/firestoreService";
import { asyncActionError, asyncActionFinish, asyncActionStart } from "../store/asyncReducer";

export default function useFirestoreDoc({query, data, deps}) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(asyncActionStart());
        const unsubscribe = query().onSnapshot(
            snapshot => {
                if (!snapshot.exists){
                    dispatch(asyncActionError({code: 'not_found', message: 'Could not find document'}));
                    return;
                }
                data(dataFromSnapshot(snapshot));
                dispatch(asyncActionFinish());
            },
            error => dispatch(asyncActionError())
        );
        return () => {
            unsubscribe()
        }
    }, deps) // eslint-disable-line react-hooks/exhaustive-deps
}
