import { Component } from 'react';
import Articles from './Articles';


class Home extends Component {
  render(){
    return (
        <Articles
        user={this.props.user}
        categories={this.props.categories}
        articles={this.props.articles}
        onViewSuccess={this.props.onViewSuccess}
        onDeleteSuccess={this.props.onDeleteSuccess}
      />
    );
  }   
}
  

export default Home;
