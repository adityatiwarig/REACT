import React, { useState } from "react";
import { useDispatch } from "react-redux";
import appwriteService from "../appwrite/database"; 
import { Button } from "./ui";

function CreateTweet() {
  const [tweet, setTweet] = useState("");
  const dispatch = useDispatch();

  const handlePost = async () => {
    if (tweet.trim().length > 0) {
      await appwriteService.createTweet({ content: tweet }); 
      setTweet(""); // Reset field
    }
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow mb-4">
      <textarea
        rows="3"
        placeholder="What's happening?"
        className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none resize-none"
        value={tweet}
        onChange={(e) => setTweet(e.target.value)}
      />
      <div className="flex justify-end mt-2">
        <Button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-full"
          onClick={handlePost}
        >
          Post
        </Button>
      </div>
    </div>
  );
}

export default CreateTweet;
