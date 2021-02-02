import { Component } from 'react';

import Navigation from './Navigation';
import Articles from './Articles';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import ArticleCreate from './ArticleCreate';
import ArticleView from './ArticleView';
import ArticleEdit from './ArticleEdit';
import ArticleDelete from './ArticleDelete';

import './App.css';
import { Container } from 'react-bootstrap';
import { Switch, Route , withRouter } from 'react-router-dom';


class App extends Component {
  REST_API = "http://localhost:8000/api";
  constructor(props){
    super(props);
    let localUser = null;
    const userString = localStorage.getItem("user");
    if(userString !== null){
      localUser = JSON.parse(userString);
    }
    this.state = {
      user: localUser,
      categories: [],
      articles: [],
      error: null,
      articlesingle: null
    };
    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLogoutSuccess = this.onLogoutSuccess.bind(this);
    this.onCreateSuccess = this.onCreateSuccess.bind(this);
    this.onViewSuccess = this.onViewSuccess.bind(this);
    this.onDeleteSuccess = this.onDeleteSuccess.bind(this);
    this.OnEditSuccess = this.onEditSuccess.bind(this);
    
   
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

  onLoginSuccess(loggedInUser , remember){
    this.setState({
      user: loggedInUser
    });
    if(remember){
      localStorage.setItem("user" , JSON.stringify(loggedInUser));
    }
    this.props.history.push('/home');
 }

  onLogoutSuccess(msg){
    this.setState({
      user: null
    });
   
      localStorage.removeItem("user");
    }

    onCreateSuccess(article){
      this.setState(prevState => ({
        articles: [...prevState.articles, article]
      }));
      this.props.history.push('/home');
    }

    onViewSuccess(article) {
      console.log("success", article);
      this.setState({ 
        articlesingle: article,
      });
    }

    onDeleteSuccess(id) {
      let articles = this.state.articles.filter((article) => article.id !== id);
      this.setState({
        articles: [...articles],
    });
  }

  onEditSuccess(article) {
    let articles = this.state.articles;
    let x = articles.findIndex((selectedArticle) => selectedArticle.id === article.id);
    articles[x] = article;
    this.props.history.push("/home");

  }
 



  render(){
    return (
      <Container>
       <Navigation
        user={this.state.user} 
        onLogoutSuccess={this.onLogoutSuccess}
        />
       <Switch>
         <Route exact path="/">
         <Articles
          user={this.state.user}
          categories={this.state.categories}
          articles={this.state.articles}
          onSuccess={this.onViewSuccess}
         />
         </Route>
         <Route path="/login">
           <Login onSuccess={this.onLoginSuccess} />
         </Route>
         <Route path="/register">
           <Register />
         </Route>
         <Route path="/home">
           <Home 
            user={this.state.user}
            categories={this.state.categories}
            articles={this.state.articles}
            onViewSuccess={this.onViewSuccess}
            onDeleteSuccess={this.onDeleteSuccess}
           />
         </Route>
         <Route path="/articles/create">
           <ArticleCreate 
           user={this.state.user}
           categories={this.state.categories}
           onSuccess={this.onCreateSuccess}
           />
         </Route>
         <Route path="/articles/view/:id">
           <ArticleView 
            articlesingle ={this.state.articlesingle}
           />
         </Route>
         <Route path="/articles/edit/:id">
           { 
           this.state.articlesingle ?
           <ArticleEdit
            user={this.state.user}
            categories={this.state.categories}
            onSuccess={this.onEditSuccess}
            articlesingle={this.state.articlesingle}
           />
           : <h2> Unable to load article</h2>
            }
         </Route>
         <Route path="/articles/delete/:id">
           <ArticleDelete 
           onSuccess={this.onDeleteSuccess}
           />
         </Route>
      </Switch>
     </Container>
    );
  }
}

  

export default withRouter(App);
