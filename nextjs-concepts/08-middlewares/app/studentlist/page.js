"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const StudentList = () => {
  const users = ["jack", "jordan", "hasan", "john"];

  return (
    <div>
      <h1>StudentList</h1>
      <ul>
        {users.map((user) => (
          <li key={user}>
            <Link href={`/studentlist/${user}`}>{user}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
