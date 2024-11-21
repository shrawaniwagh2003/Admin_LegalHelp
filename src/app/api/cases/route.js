import dbConnect from '../../../../lib/dbConnect'; 
import Case from '../../../models/Cases';
import { NextResponse } from 'next/server';

export async function GET(req) {
  await dbConnect();
  try {
    const cases = await Case.find({});
    return NextResponse.json({ success: true, data: cases });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(req) {
  await dbConnect();
  try {
    const body = await req.json();

    // Validate incoming data
    if (!body.name ) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields.' },
        { status: 400 }
      );
    }

    // Create new case
    const newCase = await Case.create(body);

    // Return success with the created case data
    return NextResponse.json({ success: true, data: newCase });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function DELETE(req) {
  await dbConnect();
  try {
    const { id } = await req.json(); // Assuming ID is passed in the request body for deletion

    if (!id) {
      return NextResponse.json(
        { success: false, error: 'Missing case ID to delete.' },
        { status: 400 }
      );
    }

    // Delete the case by ID
    await Case.findByIdAndDelete(id);

    return NextResponse.json({ success: true, message: 'Case deleted successfully.' });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
