export default function Loading() {
  return (
    <main className="animate-pulse space-y-6 p-6">
      <section className="space-y-4">
        <div className="h-10 w-2/3 rounded bg-slate-200" />
        <div className="h-4 w-full rounded bg-slate-200" />
        <div className="h-4 w-5/6 rounded bg-slate-200" />
      </section>

      <section className="space-y-4">
        <div className="h-8 w-48 rounded bg-slate-200" />

        <div className="space-y-4">
          <div className="h-32 rounded-xl bg-slate-200" />
          <div className="h-32 rounded-xl bg-slate-200" />
        </div>
      </section>
    </main>
  );
}