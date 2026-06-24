import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const name = formData.get("name")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const requirements = formData.get("requirements")?.toString() || "";

    if (!name || !email || !requirements) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    console.log("Contact:", { name, email, requirements: requirements.slice(0, 50) });
    return NextResponse.redirect(new URL("/?sent=1", request.url));
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
