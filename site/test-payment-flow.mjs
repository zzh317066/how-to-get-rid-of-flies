// test-payment-flow.mjs
import http from 'http';

const BASE_URL = 'http://localhost:3002';

async function testCallbackCookie() {
    console.log("1. Testing Checkout Callback Cookie...");
    const res = await fetch(`${BASE_URL}/api/checkout/callback?session_id=test_123`, {
        redirect: 'manual'
    });

    if (res.status !== 307 && res.status !== 308 && res.status !== 302 && res.status !== 303) {
        console.error(`❌ Expected redirect status, got ${res.status}`);
        return false;
    }

    const setCookie = res.headers.get('set-cookie');
    if (!setCookie || !setCookie.includes('has_paid=true') || !setCookie.includes('HttpOnly')) {
        console.error(`❌ Cookie not set correctly: ${setCookie}`);
        return false;
    }

    console.log("✅ Cookie correctly set up on checkout success!");
    return setCookie.split(';')[0]; // Return the raw has_paid=true cookie
}

async function testServerAction(cookie) {
    console.log("\n2. Testing AI Server Action Protection...");

    // Test without cookie
    const payload = [{
        flyType: "Fruit Fly", area: "Kitchen", severity: "few", petsOrKids: "None", chemicalPreference: "None", extraNotes: ""
    }];

    try {
        const reqWithoutCookie = await fetch(`${BASE_URL}/personalized-plan`, {
            method: 'POST',
            headers: {
                'Next-Action': 'some-action-id', // We don't know the exact ID, but we can hit an API route if we made one.
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
        // Testing server actions via fetch without the Next-Action ID is hard.
        console.log("Skipping direct Server Action HTTP test as Next-Action ID is ephemeral.");
    } catch (e) {
        console.log("Skipped.");
    }

    return true;
}

async function run() {
    const cookie = await testCallbackCookie();
    if (cookie) {
        await testServerAction(cookie);
    }
}

run();
