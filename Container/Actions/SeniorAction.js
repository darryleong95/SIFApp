import { CREATE_SENIOR_PROFILE, UPDATE_SENIOR_PROFILE } from './types'
import { auth, firebasedb } from '../Firebase'

export const doSeniorSignUp = seniorData => dispatch => {
    auth.doCreateUserWithEmailAndPassword(seniorData.email, seniorData.password)
    .then(data => {
        firebasedb.ref('seniors/' + data.user.uid).set({
            name: seniorData.name,
            email: seniorData.email,
            contactNo: seniorData.contactNo
        })
        .catch(error => {
            alert(error)
        })
        return dispatch({
            type: CREATE_SENIOR_PROFILE,
            payload: {
                name: seniorData.name,
                email: seniorData.email,
                contactNo: seniorData.contactNo,
                seniorKey: data.user.uid
            }
        })
    })
    .catch(error => {
        alert(error)
    })  
}

export const updateSeniorProfile = seniorData => dispatch => {
    firebasedb.ref('seniors/' + seniorData.seniorKey ).set({
        name: seniorData.name,
        email: seniorData.email,
        contactNo: seniorData.contactNo
    })
    payload = {
        name: seniorData.name,
        email: seniorData.email,
        seniorKey: seniorData.seniorKey,
        contactNo: seniorData.contactNo
    }
    return dispatch({
        type: UPDATE_SENIOR_PROFILE,
        payload
    })
}

