import { NextRequest, NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function GET() {
  return NextResponse.json({
    count: "unknown",
    message: "Check Vercel function logs for email list — search for [fillforward subscriber]",
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const email: string = (body.email || "").trim().toLowerCase();
    const source: string = body.source || "fillforward-site";

    if (!email || !EMAIL_RE.test(email)) {
      return NextResponse.json(
        { error: "Valid email required" },
        { status: 400 }
      );
    }

    console.log(
      `[fillforward subscriber] ${new Date().toISOString()} | email=${email} | source=${source}`
    );

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
