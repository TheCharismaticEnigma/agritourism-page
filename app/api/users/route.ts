import { UserDetails } from '@/app/(Footer)/EnquiryForm';
import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

// Edge Cases: Invalid body structure | Already existing title
export async function POST(request: NextRequest) {
  try {
    const user: UserDetails = await request.json();

    await axios.post(process.env.APPSCRIPT_URI!, user);

    return NextResponse.json(
      {
        success: true,
        message: 'New User added successfully.',
        user: user,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: 'Something went wrong.',
      },
      { status: 500 }
    );
  }
}
