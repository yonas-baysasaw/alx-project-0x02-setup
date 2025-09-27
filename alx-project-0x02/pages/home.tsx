// pages/home.tsx (Further Updated)
import { useState } from "react";
import Header from "../components/layout/Header";
import Card from "../components/common/Card";
import PostModal from "../components/common/PostModal";

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<Array<{ title: string; content: string }>>(
    []
  );

  const handleSave = (newPost: { title: string; content: string }) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div>
      <Header />
      <main className="container mx-auto mt-8 p-4">
        {/* <h1 className="text-3xl font-bold mb-6">Home Page</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-green-500 text-white rounded mb-6"
        >
          Add New Post
        </button>
        {isModalOpen && (
          <PostModal
            onClose={() => setIsModalOpen(false)}
            onSave={handleSave}
          />
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <Card key={index} title={post.title} content={post.content} />
          ))}
        M]</div> */}
        <Card></Card>
      </main>
    </div>
  );
};
export default HomePage;
