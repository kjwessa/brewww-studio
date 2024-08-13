import { NextResponse } from "next/server";

export async function GET() {
  await fetch(`https://${process.env.VERCEL_URL}/admin`);
  return NextResponse.json({ ok: true });
}
