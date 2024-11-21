import { NextResponse } from 'next/server';
import { getPayload } from "payload";
import configPromise from "@payload-config";

export async function GET() {
  try {
    const payload = await getPayload({ config: configPromise });
    const technologies = await payload.find({
      collection: "technologies",
      limit: 100,
      where: {
        and: [
          {
            _status: {
              equals: "published",
            },
          },
          {
            logoLight: {
              exists: true,
            },
          },
        ],
      },
    });

    return NextResponse.json(technologies);
  } catch (error) {
    console.error('Error fetching technologies:', error);
    return NextResponse.json({ error: 'Failed to fetch technologies' }, { status: 500 });
  }
}
