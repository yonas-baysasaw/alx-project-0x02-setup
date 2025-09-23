// components/common/Card.tsx
import React from "react";
import { CardProps } from "../../interfaces";

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="border rounded-lg p-4 shadow-lg">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p>{content}</p>
    </div>
  );
};
export default Card;
