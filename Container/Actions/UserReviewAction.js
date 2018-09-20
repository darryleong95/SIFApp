import { CREATE_USER_REVIEW, UPDATE_USER_REVIEW, DELETE_USER_REVIEW } from './types'
import { firebasedb }  from '../Firebase'
import store from '../../store'

// sid - Senior ID
// uid - User ID
export const createUserReview = reviewData => dispatch => {
    
    let reviewKey = reviewData.sid + reviewData.uid

    firebasedb.ref('userReview/' + reviewData.sid +  '/' + reviewData.uid).set({
        feedback: reviewData.feedback,
        rating: reviewData.rating,
        id: reviewKey
        // Date - kiv
    })
    .catch(error => {
        alert(error)
    })
    .then(data => {
        dispatch({
            type: CREATE_USER_REVIEW,
            reviewKey,
            payload: reviewData
        })
    })
}

export const updateUserReview = reviewData => dispatch => {

    let reviewKey = reviewData.sid + reviewData.uid

    firebasedb.ref('userReview/' + reviewData.sid +  '/' + reviewData.uid).set({
        feedback: reviewData.feedback,
        rating: reviewData.rating,
        id: reviewKey
    })
    .catch(error => {
        alert(error)
    })

    return dispatch({
        type: UPDATE_USER_REVIEW,
        reviewKey,
        payload: reviewData
    })
}

export const deleteReview = reviewData => dispatch => {

    let reviewKey = reviewData.sid + reviewData.uid

    var path = firebasedb.ref('userReview/' + reviewData.sid)
    path.child(reviewData.uid).remove()
    .catch(error => {
        alert(error)
    })

    return dispatch({
        type: DELETE_USER_REVIEW,
        reviewKey
    })
}

// export const getReviewByUid = reviewData => dispatch => {
//     firebasedb.ref('reviews/' + reviewData.reviewId)

//     var ref = firebase.database().ref("dinosaurs");
//     ref.orderByKey().endAt("pterodactyl").on("child_added", function(snapshot) {
//     console.log(snapshot.key);
// });
// }
