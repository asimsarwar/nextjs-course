import { users } from "@/app/util/db";
import { NextResponse } from "next/server";
import fs from "fs";

// 2. Get Specific User
export async function GET(_, res) {
  const { id } = await res.params;
  const user = users.filter((u) => u.id === id);
  return NextResponse.json({ user });
}

// 6. Delete User
export async function DELETE(req, res) {
  const { id } = await res.params;

  // Find the index of the user to delete in the users array
  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex === -1) {
    return NextResponse.json({ result: "User not found" }, { status: 404 });
  }

  // Remove the user from the users array
  users.splice(userIndex, 1);

  // Update the user data in the db.js file
  updateUserData();

  return NextResponse.json({ success: "User Successfully Deleted" });
}

function updateUserData() {
  const updatedData = `export const users = ${JSON.stringify(users, null, 2)};`;
  fs.writeFileSync("./app/util/db.js", updatedData, "utf-8");
}
