import React from 'react'
import { Row, Col, Container, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Post({post}) {
    return (
      <Card className="my-3 p-3 rounded bg-dark">
        <Link
          className="text-decoration-none text-white"
          to={`/post/${post.id}`}
          as="div"
        >
          <Card.Header className="text-left fs-5">
            Posted by {post.user?.username} at {post.created_at}
          </Card.Header>
          <Card.Body>
            <Card.Title className="text-left">
              {" "}
              {post.caption}
            </Card.Title>
          </Card.Body>
        </Link>
        <Card.Footer>
          <Card.Text>
            <Link
              className="text-decoration-none text-white"
              to={`/post/${post.id}`}
              as="div"
            >
              <Button variant="dark">
                <i class="far fa-comment"></i> Comments &emsp;
              </Button>
            </Link>
            <Link className="text-decoration-none text-white" to="/" as="div">
              <Button variant="dark">
                <i class="fas fa-share"></i> Share &emsp;
              </Button>
            </Link>
            <Link className="text-decoration-none text-white" to="/" as="div">
              <Button variant="dark">
                <i class="far fa-bookmark"></i> Bookmark
              </Button>
            </Link>
          </Card.Text>
        </Card.Footer>
      </Card>
    );
}

export default Post
