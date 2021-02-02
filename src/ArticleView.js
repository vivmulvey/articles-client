import { Component } from 'react';
import { Card , Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class ArticleView extends Component {
    render() {
        const article = this.props.articlesingle
        console.log(article)
        if(article)
        return ( 
            <Card className="mt-2">
                <Card.Header> {article.title}</Card.Header>
                <Card.Body>
                  {article.body}
                </Card.Body>
                <Card.Footer>
                    <Button as={Link} to={"/home"} variant="primary" type="submit">
                     Back
                    </Button>
                </Card.Footer>
            </Card>
        );

        return <h2>Unable to load article.</h2>
    }
}

export default ArticleView;