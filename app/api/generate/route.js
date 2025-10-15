import { NextResponse } from "next/server";

export async function POST(request) {
    const data = await request.json();
    const topic = data.topic;
    console.log("Received data:", data);

    console.log("API endpoint received topic:", topic);

    return NextResponse.json({message:'API received the topic successfully!' });

}