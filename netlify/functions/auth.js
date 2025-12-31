import fetch from "node-fetch";

const API_URL = "https://api.github.com";
const GITHUB_CLIENT_ID = process.env.OAUTH_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.OAUTH_CLIENT_SECRET;

export default async (req, context) => {
  if (req.method === "POST") {
    return handleCallback(req);
  }
  return new Response("Method Not Allowed", { status: 405 });
};

async function handleCallback(req) {
  const { code } = req.body ? JSON.parse(req.body) : {};

  if (!code) {
    return new Response(JSON.stringify({ error: "No code provided" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    // Exchange code for access token
    const tokenResponse = await fetch(`${API_URL}/login/oauth/access_token`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        client_id: GITHUB_CLIENT_ID,
        client_secret: GITHUB_CLIENT_SECRET,
        code,
      }),
    });

    const tokenData = await tokenResponse.json();

    if (tokenData.error) {
      return new Response(JSON.stringify({ error: tokenData.error }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(
      JSON.stringify({
        token: tokenData.access_token,
        provider: "github",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
