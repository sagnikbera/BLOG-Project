import React, { useEffect, useState } from "react";
import service from "../../appwrite/configuration";
import { Container, PostCard } from "..";

function AllPost() {
  const [posts, setPost] = useState([]);
  useEffect(() => {}, []);
  service.getAllPosts([]).then((post) => {
    // console.log(post.documents);

    if (post) {
      setPost(post.documents);
    }
  });

  return (
    <div className="w-full py-8">
      
      <Container>
      <div className='flex flex-wrap'>

        {posts.map((post) => (
          
          <div key={post.$id} className="p-2 w-1/4">
            <PostCard {...post} />
            {console.log(post)}
            
          </div>
        ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPost;
