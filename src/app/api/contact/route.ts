import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const name = formData.get("name")?.toString() || "";
  const email = formData.get("email")?.toString() || "";
  const requirements = formData.get("requirements")?.toString() || "";

  if (!name || !email || !requirements) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  console.log("Contact:", { name, email });
  return NextResponse.json({ sent: true, name, email });
}
