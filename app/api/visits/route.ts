import { NextResponse } from 'next/server';

// Simple in-memory store (replace with database in production)
let totalVisits = 0;
const visitors = new Set<string>();

export async function POST() {
  // In a real app, you would get visitorId from the request body
  // const { visitorId } = await request.json();
  
  // For demo purposes, we'll just increment
  totalVisits++;
  
  return NextResponse.json({ 
    totalVisits,
    status: 'success'
  });
}

export const dynamic = 'force-dynamic'; // Important for correct counting