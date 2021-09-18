import {React, useState, useEffect} from 'react'
import Loader from '../components/Loader';
import axios from 'axios'
import { Row, Col, Container, Card, Button } from "react-bootstrap";

function PostScreen({match, history}) {
    
    const [post, setPost] = useState([]);
    
    useEffect(() => {
        async function fetchPosts() {
            const { data } = await axios.get(`/api/${match.params.id}/post`);
            setPost(data);
        }
        fetchPosts();
    }, []);
    console.log("match:", match)
    console.log("hitory",history)
    console.log("post",post)
    return (
      <Container fluid className="p-0" >
        <Card bg="dark" className="my-2">
          <Card.Header className="text-left fs-4">
            Posted by {post.user?.username} at {post.created_at}
          </Card.Header>
          <Card.Body>
            <Card.Title className="text-left fs-3">{post.caption}</Card.Title>
            <Card.Text className="text-left fs-5">{post.description}</Card.Text>
            <Button variant="dark">
              <i class="far fa-comment"></i> Comments &emsp;
            </Button>
            <Button variant="dark">
              <i class="fas fa-share"></i> Share &emsp;
            </Button>
            <Button variant="dark">
              <i class="far fa-bookmark"></i> Bookmark
            </Button>
          </Card.Body>
        </Card>
        {post.comments?.map((comment) => {
            return (
              <Card bg="dark" className="my-2">
                <Card.Header className="fs-5 text-left">
                  Posted by {comment.user?.username} at {post.created_at}
                </Card.Header>
                <Card.Body>
                    <Card.Text className="text-left fs-5" >{comment.comment}</Card.Text>
                    <Button variant="dark">
                        <i class="far fa-comment-dots"></i> Reply &emsp;
                    </Button>
                    <Button variant="dark">
                        <i class="fas fa-share"></i> Share &emsp;
                    </Button>

                </Card.Body>
                  {comment.replies?.map(reply => {
                    return (
                      <Card.Footer className="my-5" >
                        <Card.Title className="text-left fs-5">
                          {" "}
                          Reply by {comment.user?.username} at{" "}
                          {comment.created_at}
                        </Card.Title>
                        <Card.Text className="fs-5 text-le ft" >
                          {reply.reply}
                        </Card.Text>
                      </Card.Footer>
                    );
                   })}
                  
              </Card>
            );
        })}
      </Container>
    );
}

export default PostScreen
