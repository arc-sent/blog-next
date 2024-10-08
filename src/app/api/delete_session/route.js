import { cookies } from 'next/headers';

export function DELETE() {
    cookies().delete('session');
    return new Response('Session deleted', { status: 200 });
}