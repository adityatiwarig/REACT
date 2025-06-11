import React, { useEffect, useState } from 'react';
import dbService from '../appwrite/config';
import TweetCard from '../components/TweetCard';

function AllTweets() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    dbService.getAllTweets().then((res) => {
      if (res) setTweets(res.documents);
    });
  }, []);

  return (
    <div className="py-10 space-y-4">
      {tweets.map((tweet) => (
        <TweetCard key={tweet.$id} tweet={tweet} />
      ))}
    </div>
  );
}

export default AllTweets;
