export default function About() {
    return (
        <div className="p-8 rounded-3xl border border-border bg-card transition-colors duration-300">
            <h3 className="text-xl font-bold mb-4 text-foreground">About Me</h3>
            <div className="space-y-3 text-sm text-muted leading-relaxed">
                <p>
                    I’m an IT student at Bestlink College of the Philippines who believes that
                    good software, like a good building, needs a strong foundation to grow.
                    I don’t just write code; I build digital tools that are fast, clean, and
                    made to handle more users as they grow.
                </p>
                <p>
                    By combining modern tools like React and Next.js with a solid backend in
                    PHP and Supabase, I make sure every project works great today and is
                    ready for whatever comes next. I use Git to keep everything organized—because
                    great projects deserve careful management.
                </p>
            </div>
        </div>
    );
}