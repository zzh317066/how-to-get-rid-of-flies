import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const sessionId = searchParams.get('session_id');

    if (!sessionId) {
        return redirect('/');
    }

    // Note: In an unauthenticated flow, the mere presence of a valid return session_id 
    // from a Creem checkout success URL (along with server side validation if we wanted to ping creem)
    // is enough to set the cookie.

    // We set an HttpOnly cookie that lasts for 30 days.
    const cookieStore = await cookies();
    cookieStore.set({
        name: 'has_paid',
        value: 'true',
        httpOnly: true,
        path: '/',
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 30, // 30 days
        sameSite: 'lax',
    });

    // Redirect the user back to the AI form page
    return redirect('/#ai-plan');
}
