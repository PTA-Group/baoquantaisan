import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { articles, assets, company, methods, services, stats, steps } from "@/lib/content";
import { SectionIntro } from "@/components/chrome";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <>
      <section className="hero-frame relative flex overflow-hidden">
        <img
          src="/media/hero.jpg"
          alt="Nhà ở có cổng và vườn, ánh chiều — hiện trạng được giữ"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/88 via-ink/62 to-ink/25" />
        <div className="wrap relative flex flex-1 flex-col justify-end py-16 md:py-20">
          <p className="text-xs font-semibold tracking-widest text-brass-light uppercase">
            {company.group} · Bảo quản tài sản
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl text-paper md:text-6xl">
            Bảo tồn giá trị tài sản. Thượng tôn pháp luật.
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-paper/85 md:text-base">
            {company.summary} Giữ hiện trạng bằng người trực tiếp và bằng trung tâm giám sát.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/linh-vuc" className="btn btn-brass">
              Lĩnh vực hoạt động
            </Link>
            <Link to="/lien-he" className="btn btn-ghost">
              Liên hệ tư vấn
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-card">
        <dl className="wrap grid grid-cols-2 md:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="border-line px-1 py-8 md:border-l md:px-6 md:first:border-l-0">
              <dt className="font-serif text-4xl text-brass tabular-nums">{item.value}</dt>
              <dd className="mt-2 text-sm text-muted">{item.label}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="py-20 md:py-28">
        <div className="wrap grid items-center gap-12 md:grid-cols-2">
          <div>
            <SectionIntro
              kicker="Về VINACARE ASSET"
              title="Tài sản đứng yên không có nghĩa là tài sản còn nguyên."
            />
            <div className="mt-6 space-y-4 text-muted">
              <p>
                Nhà hút ẩm, xe chết ắc quy, máy gỉ hơi muối, vườn mất mùa — khi vụ việc kết thúc, giá trị còn lại
                không còn như lúc kê biên hay lúc thu hồi.
              </p>
              <p>
                Chúng tôi làm một việc: bảo quản. Giảm chi phí trông giữ cho cơ quan nhà nước, bảo vệ hiện trạng
                cho chủ sở hữu và cho tổ chức tín dụng. Không định giá để bán, không môi giới.
              </p>
            </div>
            <Link to="/gioi-thieu" className="btn btn-line mt-8">
              Xem thêm
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
          <figure className="relative">
            <img
              src="/media/interior.jpg"
              alt="Phòng khách được phủ vải, căn nhà đang được giữ hiện trạng"
              className="aspect-[3/2] w-full object-cover"
            />
            <figcaption className="mt-3 text-xs tracking-wide text-muted uppercase">
              Nhà ở — mô hình cặp đôi quản gia
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="bg-ink py-20 text-paper md:py-28">
        <div className="wrap">
          <p className="text-xs font-semibold tracking-widest text-brass-light uppercase">Lĩnh vực hoạt động</p>
          <h2 className="mt-4 max-w-2xl text-3xl md:text-5xl">Đúng phạm vi được giao.</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {services.map((service) => (
              <Link
                key={service.id}
                to="/linh-vuc"
                hash={service.id}
                className="group field-tile relative flex flex-col overflow-hidden"
              >
                <img
                  src={service.image}
                  alt={service.alt}
                  className="zoom-img absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/10" />
                <div className="relative flex flex-1 flex-col justify-end p-7">
                  <p className="text-xs tracking-widest text-brass-light uppercase">{service.eyebrow}</p>
                  <h3 className="mt-3 text-3xl">{service.title}</h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-paper/85">{service.lead}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase">
                    Chi tiết <ArrowUpRight className="size-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="wrap">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionIntro
              kicker="Tài sản tiếp nhận"
              title="Nhà, vườn, xe, công trình, máy móc."
              text="Mỗi nhóm một cách giữ. Không dùng một quy trình cho cả kho và cả vườn."
            />
            <Link to="/linh-vuc" className="btn btn-line shrink-0">
              Xem lĩnh vực
            </Link>
          </div>
          <ul className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-6">
            {assets.map((asset, index) => (
              <li
                key={asset.title}
                className={`group overflow-hidden border border-line bg-card ${index < 3 ? "xl:col-span-2" : "xl:col-span-3"}`}
              >
                <div className="overflow-hidden">
                  <img
                    src={asset.image}
                    alt={asset.alt}
                    className="zoom-img aspect-[16/10] w-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-2xl text-ink">{asset.title}</h3>
                  <p className="mt-2 text-sm text-muted">{asset.summary}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-line bg-card py-20 md:py-28">
        <div className="wrap">
          <SectionIntro
            kicker="Phương thức bảo quản"
            title="Trực tiếp, hoặc từ trung tâm — thường là cả hai."
          />
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {methods.map((method) => (
              <article key={method.title}>
                <img src={method.image} alt={method.alt} className="aspect-[16/10] w-full object-cover" />
                <h3 className="mt-5 text-3xl text-ink">{method.title}</h3>
                <p className="mt-3 text-muted">{method.lead}</p>
                <ul className="mt-4 space-y-2 text-sm text-fg">
                  {method.points.map((point) => (
                    <li key={point} className="border-l border-brass pl-3">
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <Link to="/phuong-thuc" className="btn btn-line mt-10">
            Cách thức vận hành
          </Link>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="wrap">
          <SectionIntro kicker="Quy trình" title="Năm bước, một hồ sơ." />
          <ol className="mt-12 grid gap-8 md:grid-cols-5">
            {steps.map((step) => (
              <li key={step.n}>
                <p className="font-serif text-3xl text-brass tabular-nums">{step.n}</p>
                <h3 className="mt-3 text-xl text-ink">{step.title}</h3>
                <p className="mt-2 text-sm text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-ink py-16 text-paper">
        <div className="wrap grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-xs tracking-widest text-brass-light uppercase">Tuân thủ pháp lý</p>
            <h2 className="mt-3 text-3xl">Làm trong khung nghị định. Chịu thiệt hại nếu lỗi ta.</h2>
          </div>
          <p className="text-sm leading-relaxed text-paper/85">
            Vận hành theo Nghị định 142/2024/NĐ-CP và Nghị định 47/2026/NĐ-CP. Biên bản bàn giao là gốc. Mọi việc
            phát sinh ngoài gốc đều cần văn bản của cơ quan hoặc của tổ chức tín dụng.
          </p>
          <p className="text-sm leading-relaxed text-paper/85">
            Cam kết bồi thường 100% thiệt hại phát sinh do lỗi bảo quản. Nhật ký số là căn cứ — không phải lời kể
            sau sự cố.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="wrap">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionIntro kicker="Tin tức — sự kiện" title="Việc bảo quản, nói cho rõ." />
            <Link to="/tin-tuc" className="text-sm font-semibold tracking-wide text-ink uppercase">
              Xem thêm
            </Link>
          </div>
          <ul className="mt-12 grid gap-8 md:grid-cols-3">
            {articles.slice(0, 3).map((article) => (
              <li key={article.slug}>
                <Link to="/tin-tuc/$slug" params={{ slug: article.slug }} className="group block">
                  <div className="overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.alt}
                      className="zoom-img aspect-[16/10] w-full object-cover"
                    />
                  </div>
                  <p className="mt-4 text-xs tracking-widest text-brass uppercase">
                    {article.category}
                    <span className="px-2 text-line">/</span>
                    <span className="text-muted tabular-nums">{article.dateLabel}</span>
                  </p>
                  <h3 className="mt-2 text-2xl text-ink group-hover:text-brass">{article.title}</h3>
                  <p className="mt-2 text-sm text-muted">{article.excerpt}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-line bg-card">
        <div className="wrap flex flex-col items-start justify-between gap-6 py-14 md:flex-row md:items-center">
          <div>
            <p className="kicker">Tiếp nhận hồ sơ</p>
            <h2 className="mt-4 text-3xl text-ink md:text-4xl">Có tài sản cần người giữ — gửi hiện trạng.</h2>
          </div>
          <Link to="/lien-he" className="btn btn-brass">
            Liên hệ tư vấn
          </Link>
        </div>
      </section>
    </>
  );
}
