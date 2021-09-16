import {React, useEffect, useState} from 'react'
import axios from 'axios'
import { Row, Col, Container } from "react-bootstrap";
import Post from '../components/Post';

function HomeScreen() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function fetchPosts(){
            const { data } = await axios.get(`/api/`)
            setPosts(data)
        }
        fetchPosts()
    }, [])

    console.log("data: ", posts)
    return (
        <Container fluid>
            <h1>mid</h1>
             {posts.map(post => {
                return (
                    <Post key={post.id} post={post} />
                )
            })} 
        </Container>
    )
}

export default HomeScreen
