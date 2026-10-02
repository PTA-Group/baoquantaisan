import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/chrome";
import { compare, methods, steps } from "@/lib/content";

export const Route = createFileRoute("/phuong-thuc")({
  head: () => ({
    meta: [{ title: "Phương thức bảo quản · VINACARE ASSET" }],
  }),
  component: MethodsPage,
});

function MethodsPage() {
  return (
    <>
      <PageHero
        crumb="Phương thức bảo quản"
        title="Người ở hiện trường. Mắt ở trung tâm."
        lede="Bảo quản trực tiếp khi tài sản cần được chăm. Bảo quản gián tiếp bằng công nghệ khi cần nhìn thấy liên tục. Hồ sơ lớn dùng cả hai."
        image="/media/soc.jpg"
        alt="Trung tâm giám sát SOC"
      />
      <section className="py-20">
        <div className="wrap grid gap-12 md:grid-cols-2">
          {methods.map((method) => (
            <article key={method.title}>
              <img src={method.image} alt={method.alt} className="aspect-[16/10] w-full object-cover" />
              <h2 className="mt-6 text-3xl text-ink">{method.title}</h2>
              <p className="mt-3 text-muted">{method.lead}</p>
              <ul className="mt-5 space-y-3 text-sm">
                {method.points.map((point) => (
                  <li key={point} className="border-l border-brass pl-3">
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
      <section className="border-y border-line bg-card py-16">
        <div className="wrap">
          <p className="kicker">Đặt cạnh nhau</p>
          <h2 className="mt-4 text-3xl text-ink">Chọn cách giữ theo tài sản, không theo thói quen.</h2>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-line text-xs tracking-widest text-muted uppercase">
                  <th className="py-3 pr-4 font-medium">Hạng mục</th>
                  <th className="py-3 pr-4 font-medium">Trực tiếp</th>
                  <th className="py-3 font-medium">Công nghệ thông minh</th>
                </tr>
              </thead>
              <tbody>
                {compare.map((row) => (
                  <tr key={row.item} className="border-b border-line">
                    <th className="py-4 pr-4 font-serif text-lg font-medium text-ink">{row.item}</th>
                    <td className="py-4 pr-4 text-muted">{row.direct}</td>
                    <td className="py-4 text-muted">{row.remote}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="wrap grid gap-12 md:grid-cols-2">
          <div>
            <p className="kicker">Nhật ký số</p>
            <h2 className="mt-4 text-3xl text-ink">Không có ảnh thì lần kiểm chưa xảy ra.</h2>
            <div className="mt-5 space-y-4 text-sm text-muted">
              <p>
                Mỗi điểm tài sản dán mã QR. Cán bộ quét mã, chụp trước khi làm, chụp sau khi xong. Hệ thống gắn giờ
                và tọa độ GPS của người thực hiện.
              </p>
              <p>
                Trung tâm SOC theo dõi camera và cảm biến suốt ngày đêm. Tài khoản xem được cấp riêng cho cán bộ
                Công an, Tòa án hoặc tổ chức tín dụng — đúng tài sản, không xem chéo.
              </p>
              <p>
                Với máy móc: vận hành không tải theo lịch, bọc màng co chống rỉ và hơi muối. Với vườn: sổ mùa vụ và
                sản lượng. Với nhà: sổ ẩm, mái, điện nước.
              </p>
            </div>
          </div>
          <img
            src="/media/machinery.jpg"
            alt="Máy móc được bọc bảo vệ trong xưởng"
            className="aspect-[4/3] w-full object-cover"
          />
        </div>
      </section>
      <section className="bg-ink py-16 text-paper">
        <div className="wrap">
          <h2 className="text-3xl">Năm bước của một hồ sơ</h2>
          <ol className="mt-8 grid gap-6 md:grid-cols-5">
            {steps.map((step) => (
              <li key={step.n}>
                <p className="font-serif text-2xl text-brass-light tabular-nums">{step.n}</p>
                <h3 className="mt-2 text-xl">{step.title}</h3>
                <p className="mt-2 text-sm text-paper/75">{step.text}</p>
              </li>
            ))}
          </ol>
          <Link to="/lien-he" className="btn btn-brass mt-10">
            Gửi hiện trạng
          </Link>
        </div>
      </section>
    </>
  );
}
