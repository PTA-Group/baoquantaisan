import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { company, nav } from "@/lib/content";

function Mark({ className }: { className?: string }) {
  return (
    <img
      src="/media/pta-logo.png"
      alt=""
      className={`rounded-full object-cover ${className ?? ""}`}
    />
  );
}

export function SiteHeader() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [path]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40">
      <div className="bg-ink text-paper">
        <div className="wrap flex h-9 items-center justify-between gap-4 text-xs tracking-wide">
          <p className="min-w-0 truncate">
            {company.group}
            <span className="hidden px-2 text-brass-light sm:inline">/</span>
            <span className="hidden sm:inline">{company.name}</span>
          </p>
          <p className="hidden text-brass-light md:block">{company.tagline}</p>
          <a href={company.phoneHref} className="shrink-0 font-semibold text-paper tabular-nums hover:text-brass-light">
            {company.phoneDisplay}
          </a>
        </div>
      </div>
      <div className="border-b border-line bg-card">
        <div className="wrap flex h-20 items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-3 text-ink">
            <Mark className="size-14" />
            <span className="leading-tight">
              <span className="block text-sm font-semibold tracking-widest">VINACARE</span>
              <span className="block text-xs tracking-widest text-muted">ASSET</span>
            </span>
          </Link>
          <nav className="site-nav hidden items-center gap-6 lg:flex" aria-label="Chính">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.exact }}
                className="py-2 text-sm text-muted hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Link to="/lien-he" className="btn btn-brass hidden sm:inline-flex">
              Tiếp nhận hồ sơ
            </Link>
            <button
              type="button"
              className="inline-flex size-11 items-center justify-center text-ink lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((value) => !value)}
            >
              <span className="sr-only">{open ? "Đóng menu" : "Mở menu"}</span>
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </div>
      {open ? (
        <div id="mobile-menu" className="border-b border-line bg-ink text-paper lg:hidden">
          <nav className="menu-nav wrap flex flex-col py-3" aria-label="Di động">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.exact }}
                className="border-b border-ink-soft py-4 text-lg"
              >
                {item.label}
              </Link>
            ))}
            <Link to="/lien-he" className="btn btn-brass mt-4">
              Tiếp nhận hồ sơ
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-ink text-paper">
      <div className="wrap grid gap-10 py-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <Mark className="size-14" />
            <p className="text-sm font-semibold tracking-widest">VINACARE ASSET</p>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-brass-light">{company.tagline}</p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-paper/80">{company.summary}</p>
        </div>
        <div className="md:col-span-3">
          <p className="text-xs tracking-widest text-brass-light uppercase">Điều hướng</p>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="hover:text-brass-light">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-4">
          <p className="text-xs tracking-widest text-brass-light uppercase">Hotline 24/7</p>
          <a href={company.phoneHref} className="mt-3 block font-serif text-3xl text-paper tabular-nums hover:text-brass-light">
            {company.phoneDisplay}
          </a>
          <p className="mt-5 text-xs tracking-widest text-brass-light uppercase">Văn phòng</p>
          <a href={company.mapHref} className="mt-2 block max-w-xs text-sm leading-relaxed text-paper hover:text-brass-light">
            {company.address}
          </a>
          <p className="mt-4 text-sm leading-relaxed text-paper/80">
            Gọi trực khi cần khảo sát hoặc khi tài sản đang bảo quản có sự cố. Hồ sơ mới cũng gửi được qua biểu mẫu.
          </p>
          <Link to="/lien-he" className="btn btn-ghost mt-5">
            Gửi yêu cầu
          </Link>
        </div>
      </div>
      <div className="border-t border-ink-soft">
        <div className="wrap flex flex-col gap-2 py-5 text-xs text-paper/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {company.name} · {company.group}</p>
          <p>Giới thiệu dịch vụ — không thay thế văn bản của cơ quan tiến hành tố tụng.</p>
        </div>
      </div>
    </footer>
  );
}

export function PageHero({
  crumb,
  title,
  lede,
  image,
  alt,
}: {
  crumb: string;
  title: string;
  lede: string;
  image: string;
  alt: string;
}) {
  return (
    <section className="page-hero relative flex items-end overflow-hidden">
      <img src={image} alt={alt} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-ink/72" />
      <div className="wrap relative py-14">
        <p className="text-xs tracking-widest text-brass-light uppercase">
          <Link to="/" className="hover:text-paper">
            Trang chủ
          </Link>
          <span className="px-2 text-paper/50">/</span>
          {crumb}
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl text-paper md:text-6xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-paper/85 md:text-base">{lede}</p>
      </div>
    </section>
  );
}

export function SectionIntro({
  kicker,
  title,
  text,
}: {
  kicker: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="kicker">{kicker}</p>
      <h2 className="mt-4 text-3xl text-ink md:text-5xl">{title}</h2>
      {text ? <p className="mt-4 text-muted">{text}</p> : null}
    </div>
  );
}
