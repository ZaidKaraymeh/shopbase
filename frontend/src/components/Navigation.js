import {React, useState, useEffect} from 'react'
import axios from 'axios'

import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
function Navigation() {
      const [is_authenticated, setIs_Authenticated] = useState([]);

      useEffect(() => {
        async function fetchPosts() {
          const { data } = await axios.get(`/api/`);
          setIs_Authenticated(data.is_authenticated);
        }
        fetchPosts();
      }, []);

      console.log("Authenticated: ", is_authenticated)
    return (
      <Nav fill variant="tabs" className="flex-column">
        <Nav.Item className="nav-link-cus p-3">
          <Link className="text-decoration-none text-white" to="/" as="div">
            <i class="fas fa-home"></i> Home
          </Link>
        </Nav.Item>
        <Nav.Item className="nav-link-cus p-3">
          <Link
            className="text-decoration-none text-white"
            to={`/pos`}
            as="div"
          >
            <i class="far fa-compass"></i> Explore
          </Link>
        </Nav.Item>
        <Nav.Item className="nav-link-cus p-3">
          <Link
            className="text-decoration-none text-white"
            to={`/pos`}
            as="div"
          >
            <i class="far fa-bell"></i> Notifications
          </Link>
        </Nav.Item>
        <Nav.Item className="nav-link-cus p-3">
          <Link
            className="text-decoration-none text-white "
            to={`/pos`}
            as="div"
          >
            <i class="far fa-envelope"></i> Messages
          </Link>
        </Nav.Item>
        <Nav.Item className="nav-link-cus p-3">
          <Link
            className="text-decoration-none text-white"
            to={`/pos`}
            as="div"
          >
            <i class="far fa-bookmark"></i> Bookmarks
          </Link>
        </Nav.Item>

        {is_authenticated ?
        <Nav.Item className="nav-link-cus p-3">
          <Link
            className="text-decoration-none text-white"
            to={`/pos`}
            as="div"
          >
            <i class="far fa-user"></i> Profile
          </Link>
        </Nav.Item>  
        :

        <Nav.Item className="nav-link-cus p-3">
          <Link
            className="text-decoration-none text-white"
            to={`/pos`}
            as="div"
          >
            <i class="fas fa-sign-in-alt"></i> Login
          </Link>
        </Nav.Item>}
      </Nav>


    );
}

export default Navigation
