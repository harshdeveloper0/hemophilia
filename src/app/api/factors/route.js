import { connectDB } from "@/lib/db";
import Factor from "@/models/Factor";
import { NextResponse } from "next/server";
import { Types } from "mongoose";

// GET - Fetch all hospitals
export async function GET() {
  await connectDB();
  const data = await Factor.find();
  return NextResponse.json(data);
}

// POST - Add a new hospital
export async function POST(req) {
  await connectDB();
  const body = await req.json();
  const newFactor = new Factor(body);
  await newFactor.save();
  return NextResponse.json({ success: true, message: "Added successfully" });
}

// PUT - Update hospital data
export async function PUT(req) {
  await connectDB();
  const body = await req.json();
  const { _id, hospitalName, city, factors } = body;

  if (!Types.ObjectId.isValid(_id)) {
    return NextResponse.json({ success: false, message: "Invalid ID" }, { status: 400 });
  }

  const updated = await Factor.findByIdAndUpdate(_id, {
    hospitalName, city, factors
  }, { new: true });

  if (!updated) {
    return NextResponse.json({ success: false, message: "Hospital not found" }, { status: 404 });
  }

  return NextResponse.json({ success: true, message: "Updated successfully", data: updated });
}

// DELETE - Delete a hospital by ID
export async function DELETE(req) {
  await connectDB();
  const { _id } = await req.json();

  if (!Types.ObjectId.isValid(_id)) {
    return NextResponse.json({ success: false, message: "Invalid ID" }, { status: 400 });
  }

  const deleted = await Factor.findByIdAndDelete(_id);

  if (!deleted) {
    return NextResponse.json({ success: false, message: "Hospital not found" }, { status: 404 });
  }

  return NextResponse.json({ success: true, message: "Deleted successfully" });
}
