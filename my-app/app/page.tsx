export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_#fff7ed_0%,_#ffe4e6_38%,_#fce7f3_68%,_#fff1f2_100%)] px-6 py-10 text-slate-900">
      <div className="absolute inset-0 opacity-60">
        <div className="absolute left-8 top-10 h-32 w-32 rounded-full bg-amber-300/40 blur-3xl" />
        <div className="absolute right-12 top-20 h-40 w-40 rounded-full bg-rose-400/30 blur-3xl" />
        <div className="absolute bottom-14 left-1/4 h-36 w-36 rounded-full bg-fuchsia-300/30 blur-3xl" />
      </div>

      <section className="relative mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-4xl items-center justify-center">
        <div className="relative w-full overflow-hidden rounded-[2rem] border border-white/60 bg-white/70 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl sm:p-12">
          <div className="absolute right-6 top-6 text-3xl sm:text-4xl">🎉</div>
          <div className="absolute left-6 top-6 text-2xl sm:text-3xl">🎂</div>
          <div className="absolute bottom-6 right-10 text-2xl sm:text-3xl">✨</div>

          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <span className="mb-6 inline-flex items-center rounded-full border border-rose-200 bg-rose-50 px-4 py-1 text-sm font-semibold tracking-[0.24em] text-rose-700 uppercase">
              Birthday wishes
            </span>
            <h1 className="text-4xl font-black tracking-tight text-slate-950 sm:text-6xl">
              Happy Birthday, Harkirat!
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 sm:text-xl">
              Wishing you a day packed with laughter, great memories, good food,
              and all the things that make you smile. May this year bring you
              success, peace, and a lot of reasons to celebrate.
            </p>

            <div className="mt-10 grid w-full gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-rose-50 px-5 py-4 text-center shadow-sm">
                <div className="text-2xl font-extrabold text-rose-700">1</div>
                <div className="mt-1 text-sm font-medium text-slate-700">
                  Amazing day
                </div>
              </div>
              <div className="rounded-2xl bg-amber-50 px-5 py-4 text-center shadow-sm">
                <div className="text-2xl font-extrabold text-amber-700">2</div>
                <div className="mt-1 text-sm font-medium text-slate-700">
                  Big cake slice
                </div>
              </div>
              <div className="rounded-2xl bg-fuchsia-50 px-5 py-4 text-center shadow-sm">
                <div className="text-2xl font-extrabold text-fuchsia-700">3</div>
                <div className="mt-1 text-sm font-medium text-slate-700">
                  Best year yet
                </div>
              </div>
            </div>

            <p className="mt-10 text-sm font-medium uppercase tracking-[0.32em] text-slate-400">
              Have an unforgettable birthday
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
