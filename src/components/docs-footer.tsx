export function DocsFooter() {
  return (
    <div className="border-t border-border/40 pt-6 pb-6 mt-12">
      <div className="flex items-center justify-center gap-2">
        <a
          href="https://fumadocs.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-foreground hover:text-primary transition-colors"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/30 border border-border/40">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <span className="text-xs text-muted-foreground">
              Docs by{" "}
              <span className="font-medium text-foreground hover:text-primary transition-colors">
                Fumadocs
              </span>
            </span>
          </div>
        </a>
        <a
          href="https://databuddy.cc"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-foreground hover:text-primary transition-colors"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/30 border border-border/40">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs text-muted-foreground">
              Analytics by{" "}
              <span className="font-medium text-foreground hover:text-primary transition-colors">
                Databuddy
              </span>
            </span>
          </div>
        </a>
      </div>
    </div>
  );
}
