import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/chrome";
import { articles } from "@/lib/content";

export const Route = createFileRoute("/tin-tuc")({
  head: () => ({
    meta: [{ title: "Tin tức · VINACARE ASSET" }],
  }),
  component: NewsPage,
});

function NewsPage() {
  return (
    <>
      <PageHero
        crumb="Tin tức"
        title="Tin tức — sự kiện"
        lede="Cách giữ từng loại tài sản, viết cho cơ quan, tổ chức tín dụng và chủ sở hữu cùng đọc."
        image="/media/evidence.jpg"
        alt="Hồ sơ niêm phong"
      />
      <section className="py-16">
        <ul className="wrap divide-y divide-line border-y border-line">
          {articles.map((article) => (
            <li key={article.slug}>
              <Link
                to="/tin-tuc/$slug"
                params={{ slug: article.slug }}
                className="group grid gap-6 py-8 md:grid-cols-12 md:items-center"
              >
                <img
                  src={article.image}
                  alt={article.alt}
                  className="aspect-[16/10] w-full object-cover md:col-span-4"
                />
                <div className="md:col-span-8">
                  <p className="text-xs tracking-widest text-brass uppercase">
                    {article.category}
                    <span className="px-2 text-line">/</span>
                    <span className="text-muted tabular-nums">{article.dateLabel}</span>
                  </p>
                  <h2 className="mt-3 text-2xl text-ink group-hover:text-brass md:text-3xl">{article.title}</h2>
                  <p className="mt-3 max-w-2xl text-sm text-muted">{article.excerpt}</p>
                  <span className="mt-4 inline-block text-xs font-semibold tracking-widest text-ink uppercase">
                    Xem thêm
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
