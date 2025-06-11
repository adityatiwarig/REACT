// File: components/Tweet.jsx
import React, { useState } from "react";
import { Button } from "..";
import dbService from "../appwrite/config";

function Tweet({ tweet }) {
  const [likes, setLikes] = useState(tweet.likes || 0);

  const handleLike = async () => {
    const updated = await dbService.updateTweet(tweet.$id, {
      likes: likes + 1,
    });
    if (updated) {
      setLikes(likes + 1);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow mb-4">
      <p className="text-gray-900 dark:text-white mb-2">{tweet.content}</p>
      <div className="flex justify-between items-center">
        <span className="text-gray-600 dark:text-gray-400">{likes} Likes</span>
        <Button
          className="bg-pink-500 hover:bg-pink-600 text-white px-3 py-1 rounded-full"
          onClick={handleLike}
        >
          Like ❤️
        </Button>
      </div>
    </div>
  );
}

export default Tweet;