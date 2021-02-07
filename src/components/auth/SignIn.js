import React, { PureComponent } from 'react';
import firebase from '../../firebaseConfig';
// User that is registered and can sign in: test@test.ge/Option123

export class SignIn extends PureComponent {
    state = {
        email: '',
        password: ''
    };

    onSignIn = (e) => {
        e.preventDefault();

        const { email, password } = this.state;

        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch((error) => {
                alert(error.message);
                this.setState({ email: '', password: '' });
            });
    }

    renderForm() {
        const { email, password } = this.state;

        return (
            <form onSubmit={ this.onSignIn }>
                <input type="text" name="email" value={ email } onChange={(e) => this.setState({email: e.target.value}) } />
                <input type="password" name="password" value={ password } onChange={(e) => this.setState({password: e.target.value})}/>
                <button type="submit" onClick={ this.onSignIn }>Sign In</button>
            </form>
        )
    }

    render() {
        return this.renderForm();
    }
}

export default SignIn;
