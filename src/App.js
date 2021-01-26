import { Component } from 'react';

import Navigation from './Navigation';
import Articles from './Articles';
import Login from './Login';
import Register from './Register';

import './App.css';
import { Container } from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';


class App extends Component {
  REST_API = "http://localhost:8000/api";
  constructor(props){
    super(props);
    this.state = {
      user: null,
      categories: [],
      articles: [],
      error: null
    };
    this.onLoginSuccess = this.onLoginSuccess.bind(this);
  }

  componentDidMount(){

      fetch(this.REST_API + "/articles")
      .then(res => res.json())
      .then(
          (result) => {
              this.setState({
                articles: result
              });
            },
          (error) => {
              this.setState({
                error: error
              });
          }
      );
      fetch(this.REST_API + "/categories")
      .then(res => res.json())
      .then(
          (result) => {
              this.setState({
                categories: result
              });
            },
          (error) => {
              this.setState({
                error: error
              });
          }
      );
  }

  onLoginSuccess(loggedInUser){
    this.setState({
      user: loggedInUser
    });
 }

  render(){
    return (
      <Container>
       <Navigation user={this.state.user} />
       <Switch>
         <Route exact path="/">
          <Articles
            categories={this.state.categories}
            articles={this.state.articles}
          />
         </Route>
         <Route path="/login">
           <Login onSuccess={this.onLoginSuccess} />
         </Route>
         <Route path="/register">
           <Register />
         </Route>
         <Route path="/home">
           <Home />
         </Route>
       </Switch>
     </Container>
    );
  }
}

function Home(){
    return (
      <div>
        <h2>Home</h2>
      </div>
    );
  }
  

export default App;
