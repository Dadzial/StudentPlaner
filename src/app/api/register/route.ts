import { NextRequest, NextResponse } from "next/server";
import { registerUser } from "@/lib/firebase/auth";

export async function POST(req:NextRequest) {
    try {
        const body = await  req.json();
        const {email , password} = body;

        if (!email || !password) {
            return NextResponse.json({ error: "Email and password are required" }, { status: 400 });
        }

        const user = await registerUser(email, password);

        return NextResponse.json({ message: "User registered successfully", uid: user.uid });
    } catch (err: unknown) {
        let message = "Unknown error";
        if (err instanceof Error) message = err.message;
        return NextResponse.json({ error: message }, { status: 500 });
    }
}