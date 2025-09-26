// pages/posts.tsx (Updated)
import React, { useState, useEffect } from "react";
import Header from "../components/layout/Header";
import PostCard from "../components/common/PostCard";
import { PostProps } from "../interfaces";

const PostsPage = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data: PostProps[] = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div>
        <Header />
        <main className="container mx-auto mt-8 p-4">
          <p>Loading posts...</p>
        </main>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main className="container mx-auto mt-8 p-4">
        <h1 className="text-3xl font-bold mb-6">Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>
      </main>
    </div>
  );
};
export default PostsPage;
