import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, Select } from "./ui";
import appwriteService from "../appwrite/database";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PostForm({ post }) {
  const {
    register,
    handleSubmit,
  } = useForm({
    defaultValues: {
      content: post?.content || "",
      status: post?.status || "active",
    },
  });

  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  const submit = async (data) => {
    if (post) {
      const updatedPost = await appwriteService.updateTweet(post.$id, {
        content: data.content,
        status: data.status,
      });
      if (updatedPost) navigate(`/post/${updatedPost.$id}`);
    } else {
      const newPost = await appwriteService.createTweet({
        content: data.content,
        status: data.status,
        userId: userData.$id,
        createdAt: new Date().toISOString(),
      });
      if (newPost) navigate(`/post/${newPost.$id}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-xl w-full max-w-2xl mx-auto space-y-6"
    >
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
        {post ? "Edit Post" : "Create a New Post"}
      </h2>
      <textarea
        rows="5"
        placeholder="What's happening?"
        {...register("content", { required: true })}
        className="w-full p-4 border border-gray-300 dark:border-gray-700 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white dark:bg-gray-800 text-black dark:text-white"
      />

      <Select
        label="Status"
        options={["active", "inactive"]}
        className="w-full"
        {...register("status", { required: true })}
      />

      <Button
        type="submit"
        className={`w-full ${post ? "bg-green-500 hover:bg-green-600" : "bg-blue-500 hover:bg-blue-600"} text-white font-semibold py-2 rounded-full transition duration-200`}
      >
        {post ? "Update Post" : "Post"}
      </Button>
    </form>
  );
}