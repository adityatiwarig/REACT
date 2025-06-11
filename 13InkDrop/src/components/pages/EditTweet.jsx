import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import dbService from '../appwrite/config';
import {PostForm} from '../components';

function EditTweet() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    if (slug) {
      dbService.getTweet(slug).then((tweet) => {
        if (tweet) setPost(tweet);
      });
    }
  }, [slug]);

  return (
    <div className="py-10">
      {post && <PostForm post={post} />}
    </div>
  );
}

export default EditTweet;
