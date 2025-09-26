// components/common/UserCard.tsx
import React from "react";
import { UserProps } from "../../interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address, company }) => {
  return (
    <div className="border rounded-lg p-4 shadow-lg">
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-gray-700 mb-1">Email: {email}</p>
      <p className="text-gray-700 mb-1">Company: {company.name}</p>
      <p className="text-gray-700">
        Address: {address.street}, {address.suite}, {address.city}
      </p>
    </div>
  );
};
export default UserCard;
