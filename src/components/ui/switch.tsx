import LucideMonitor from "../icons/LucideMonitor";
import LucideSmartphone from "../icons/LucideSmartphone";
import { navParams } from "@/lib/client";
import { useEffect, useState } from "react";

export default function Switch() {
  const [searchParams, setSearchParams] = useState<URLSearchParams>(
    new URLSearchParams("")
  );
  const [view, setView] = useState("");
  useEffect(() => {
    setSearchParams(new URLSearchParams(window?.location?.search));
    setView(searchParams.get("view") || "mjml");
  }, []);

  return (
    <div className="join bg-base rounded-lg">
      <a
        onClick={() => setView("desktop")}
        href={navParams(searchParams, "view", "desktop")}
        className={`${view !== "mobile" ? "btn-primary" : ""} btn-join btn btn-sm rounded-l-lg`}
      >
        <LucideMonitor className="font-semibold size-5" />
        Desktop
      </a>
      <a
        onClick={() => setView("mobile")}
        href={navParams(searchParams, "view", "mobile")}
        className={`${view === "mobile" ? "btn-primary" : ""} btn-join btn btn-sm rounded-r-lg`}
      >
        <LucideSmartphone className="font-semibold size-5" />
        Mobile
      </a>
    </div>
  );
}
