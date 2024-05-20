import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({ name: "Jack", age: 30, location: "pk" });
}
