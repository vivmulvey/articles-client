import { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

class ArticleList extends Component {
  render(){
    const articles = this.props.articles;
    return (
      <ListGroup className="mt-2">
        {articles.map(article => (
          <ListGroup.Item key={article.id}> {article.title} </ListGroup.Item>
        ))}
      </ListGroup>
 
    );
  }
}
  

export default ArticleList;
