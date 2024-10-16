import { NextResponse, type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  // Extract important headers and request info
  const userAgent = request.headers.get("user-agent") || "Unknown";
  const forwardedFor = request.headers.get("x-forwarded-for") || "Unavailable";
  const referer = request.headers.get("referer") || "None";
  const contentType = request.headers.get("content-type") || "Not Provided";
  const acceptLanguage = request.headers.get("accept-language") || "Not Provided";
  const host = request.headers.get("host") || "Unknown";

  // Structure the response data
  const responseData = {
    message: "Yeah! APIs are working",
    clientInfo: {
      ip: forwardedFor,
      userAgent,
      referer,
      host,
    },
    headers: {
      contentType,
      acceptLanguage,
    },
    requestMethod: request.method,
  };

  // Return the JSON response with status 200
  return NextResponse.json(responseData, { status: 200 });
}
