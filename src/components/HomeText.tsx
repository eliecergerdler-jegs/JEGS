import { Fragment } from "react";

/** Render the limited emphasis used in the approved copy without injecting HTML. */
export function HomeText({ text }: { text: string }) {
  return <>{text.split(/(<br>|<span class="lime">.*?<\/span>|<strong>.*?<\/strong>)/g).map((part, index) => {
    if (part === "<br>") return <br key={index} />;
    if (part.startsWith('<span class="lime">')) return <span className="lime" key={index}>{part.replace(/^<span class="lime">|<\/span>$/g, "")}</span>;
    if (part.startsWith("<strong>")) return <strong key={index}>{part.replace(/^<strong>|<\/strong>$/g, "")}</strong>;
    return <Fragment key={index}>{part}</Fragment>;
  })}</>;
}
