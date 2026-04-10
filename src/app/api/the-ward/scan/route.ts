import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  const body = await request.json();

  const upstream = await fetch(
    "https://spookysoftwaresyndicate.com/api/foundry-standard/scan",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }
  );

  const data = await upstream.json();
  return NextResponse.json(data, { status: upstream.status });
}
