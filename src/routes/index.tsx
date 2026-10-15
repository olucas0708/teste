import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import bodyHtml from "../norte-body.html?raw";

const title = "NORTE Barbearia — Seu estilo, no seu tempo";
const description =
  "NORTE Barbearia — cortes precisos, barba e uma pausa na rotina em Uberlândia, MG. Escolha seu serviço e peça seu horário online.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "theme-color", content: "#f4f1e8" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preload", href: "/assets/hero-barbearia.jpg", as: "image" },
      { rel: "stylesheet", href: "/styles.css" },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    document.documentElement.classList.add("js");
    const s = document.createElement("script");
    s.src = "/script.js";
    document.body.appendChild(s);
    return () => {
      s.remove();
    };
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />;
}
