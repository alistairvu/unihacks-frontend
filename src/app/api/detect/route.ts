import fs from 'fs';
import { NextResponse, NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  console.log(formData);

  const res = await fetch('https://52b7-34-87-8-183.ap.ngrok.io/', {
    // body: formData,
    method: 'POST',
    headers: {
      'ngrok-skip-browser-warning': 'true',
      'Content-Type': 'multipart/form-data',
    },
  });

  console.log(res.ok);

  if (res.ok) {
    const resJson = await res.json();
    return NextResponse.json(resJson);
  }

  return NextResponse.json({
    success: false,
    error: 'something happened',
  });
}
