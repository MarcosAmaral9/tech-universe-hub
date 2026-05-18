/**
 * RelatedTopics — inline internal link blocks that appear within article prose.
 * Drives cross-category navigation and improves SEO internal linking.
 */
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface TopicLink {
  label: string;
  href: string;
  desc?: string;
}

interface RelatedTopicsProps {
  title?: string;
  links: TopicLink[];
  variant?: "inline" | "card";
}

const RelatedTopics = ({ title = "Leia também", links, variant = "card" }: RelatedTopicsProps) => {
  if (!links.length) return null;

  if (variant === "inline") {
    return (
      <div className="not-prose my-6 flex flex-wrap gap-2">
        {links.map(l => (
          <Link
            key={l.href}
            to={l.href}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors"
          >
            {l.label} <ArrowRight className="h-3 w-3" />
          </Link>
        ))}
      </div>
    );
  }

  return (
    <aside className="not-prose my-8 p-5 rounded-xl border border-border bg-card">
      <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3">{title}</p>
      <ul className="space-y-2">
        {links.map(l => (
          <li key={l.href}>
            <Link
              to={l.href}
              className="group flex items-start gap-2 hover:text-primary transition-colors"
            >
              <ArrowRight className="h-4 w-4 shrink-0 mt-0.5 text-primary/60 group-hover:text-primary" />
              <span>
                <span className="text-sm font-medium">{l.label}</span>
                {l.desc && <span className="block text-xs text-muted-foreground">{l.desc}</span>}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default RelatedTopics;
