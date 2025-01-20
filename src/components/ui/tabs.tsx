import { navParams } from "@/lib/client";
import { useEffect, useState } from "react";

export default function Tabs({ active = "mjml" }: { active: string }) {
  const [searchParams, setSearchParams] = useState<URLSearchParams>(
    new URLSearchParams("")
  );
  const [activeTab, setActiveTab] = useState(active);
  useEffect(() => {
    setSearchParams(new URLSearchParams(window?.location?.search));
    setActiveTab(searchParams.get("active-tab") || "mjml");
  }, []);
  return (
    <div className="join">
      <a
        onClick={() => setActiveTab("mjml")}
        href={navParams(searchParams, "active-tab", "mjml")}
        className={`btn join-item ${activeTab === "mjml" ? "btn-primary" : "btn-soft"}`}
      >
        Mjml
      </a>
      <a
        onClick={() => setActiveTab("js")}
        href={navParams(searchParams, "active-tab", "js")}
        className={`btn join-item ${activeTab === "js" ? "btn-primary" : "btn-soft"}`}
      >
        js
      </a>
      <a
        onClick={() => setActiveTab("react")}
        href={navParams(searchParams, "active-tab", "react")}
        className={`btn join-item ${activeTab === "react" ? "btn-primary" : "btn-soft"}`}
      >
        React
      </a>
    </div>
  );
}
