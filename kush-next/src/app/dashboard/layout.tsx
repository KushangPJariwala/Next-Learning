import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  users: ReactNode;
  products: ReactNode;
  comments: ReactNode;
};

export default function DashboardLayout({
  children,
  users,
  products,
  comments,
}: Props) {
  return (
    <div>
      <div>{children}</div>
      <div className="flex flex-col gap-5 h-full border-2 border-red-500 dashboard-items">
        <div className="user-comment">
          <div className=" col-span-2 flex justify-center items-center users">
            {users}
          </div>
          <div className="flex justify-center items-center comments">
            {comments}
          </div>
        </div>
        <div className="border-2 border-yellow-600 flex justify-center items-center">
          {products}
        </div>
      </div>
    </div>
  );
}
