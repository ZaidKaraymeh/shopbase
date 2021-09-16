import React from 'react'
import { Row, Col, Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Post({post}) {
    return (
      <Card className="my-3 p-3 rounded bg-dark">
        <Link
          className="text-decoration-none text-light"
          to={`/post/${post._id}`}
          as="div"
        >
          <Card.Body>
            <Card.Title>
              {" "}
              {post.name} by {post.brand}
            </Card.Title>
          </Card.Body>
        </Link>
        <Card.Footer>
          <Card.Text>
            <i class="far fa-comment"></i> Comments &emsp;
            <i class="fas fa-share"></i> Share &emsp;
            <i class="far fa-bookmark"></i> Bookmark
          </Card.Text>
        </Card.Footer>
      </Card>
    );
}

export default Post
