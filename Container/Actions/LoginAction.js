import { LOGIN_TYPE, DO_USER_LOGIN, DO_SENIOR_LOGIN } from './types'
import store from '../../store'
import { auth, firebasedb }  from '../Firebase'

export const setLoginType = loginType => dispatch => {
    // create a senior key
    payload = {
        loginType
    }
    return dispatch({
        type: LOGIN_TYPE,
        loginType 
    })
}

export const doUserLogin = loginData => dispatch => {
    console.log(loginData)
    auth.doSignInWithEmailAndPassword(loginData.email, loginData.password)
    .catch(error => alert(error))
    .then(data => {
        firebasedb.ref('users/' + data.user.uid).on('value', function(snapshot) {
            console.log(snapshot.val())
            return dispatch({
                type: DO_USER_LOGIN,
                payload: {
                    name: snapshot.val().name,
                    email: snapshot.val().email,
                    uid: data.user.uid,
                    firstTime: false,
                }
            })
        });
    })
};

  export const doSeniorLogin = loginData => dispatch => {
    // auth.doSignInWithEmailAndPassword(loginData.email, loginData.password)
    // .catch(error => alert(error))
    // .then(data => {
    //     console.log("hello")
    //     console.log(data.user.uid)
    //     while(data.user.uid != null){
    //         console.log('domo')
    //         firebasedb.ref('seniors/' + data.user.uid).once('value')
    //             .then(function(){
    //             console.log('is anything getting here')
    //         })
    //         break
    //     }
    // })
    var ref = firebasedb.ref("users/ada");
    ref.once("value")
    .then(function(snapshot) {
        var key = snapshot.key; // "ada"
        console.log(key)
        var childKey = snapshot.child("name/last").key; // "last"
        console.log(childKey)
    });
    // var ref1 = firebasedb.ref("seniors")
    // ref1.once("value")
    // .then(function(snapshot){
    //     var key = snapshot.key; // "ada"
    //     console.log(key)
    // })
    // .catch(error => alert(error))
    
  }