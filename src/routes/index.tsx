import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ivory Vows — Luxury Wedding Invitations & Stationery" },
      { name: "description", content: "Ivory Vows crafts premium digital wedding invitations and bespoke stationery — elegant, modern, and made to be remembered." },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    window.location.replace("/ivory-vows/index.html");
  }, []);
  return (
    <div style={{ minHeight: "100vh", display: "grid", placeItems: "center", background: "#F8F3EE", fontFamily: "serif", color: "#5B4033" }}>
      <p>Loading Ivory Vows…</p>
    </div>
  );
}
