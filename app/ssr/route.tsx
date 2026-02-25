import { NextResponse } from 'next/server';
import { headers } from 'next/headers';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET () {
headers () ;

    const currentTime= new Date(). toLocaleString();
    console. log('Server time:', currentTime);

    return NextResponse. json ({
        message: `Current time is: ${currentTime}`,
        ok: true
    }, {
        headers: {
            'Cache-Control': 'no-store, max-age=0',
        }
    });
} 