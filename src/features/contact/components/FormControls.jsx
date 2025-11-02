import React from "react";

export function Label({ htmlFor, children }) {
  return (
    <label htmlFor={htmlFor} className="mb-1 block text-sm text-slate-300">
      {children}
    </label>
  );
}

export function FieldError({ message }) {
  if (!message) return null;
  return <p className="mt-1 text-xs text-rose-400">{message}</p>;
}

export function Input({ invalid, className = "", ...rest }) {
  return (
    <input
      {...rest}
      className={
        `w-full rounded-xl border bg-slate-900/40 px-3 py-2 text-slate-100 placeholder-slate-400 outline-none transition ` +
        `backdrop-blur ring-1 focus:ring-2 ` +
        (invalid
          ? "border-rose-500/40 ring-rose-500/40 focus:ring-rose-400"
          : "border-white/10 ring-white/10 focus:ring-indigo-400/60") +
        (className ? ` ${className}` : "")
      }
    />
  );
}

export function Textarea({ invalid, className = "", ...rest }) {
  return (
    <textarea
      {...rest}
      className={
        `min-h-[120px] w-full resize-y rounded-xl border bg-slate-900/40 px-3 py-2 text-slate-100 placeholder-slate-400 outline-none transition ` +
        `backdrop-blur ring-1 focus:ring-2 ` +
        (invalid
          ? "border-rose-500/40 ring-rose-500/40 focus:ring-rose-400"
          : "border-white/10 ring-white/10 focus:ring-indigo-400/60") +
        (className ? ` ${className}` : "")
      }
    />
  );
}
