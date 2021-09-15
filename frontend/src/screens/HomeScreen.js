import {React, useEffect, useState} from 'react'
import axios from 'axios'
import { Row, Col, Container } from "react-bootstrap";

function HomeScreen() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function fetchPosts(){
            const { data } = await axios.get(`http://127.0.0.1:8000/api/`)
            setPosts(data)
        }
        fetchPosts()
    }, [])

    console.log("data: ", posts)
    return (
        <Container fluid>
             {posts.map(post => {
                return (
                <>
                    {post.name}
                    <img src={`${post.image}`} />
                </>
                )
            })} 
        </Container>
    )
}

export default HomeScreen
