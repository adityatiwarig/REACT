import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import dbService from '../appwrite/config';
import TweetCard from '../components/TweetCard';

function Tweet() {
  const [tweet, setTweet] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    if (slug) {
      dbService.getTweet(slug).then((res) => {
        if (res) setTweet(res);
      });
    }
  }, [slug]);

  return (
    <div className="py-10">
      {tweet && <TweetCard tweet={tweet} />}
    </div>
  );
}

export default Tweet;
