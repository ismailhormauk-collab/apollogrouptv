import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Apollo Group TV — Smart Streaming Media Player";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0a0a0a 0%, #16110a 60%, #1a1206 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            width: 120,
            height: 120,
            borderRadius: 28,
            background: "#2563EB",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#ffffff",
            fontSize: 64,
            fontWeight: 900,
            marginBottom: 40,
          }}
        >
          A
        </div>
        <div style={{ display: "flex", fontSize: 64, fontWeight: 900, color: "#ffffff" }}>
          <span style={{ color: "#2563EB", marginRight: 18 }}>Apollo</span>
          <span>Group TV</span>
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#9ca3af", marginTop: 20 }}>
          Smart Streaming Media Player
        </div>
      </div>
    ),
    { ...size }
  );
}
