import { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

class ArticleList extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedArticle: null
    };
    this.onArticleSelected = this.onArticleSelected.bind(this);
  }

  onArticleSelected(e){
    const article = parseInt(e.target.value);
    this.setState({
      selectedArticle: article
    });
  }
  render(){
    const articles = this.props.articles;
    const selectedCategory = this.props.selectedCategory;
    const selectedAuthor = this.props.selectedAuthor;
    const filteredArticles = articles.filter(article => (selectedCategory === null || selectedCategory === article.category_id) 
    &&  (selectedAuthor === null || article.user.name.includes(selectedAuthor))
    );

    return (
      <div>
        {this.props.user && (<div className="mt-2 clearfix">
          <Button className="float-right" as={Link} to="/articles/create" >Create</Button>
         </div>)}
      <ListGroup className="mt-2">
        {!this.props.user && filteredArticles.map(article => (
          <ListGroup.Item key={article.id}> 
            {article.title}
          </ListGroup.Item>
        ))}
         {this.props.user && filteredArticles.map(article => (
          <ListGroup.Item key={article.id}> 
          <Form.Check
            type="radio"
            name="article"
            value={article.id}
            label={article.title}
            onChange={this.onArticleSelected}
            >
          </Form.Check>
          {article.id === this.state.selectedArticle && this.props.user && (
          <div className="float-right">
          <Button className="ml-2 btn-info" as={Link} onClick={() => this.props.onClickView(article.id , this.props.user.api_token )} to={"/articles/view/" + article.id} >View</Button>
          <Button className="ml-2 btn-warning" as={Link} to={"/articles/edit/" + article.id} >Edit</Button>
          {this.props.user.id == article.user_id &&
          <Button className="ml-2 btn-danger" as={Link} onClick={() => this.props.onClickDelete(article.id,this.props.user.api_token)} to={"/articles/delete/" + article.id} >Delete</Button>
          }
          </div>
          )}
          </ListGroup.Item>
        ))}
      </ListGroup>
      </div>
 
    );
  }
}
  

export default ArticleList;
