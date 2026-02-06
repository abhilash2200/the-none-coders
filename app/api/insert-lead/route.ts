import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const myHeaders = new Headers();
        const username = 'DwCrmApiUser';
        const password = 'DW_CRMApi@32145@#';
        const credentials = Buffer.from(`${username}:${password}`).toString('base64');

        myHeaders.append("Auth-Api-Key", process.env.NEXT_PUBLIC_AUTH_API_KEY || "");
        myHeaders.append("keyToken", process.env.NEXT_PUBLIC_KEY_TOKEN || "");
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Basic ${credentials}`);

        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/insert_lead_data`,
            {
                method: 'POST',
                headers: myHeaders,
                body: JSON.stringify(body),
                redirect: 'follow',
            }
        );

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error: any) {
        console.error('Lead Capture Error:', error);
        return NextResponse.json(
            { status: 1, message: error.message || 'Something went wrong!' },
            { status: 500 }
        );
    }
}
