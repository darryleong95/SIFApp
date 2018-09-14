import { auth, database }  from '../../Firebase'

export default function handleSignUp(props) {
    auth.doCreateUserWithEmailAndPassword(props.email, props.password)
    .then((data) => {
        this.setState({ ...this.state });
        alert('Success')
        // Also create new User entry
        database.ref('users/' + data.user.uid).set({
            name: props.name,
            email: data.user.email
        })
        console.log(data.user)


    })
    .catch(error => {
        alert(error)
    });
}