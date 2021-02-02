import { Component } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { Card, Form } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


class ArticleEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.articlesingle.title,
      body: this.props.articlesingle.body,
      category_id: this.props.articlesingle.category_id,
      article_id: this.props.articlesingle.id,
    };
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange = (e) => {
    const target = e.target;
    const field = target.name;
    const value = target.value;

    this.setState({
      [field]: value,
    });
  };

  handleSelectChange = (id) => {
    this.setState({
      category_id: id,
    });
  };

  onSubmit(e ) {
    e.preventDefault(); 
    const articleDetails = {
      title: this.state.title,
      body: this.state.body,
      category_id: this.state.category_id,

    };
    fetch("http://localhost:8000/api/articles/" + this.state.article_id, {
      method: "PUT",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer " + this.props.user.api_token,
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(articleDetails),
    })
      .then((res) => res.json()) 
      .then(
        (result) => {
          const article = result;
          this.props.onSuccess(article); 
        },
        (error) => {
          console.log(error);
        }
      );
  }
  render() {

    const categories = this.props.categories;

    return (
      <Card className="mt-2">
        <Card.Body>
          <Card.Title>Create New Article </Card.Title>
          <Form onSubmit={this.onSubmit}>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                required
                name="title"
                type="text"
                value={this.state.title}
                onChange={this.handleChange}
              />
             </Form.Group>
             <Form.Group controlId="body">
              <Form.Label>
                  Body
              </Form.Label>
              <Form.Control
                required
                as="textarea"
                name="body"
                type="body"
                value={this.state.body}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group as={Row} controlId="category_id">
              <Form.Label as="legend" column sm={2}>
                Categories
              </Form.Label>
              <Col sm={10}>
                {categories.map((category) => {
                  return (
                    <Form.Check
                      key={category.id}
                      type="radio"
                      name="category_id"
                      checked={category.id === this.state.category_id}
                      label={category.title}
                      value={this.state.category_id}
                      onChange={() => this.handleSelectChange(category.id)}
                    />
                  );
                })}
              </Col>
            </Form.Group>
            <Button as={Link} to={"/home"} variant="primary" type="submit">
              Back
            </Button>
            <Button  className="float-right" variant="primary" type="submit">
              Submit 
            </Button>
          </Form>
        </Card.Body>
      </Card>
    );
  }
}

export default ArticleEdit;