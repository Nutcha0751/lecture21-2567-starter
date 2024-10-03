// Get data from "Database file"
import { NextResponse } from "next/server";
import { getPrisma } from "@lib/getPrisma";

export const GET = async () => {
  const prisma = getPrisma();
  
  const courses = await prisma.course.findMany(); //ได้ผลลัพธ์มาเป็น array

    return NextResponse.json({
      ok: true,
      courses: courses
    });
};