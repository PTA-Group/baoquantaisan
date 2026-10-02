import { createFileRoute, Link } from "@tanstack/react-router";
import { articleBySlug, articles } from "@/lib/content";

export const Route = createFileRoute("/tin-tuc/$slug")({
  head: ({ params }) => {
    const article = articleBySlug(params.slug);
    return {
      meta: [{ title: article ? `${article.title} · VINACARE ASSET` : "Bài viết · VINACARE ASSET" }],
    };
  },
  component: ArticlePage,
});

function ArticlePage() {
  const { slug } = Route.useParams();
  const article = articleBySlug(slug);

  if (!article) {
    return (
      <section className="wrap py-24">
        <p className="kicker">Không thấy bài</p>
        <h1 className="mt-4 text-4xl text-ink">Bài này không có trong mục tin.</h1>
        <Link to="/tin-tuc" className="btn btn-line mt-8">
          Về tin tức
        </Link>
      </section>
    );
  }

  const others = articles.filter((item) => item.slug !== article.slug).slice(0, 2);

  return (
    <article>
      <header className="relative min-h-80 overflow-hidden">
        <img src={article.image} alt={article.alt} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-ink/70" />
        <div className="wrap relative py-16">
          <p className="text-xs tracking-widest text-brass-light uppercase">
            <Link to="/" className="hover:text-paper">
              Trang chủ
            </Link>
            <span className="px-2 text-paper/50">/</span>
            <Link to="/tin-tuc" className="hover:text-paper">
              Tin tức
            </Link>
          </p>
          <p className="mt-6 text-xs tracking-widest text-brass-light uppercase">
            {article.category}
            <span className="px-2 text-paper/50">/</span>
            <span className="tabular-nums">{article.dateLabel}</span>
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl text-paper md:text-5xl">{article.title}</h1>
        </div>
      </header>
      <div className="wrap grid gap-12 py-14 md:grid-cols-12">
        <div className="space-y-5 text-fg md:col-span-8">
          {article.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <aside className="md:col-span-4">
          <p className="text-xs tracking-widest text-muted uppercase">Bài khác</p>
          <ul className="mt-4 space-y-5">
            {others.map((item) => (
              <li key={item.slug}>
                <Link to="/tin-tuc/$slug" params={{ slug: item.slug }} className="group block">
                  <p className="text-xs text-brass tabular-nums">{item.dateLabel}</p>
                  <p className="mt-1 text-ink group-hover:text-brass">{item.title}</p>
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/lien-he" className="btn btn-brass mt-8">
            Trao đổi hồ sơ
          </Link>
        </aside>
      </div>
    </article>
  );
}
