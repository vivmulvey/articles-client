import { Component } from 'react';
import { Card , Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class ArticleView extends Component {
    render() {
        const article = this.props.articlesingle
        console.log(article)
        return ( 
            <Card className="mt-2">
                <Card.Header> </Card.Header>
                <Card.Body>
                  
                </Card.Body>
                <Card.Footer>
                    <Button as={Link} to={"/home"} variant="primary" type="submit">
                     Back
                    </Button>
                </Card.Footer>
            </Card>
        );
    }
}

export default ArticleView;