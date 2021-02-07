import React from 'react'
import Header from './components/header/Header'
import SignIn from './components/auth/SignIn';
import { Switch, Route } from 'react-router-dom'
import Sidebar from './components/sidebar'
import Contacts from './pages/Contacts'
import Posts from './pages/Posts'
import AddContact from './pages/AddContact'
import firebase from './firebaseConfig'
import './App.css'

class App extends React.Component {
  state = {
    isSignedIn: false
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ isSignedIn: true });
      } else {
        this.setState({ isSignedIn: false });
      }
    });
  }
  renderSignIn() {
    return <SignIn />
  }
  render() {
    const { isSignedIn } = this.state;

    if (!isSignedIn) {
      return <SignIn />
    }

    return (
      <>
        <Sidebar />
        <Header />
        <div className='content'>
          <Switch>
            <Route path='/' exact component={Contacts} />
            <Route path='/addContact' component={AddContact} />
            <Route path='/posts' component={Posts} />
          </Switch>
        </div>
      </>
    )
  }
}

export default App
