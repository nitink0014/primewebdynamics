
function GlobalLoader() {
  return (
    <div
      className="fixed inset-0 z-[9999] flex min-h-screen items-center justify-center bg-[#101a35]"
      role="status"
      aria-label="Loading page"
    >
      <div className="flex flex-col items-center gap-6">
        {/* Brand */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-[3px] text-white sm:text-4xl">
            PRIMEWEB
          </h2>

          <p className="mt-2 text-xs font-medium tracking-[5px] text-blue-300">
            DYNAMICS
          </p>
        </div>

        {/* Animated Loader */}
        <div className="relative flex h-14 w-14 items-center justify-center">
          <div className="absolute inset-0 rounded-full border-4 border-blue-300/20" />

          <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-blue-400 border-r-blue-400" />
        </div>

        <p className="animate-pulse text-sm font-medium tracking-widest text-blue-200">
          LOADING...
        </p>
      </div>
    </div>
  );
}

export default GlobalLoader;
