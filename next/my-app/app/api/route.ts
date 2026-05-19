import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest): Promise<NextResponse> {

    console.log("API route called");
    return NextResponse.json({ message: "Hello from the API route!" });

}