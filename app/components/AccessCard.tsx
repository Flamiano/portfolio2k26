export default function AccessCard() {
    return (
        <div className="p-6 rounded-3xl border border-border bg-card overflow-hidden transition-colors duration-300">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-foreground">Contribution Graph</h3>
                <a
                    href="https://github.com/Flamiano"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-muted hover:text-foreground transition-colors mono-text flex items-center gap-1"
                >
                    @Flamiano
                </a>
            </div>
            <div className="w-full overflow-hidden rounded-xl border border-border bg-background">
                <picture>
                    <source
                        media="(prefers-color-scheme: dark)"
                        srcSet="https://raw.githubusercontent.com/Flamiano/Flamiano/output/pacman-contribution-graph-dark.svg"
                    />
                    <source
                        media="(prefers-color-scheme: light)"
                        srcSet="https://raw.githubusercontent.com/Flamiano/Flamiano/output/pacman-contribution-graph.svg"
                    />
                    <img
                        alt="Roel's GitHub contribution graph"
                        src="https://raw.githubusercontent.com/Flamiano/Flamiano/output/pacman-contribution-graph-dark.svg"
                        className="w-full h-auto"
                    />
                </picture>
            </div>
        </div>
    );
}