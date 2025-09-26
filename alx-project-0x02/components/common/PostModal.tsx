// components/common/PostCard.tsx
import React from "react";
import { PostProps } from "../../interfaces";

const PostCard: React.FC<PostProps> = ({ title, body, userId }) => {
  return (
    <div className="border rounded-lg p-4 shadow-lg">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700">{body}</p>
      <p className="mt-2 text-sm text-gray-500">User ID: {userId}</p>
    </div>
  );
};
export default PostCard;
