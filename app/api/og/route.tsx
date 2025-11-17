import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get("title") || "The 99% Reset";
    const subtitle = searchParams.get("subtitle") || "Starve the 1%. Own the Future.";

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#0A0A0A",
            padding: "80px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: 120,
                fontWeight: 900,
                color: "#E11D48",
                marginBottom: 40,
                letterSpacing: "-0.05em",
              }}
            >
              99RESET
            </div>
            <div
              style={{
                fontSize: 48,
                fontWeight: 700,
                color: "#F8FAFC",
                marginBottom: 20,
                maxWidth: 900,
              }}
            >
              {title}
            </div>
            <div
              style={{
                fontSize: 32,
                color: "#D1D5DB",
                maxWidth: 800,
              }}
            >
              {subtitle}
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e) {
    const error = e as Error;
    console.log(`${error.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}

