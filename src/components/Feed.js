import React, { useState, useEffect } from "react";
import "../styles/Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";
import { useDispatch } from "react-redux";
import { getProduct } from "../store/productSlice";
//import { recomposeColor } from "@material-ui/core";

function Feed() {
  const dispatch = useDispatch([]);
  const [posts, setPosts] = useState([]);


  useEffect(() => {
    async function getPost() {
      var myHeaders = new Headers();
      myHeaders.append("projectId", "x57qvgem43cn");

      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      fetch(
        "https://academics.newtonschool.co/api/v1/facebook/post?limit=100",
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => {
          dispatch(getProduct(result));
        // console.log(result)
          setPosts(result)
        })
        .catch((error) => console.log("error", error));

    }
    getPost();
    console.log("kuch v")
  }, []);

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      
      { Array.isArray(posts.data)&&
        posts.data.map((item) => {
          return (
            <div key={item._id} >
              <Post
                //data={item}
                name={item.author.name}
                profilepic={item.author.profileImage}
                massage={item.content}
                image={item.chanel.image}
              />
            </div>
          )
        })
      }

    </div>
  );
}

export default Feed;

