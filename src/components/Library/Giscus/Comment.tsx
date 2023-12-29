"use client";
import { useEffect, useRef } from "react";

export default function Comment() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || ref.current.hasChildNodes()) return;

    const script = document.createElement("script");
    script.async = true;
    script.setAttribute("src", "https://giscus.app/client.js");
    script.setAttribute("data-repo", "mingyeongmo/minmo_blog");
    script.setAttribute("data-repo-id", "R_kgDOJ_b2pw");
    script.setAttribute("data-category", "General");
    script.setAttribute("data-category-id", "DIC_kwDOJ_b2p84CaryX");
    script.setAttribute("data-mapping", "pathname");
    script.setAttribute("data-strict", "0");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "bottom");
    script.setAttribute("data-lang", "ko");
    script.setAttribute("crossorigin", "anonymous");

    if (typeof window !== "undefined") {
      const theme = localStorage.getItem("theme") || "light";
      script.setAttribute("data-theme", theme);
    }

    try {
      ref.current?.appendChild(script);
    } catch (error) {
      console.error("Error while rendering giscus widget.", error);
    }
  }, []);

  const changeGiscusTheme = (theme: string) => {
    const iframe = document.querySelector<HTMLIFrameElement>(
      "iframe.giscus-frame"
    );
    iframe?.contentWindow?.postMessage(
      {
        giscus: {
          setConfig: {
            theme: theme,
          },
        },
      },
      "https://giscus.app"
    );
  };

  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key) {
        console.log(event);
        changeGiscusTheme(event.key);
      }
    };
    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <div style={{ margin: "5rem 0 0" }}>
      <section ref={ref} />
    </div>
  );
}
