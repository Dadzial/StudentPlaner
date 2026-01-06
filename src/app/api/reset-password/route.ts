import { NextRequest, NextResponse } from "next/server";
import { passwordReset} from "@/lib/firebase/auth";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { email } = body;

        if (!email) {
            return NextResponse.json(
                { error: "Email is required" },
                { status: 400 }
            );
        }

        await passwordReset(email);

        return NextResponse.json({
            message: "Password reset email sent successfully",
        });
    } catch (err: unknown) {
        let message = "Unknown error";
        if (err instanceof Error) message = err.message;

        return NextResponse.json(
            { error: message },
            { status: 500 }
        );
    }
}