import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const json = await request.json();

  setTimeout(() => {}, 2000);

  return NextResponse.json({
    success: true,
    vegetable: 'capsicum',
  });
}
