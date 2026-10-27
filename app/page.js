export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main style={{ maxWidth: 560, margin: "80px auto", padding: "0 16px" }}>
      <h1>Hello from Next.js 👋</h1>
      <p>This is a dummy app for testing the Vercel deploy flow.</p>
      <p>
        Rendered at: <code>{new Date().toISOString()}</code>
      </p>
      <p>
        Environment: <code>{process.env.VERCEL_ENV ?? "local"}</code>
      </p>
      <p>
        Commit: <code>{process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 7) ?? "n/a"}</code>
      </p>
    </main>
  );
}
