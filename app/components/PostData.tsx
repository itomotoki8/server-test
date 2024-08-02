import React from "react";
import { User } from "../page";

interface Props {
  data: User[];
}

const PostData = ({ data }: Props) => {
  return (
    <div className="flex items-center justify-center flex-col gap-2">
      {data && data.map((e: User) => <p key={e.id}>{e.name}</p>)}
    </div>
  );
};

export default PostData;
