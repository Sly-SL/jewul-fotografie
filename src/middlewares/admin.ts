import {NextRequest, NextResponse} from "next/server";
import {shortcuts} from "@/shared/consts/enums/shortcuts.enum";

export function AdminMiddleware(req: NextRequest) {
    const isAdmin = req.cookies.get("sessionId")

    if (!isAdmin && req.nextUrl.pathname.startsWith("/admin")) {
        return NextResponse.redirect(new URL(shortcuts.pnf))
    }
}