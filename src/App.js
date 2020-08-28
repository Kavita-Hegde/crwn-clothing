import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'; 

import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

import './App.css';
import { auth,createUserProfileDocument } from './firebase/firebase.util';

import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './component/header/header.component';
import CheckOutPage from './pages/checkout/checkout.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

class App extends React.Component {

  unSubscribeFromAuth = null;

  componentDidMount(){

    const {setCurrentUser} = this.props;

    this.unSubscribeFromAuth= auth.onAuthStateChanged(async userAuth =>{
      
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot =>{
            setCurrentUser ({
              id: snapShot.id,
              ...snapShot.data()
             });
        });
      }else{
        
        setCurrentUser( userAuth);
      }
    })
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }



  render(){ 
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact  path='/' component={HomePage}></Route>
          <Route  path='/shop' component={ShopPage}></Route>
          <Route exact path='/signIn' render={ () =>
            this.props.currentUser 
            ?( <Redirect to='/'/>)
            :(<SignInAndSignUpPage/>)
            }>
          </Route>
          <Route exact path='/checkout' component={CheckOutPage}></Route>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector ({
  currentUser : selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App); 
