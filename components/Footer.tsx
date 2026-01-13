import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-8 border-t border-slate-200 dark:border-white/5 bg-slate-100 dark:bg-[#050505]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-slate-500">
          © 2024 Anesu Romeo Mutimbire.
        </p>
        <p className="text-sm text-slate-600 dark:text-slate-500 flex items-center gap-1">
          Designed with{" "}
          <span className="material-symbols-outlined text-xs text-red-500">
            favorite
          </span>{" "}
          in Zimbabwe
        </p>
      </div>
    </footer>
  );
}
