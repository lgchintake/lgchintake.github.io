"use client";
/* eslint-disable @next/next/no-img-element -- static export: plain <img> is intentional */

import { useRef } from "react";
import { Expand, X } from "lucide-react";

interface Props {
  image: string;
  alt: string;
  title: string;
}

/** Thumbnail button that opens the certificate in an accessible native <dialog> lightbox. */
export default function CertificateModal({ image, alt, title }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const open = () => dialogRef.current?.showModal();
  const close = () => dialogRef.current?.close();

  return (
    <>
      <button
        type="button"
        onClick={open}
        aria-haspopup="dialog"
        aria-label={`View ${title} certificate`}
        className="group relative block w-full overflow-hidden rounded-xl border border-line"
      >
        <img
          src={image}
          alt=""
          width={800}
          height={566}
          loading="lazy"
          decoding="async"
          className="aspect-[1.414/1] w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute inset-0 grid place-items-center bg-black/0 transition group-hover:bg-black/45 group-focus-visible:bg-black/45">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-sm font-medium text-slate-900 opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100">
            <Expand className="h-4 w-4" aria-hidden="true" />
            View certificate
          </span>
        </span>
      </button>

      <dialog
        ref={dialogRef}
        className="lightbox"
        aria-label={`${title} certificate`}
        onClick={(e) => {
          // Close when the backdrop (the dialog element itself) is clicked
          if (e.target === e.currentTarget) close();
        }}
      >
        <div className="relative">
          <button
            type="button"
            onClick={close}
            aria-label="Close certificate"
            className="absolute top-3 right-3 z-10 grid h-10 w-10 place-items-center rounded-full bg-white text-slate-900 shadow-lg"
            autoFocus
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
          <img
            src={image}
            alt={alt}
            width={1131}
            height={800}
            className="h-auto max-h-[88vh] w-[min(92vw,64rem)] rounded-xl bg-white object-contain shadow-2xl"
          />
        </div>
      </dialog>
    </>
  );
}
