import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/chrome";
import { assets, services } from "@/lib/content";

export const Route = createFileRoute("/linh-vuc")({
  head: () => ({
    meta: [{ title: "Lĩnh vực hoạt động · VINACARE ASSET" }],
  }),
  component: FieldsPage,
});

function FieldsPage() {
  return (
    <>
      <PageHero
        crumb="Lĩnh vực hoạt động"
        title="Tố tụng và tài sản thu hồi."
        lede="Bảo quản tài sản trong tố tụng hình sự, tố tụng dân sự, và tài sản tổ chức tín dụng, ngân hàng đã thu hồi."
        image="/media/construction.jpg"
        alt="Công trình đang được trông giữ tại hiện trường"
      />
      <div className="py-16">
        {services.map((service, index) => (
          <section
            key={service.id}
            id={service.id}
            className={index === 0 ? "pb-8" : "border-t border-line py-16"}
          >
            <div className="wrap grid items-center gap-10 md:grid-cols-2">
              <img
                src={service.image}
                alt={service.alt}
                className={`aspect-[16/10] w-full object-cover ${index % 2 === 1 ? "md:order-2" : ""}`}
              />
              <div>
                <p className="kicker">{service.eyebrow}</p>
                <h2 className="mt-4 text-3xl text-ink md:text-4xl">{service.title}</h2>
                <p className="mt-4 text-muted">{service.lead}</p>
                <ul className="mt-6 space-y-3 text-sm">
                  {service.points.map((point) => (
                    <li key={point} className="border-l border-brass pl-3 text-fg">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}
      </div>
      <section className="border-t border-line bg-card py-20">
        <div className="wrap">
          <p className="kicker">Nhóm tài sản</p>
          <h2 className="mt-4 max-w-2xl text-3xl text-ink md:text-5xl">Năm nhóm, năm cách giữ.</h2>
          <div className="mt-12 space-y-16">
            {assets.map((asset, index) => (
              <article key={asset.title} className="grid items-center gap-8 md:grid-cols-12">
                <img
                  src={asset.image}
                  alt={asset.alt}
                  className={`aspect-[16/10] w-full object-cover md:col-span-7 ${index % 2 === 1 ? "md:order-2" : ""}`}
                />
                <div className="md:col-span-5">
                  <p className="font-serif text-3xl text-brass tabular-nums">0{index + 1}</p>
                  <h3 className="mt-2 text-3xl text-ink">{asset.title}</h3>
                  <p className="mt-4 text-muted">{asset.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
