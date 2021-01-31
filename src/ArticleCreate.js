import { Component } from 'react';
import { Card, Form } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';


class ArticleCreate extends Component {
    REST_API = "http://localhost:8000/api";
    constructor(props){
        super(props);
        this.state = {
            title: "",
            body: "",
            category_id: null
        };
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleChange(e){
        const target = e.target;
        const field = target.name;
        const value = target.value;

        this.setState({
            [field]: value
        });
    }

    onSubmit(e){
        e.preventDefault();
        const articleDetails = {
            title: this.state.title,
            body: this.state.body,
            category_id: this.state.category_id
        };
        fetch(this.REST_API + '/articles' , {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
                'Accept': 'application/json',
                'Authorization' : 'Bearer ' + this.props.user.api_token
            },
            body: JSON.stringify(articleDetails)
        })
        .then(res => res.json())
        .then(
            (result) => {
                const article = result;
                console.log(article)
                this.props.onSuccess(article);

            },
            (error) => {
                console.log(error);
            }
        )
    }

    render() {
        const categories = this.props.categories;
        return (
            <Card className="mt-2">
                <Card.Body>
                    <Card.Title>Create new article form</Card.Title>
                    <Form onSubmit={this.onSubmit}>
                        <Form.Group controlId="title">
                            <Form.Label>Title</Form.Label>
                            <Form.Control 
                            required
                            name='title'
                            type="text"
                            value={this.state.title}
                            onChange={this.handleChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="body">
                            <Form.Label>Body</Form.Label>
                            <Form.Control 
                            required
                            name='body'
                            type="body"
                            value={this.state.body}
                            onChange={this.handleChange}
                            />
                        </Form.Group>
                        <fieldset>
                            <Form.Group as={Row} controlId="category_id">
                                <Form.Label as="legend" column sm={2}>
                                    Categories
                                </Form.Label>
                                <Col sm={10}>
                                    {categories.map(category => (
                                        <Form.Check
                                        key={category.id}
                                        type="radio"
                                        name="category_id"
                                        value={category.id}
                                        label={category.title}
                                        onChange={this.handleChange}
                                        />
                                    ))}
                                </Col>
                            </Form.Group>
                        </fieldset>
                        <Button variant="primary" type="submit">
                            Store
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        );
    }
}

export default ArticleCreate;