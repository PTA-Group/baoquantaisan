import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/chrome";
import { principles } from "@/lib/content";

export const Route = createFileRoute("/gioi-thieu")({
  head: () => ({
    meta: [{ title: "Giới thiệu · VINACARE ASSET" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        crumb="Giới thiệu"
        title="Giữ tài sản, không kinh doanh tài sản."
        lede="VINACARE ASSET là đơn vị bảo quản của PTA Group. Việc của chúng tôi kết thúc ở hiện trạng — không ở quyết định xử lý."
        image="/media/hero.jpg"
        alt="Căn nhà và khu vườn được trông giữ"
      />
      <section className="py-20">
        <div className="wrap grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="kicker">Vì sao có đơn vị này</p>
            <h2 className="mt-4 text-3xl text-ink md:text-4xl">Niêm phong rồi bỏ đó là cách tài sản mất giá.</h2>
          </div>
          <div className="space-y-4 text-muted md:col-span-7">
            <p>
              Trong tố tụng hình sự, tang vật và vật chứng nằm chờ qua nhiều giai đoạn. Trong tố tụng dân sự, nhà và
              đất đứng trong tranh chấp hoặc kê biên. Với tổ chức tín dụng, tài sản thu hồi chờ định giá và xử lý nợ.
              Cả ba đều có một khoảng thời gian không ai ở, nhưng tài sản vẫn xuống cấp.
            </p>
            <p>
              VINACARE ASSET nhận khoảng thời gian ấy. Giảm chi phí quản lý cho Nhà nước. Bảo vệ hiện trạng cho chủ
              sở hữu và cho ngân hàng. Hoa lợi — nếu có, như vườn cây — được ghi nhận và nộp đúng quy định, không
              biến thành thu nhập không sổ.
            </p>
            <p>
              Chúng tôi không nhận ủy quyền bán, không làm môi giới, không thay cơ quan tiến hành tố tụng ra quyết
              định. Khi hết thời hạn giao giữ, bàn giao lại đúng danh mục.
            </p>
          </div>
        </div>
      </section>
      <section className="border-y border-line bg-card py-16">
        <div className="wrap">
          <p className="kicker">Cách làm việc</p>
          <h2 className="mt-4 text-3xl text-ink md:text-4xl">Bốn điều không đổi trong mọi hồ sơ.</h2>
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {principles.map((item, index) => (
              <li key={item.title} className="border border-line bg-paper p-6">
                <p className="font-serif text-3xl text-brass tabular-nums">0{index + 1}</p>
                <h3 className="mt-4 text-2xl text-ink">{item.title}</h3>
                <p className="mt-3 text-sm text-muted">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="py-20">
        <div className="wrap grid gap-10 md:grid-cols-2">
          <img
            src="/media/orchard.jpg"
            alt="Vườn cây ăn trái được chăm theo mùa"
            className="aspect-[16/10] w-full object-cover"
          />
          <div>
            <p className="kicker">Mô hình vận hành</p>
            <h2 className="mt-4 text-3xl text-ink">Bốn bộ phận, một sổ.</h2>
            <ul className="mt-6 divide-y divide-line border-y border-line">
              {[
                ["Tiếp nhận hồ sơ", "Đối chiếu quyết định giao giữ hoặc biên bản thu hồi, khảo sát, lập phương án."],
                ["Đội trực tiếp", "Quản gia nhà ở, đội vườn, bãi xe, hiện trường công trình và xưởng máy."],
                ["Trung tâm SOC", "Camera, cảm biến, nhật ký QR, cấp quyền xem cho cơ quan và tổ chức tín dụng."],
                ["Pháp chế hồ sơ", "Biên bản, niêm phong, báo cáo định kỳ, hồ sơ bồi thường nếu phát sinh lỗi."],
              ].map(([title, text]) => (
                <li key={title} className="py-4">
                  <h3 className="text-xl text-ink">{title}</h3>
                  <p className="mt-1 text-sm text-muted">{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
