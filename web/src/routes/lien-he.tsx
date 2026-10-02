import { createFileRoute } from "@tanstack/react-router";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/chrome";
import { company } from "@/lib/content";

export const Route = createFileRoute("/lien-he")({
  head: () => ({
    meta: [{ title: "Liên hệ · VINACARE ASSET" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        crumb="Liên hệ"
        title="Gửi hiện trạng, chúng tôi gọi lại."
        lede="Hotline trực 24/7. Hoặc gửi hiện trạng qua biểu mẫu, bộ phận tiếp nhận gọi lại."
        image="/media/interior.jpg"
        alt="Không gian nhà đang được giữ, ánh sáng ban ngày"
      />
      <section className="py-16">
        <div className="wrap grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="kicker">Hotline 24/7</p>
            <a href={company.phoneHref} className="mt-4 block font-serif text-4xl text-ink tabular-nums hover:text-brass">
              {company.phoneDisplay}
            </a>
            <p className="mt-8 text-xs font-semibold tracking-widest text-brass uppercase">Văn phòng</p>
            <a href={company.mapHref} className="mt-2 block text-lg leading-snug text-ink hover:text-brass">
              {company.address}
            </a>
            <h2 className="mt-8 text-3xl text-ink">Nói rõ tài sản đang ở giai đoạn nào.</h2>
            <ul className="mt-6 space-y-4 text-sm text-muted">
              <li className="border-l border-brass pl-3">
                Tố tụng hình sự: tang vật, vật chứng, quyết định giao giữ nếu đã có.
              </li>
              <li className="border-l border-brass pl-3">
                Tố tụng dân sự: tranh chấp, kê biên, hoặc tài sản Tòa án giao.
              </li>
              <li className="border-l border-brass pl-3">
                Tổ chức tín dụng: biên bản thu hồi, loại tài sản, địa bàn.
              </li>
            </ul>
            <p className="mt-8 text-sm text-muted">
              Gọi {company.phoneDisplay} hoặc đến {company.address} khi cần người xem hiện trường. Văn phòng làm việc theo lịch hẹn sau khi đã rõ hồ sơ.
            </p>
          </div>
          <div className="md:col-span-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
