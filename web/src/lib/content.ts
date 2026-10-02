export const company = {
  name: "VINACARE ASSET",
  group: "PTA Group",
  tagline: "Bảo tồn giá trị tài sản — Thượng tôn pháp luật",
  phone: "0939168998",
  phoneDisplay: "0939 168 998",
  phoneHref: "tel:+84939168998",
  address: "Số 17 Xô Viết Nghệ Tĩnh, Ninh Kiều, Cần Thơ",
  mapHref:
    "https://www.google.com/maps/search/?api=1&query=S%E1%BB%91%2017%20X%C3%B4%20Vi%E1%BA%BFt%20Ngh%E1%BB%87%20T%C4%A9nh%2C%20Ninh%20Ki%E1%BB%81u%2C%20C%E1%BA%A7n%20Th%C6%A1",
  summary:
    "Bảo quản tài sản trong các giai đoạn tố tụng hình sự — tang vật, vật chứng và tài sản liên quan — trong tố tụng dân sự, và tài sản thu hồi cho tổ chức tín dụng, ngân hàng.",
};

export const nav = [
  { to: "/", label: "Trang chủ", exact: true },
  { to: "/gioi-thieu", label: "Giới thiệu", exact: false },
  { to: "/linh-vuc", label: "Lĩnh vực", exact: false },
  { to: "/phuong-thuc", label: "Phương thức", exact: false },
  { to: "/tin-tuc", label: "Tin tức", exact: false },
  { to: "/lien-he", label: "Liên hệ", exact: false },
] as const;

export type NavTo = (typeof nav)[number]["to"];

export const stats = [
  { value: "02", label: "Lĩnh vực bảo quản" },
  { value: "05", label: "Nhóm tài sản tiếp nhận" },
  { value: "24/7", label: "Trung tâm giám sát SOC" },
  { value: "02", label: "Phương thức trực tiếp và công nghệ" },
];

export const services = [
  {
    id: "to-tung",
    title: "Tài sản trong tố tụng",
    eyebrow: "Hình sự & dân sự",
    image: "/media/evidence.jpg",
    alt: "Tủ lưu trữ được niêm phong, ánh sáng tĩnh",
    lead: "Giữ tang vật, vật chứng và tài sản được giao trong suốt quá trình tố tụng — không để hiện trạng trôi đi giữa các giai đoạn.",
    points: [
      "Tố tụng hình sự: tang vật, vật chứng, phương tiện và tài sản liên quan vụ án. Niêm phong đúng lúc bàn giao, hạn chế mở niêm phong, có mặt khi cơ quan yêu cầu xem xét.",
      "Tố tụng dân sự: tài sản tranh chấp, tài sản kê biên, tài sản Tòa án giao giữ. Không dịch chuyển, không cho thuê, không sửa chữa làm đổi giá trị nếu chưa có văn bản đồng ý.",
      "Mỗi lần tác động đều có biên bản, ảnh trước — sau và dòng nhật ký để cán bộ Công an, Tòa án đối chiếu.",
    ],
  },
  {
    id: "tin-dung",
    title: "Tài sản thu hồi cho tổ chức tín dụng",
    eyebrow: "Ngân hàng & tổ chức tín dụng",
    image: "/media/hero.jpg",
    alt: "Nhà ở có cổng và vườn, tài sản cần giữ nguyên hiện trạng",
    lead: "Giữ nhà, xe, máy và công trình đã thu hồi hoặc đang chờ xử lý nợ — để tài sản còn dùng được, còn bán được khi đến lúc xử lý.",
    points: [
      "Tiếp nhận theo biên bản bàn giao với tổ chức tín dụng. Không thay ngân hàng định giá, không tự ý bán hay khai thác.",
      "Phối hợp lịch khảo sát của đơn vị thẩm định. Mở cổng, có mặt, khóa lại đúng hiện trạng.",
      "Báo cáo định kỳ tình trạng xuống cấp, mất mát hoặc hoa lợi phát sinh.",
    ],
  },
];

export const assets = [
  {
    title: "Nhà cửa",
    image: "/media/interior.jpg",
    alt: "Phòng khách được phủ vải lanh, giữ hiện trạng căn nhà",
    summary: "Cặp đôi quản gia giữ hơi người cho nhà ở, biệt thự, để căn nhà không mốc và không mất giá vì bỏ trống.",
    detail:
      "Một cán bộ trực tại nhà, một cán bộ theo dõi từ trung tâm. Thông gió, chống ẩm, kiểm tra mái, điện nước và dấu hiệu xâm nhập. Đồ đạc phủ vải, không bày biện lại, không cho ở nhờ.",
  },
  {
    title: "Ruộng vườn cây ăn trái",
    image: "/media/orchard.jpg",
    alt: "Vườn cây ăn trái thẳng hàng trong sương sớm",
    summary: "Thu hoạch và ủy thác. Chăm mùa vụ, ghi sản lượng, hoa lợi nộp đúng quy định.",
    detail:
      "Tưới, bón, tỉa và thu hái theo mùa. Sản lượng được cân, chụp và lập biên bản. Hoa lợi nộp ngân sách hoặc xử lý theo quyết định của cơ quan có thẩm quyền — không để trái rụng ngoài sổ sách, không để vườn chết vì bỏ hoang.",
  },
  {
    title: "Xe các loại",
    image: "/media/vehicles.jpg",
    alt: "Xe con, xe tải và xe chuyên dùng trong bãi có kiểm soát",
    summary: "Ô tô, xe tải, xe máy và xe chuyên dùng. Bãi kiểm soát, khởi động và bảo dưỡng định kỳ.",
    detail:
      "Gồm cả xe cẩu, xe xúc, xe bơm và phương tiện chuyên dùng khác. Bãi có hàng rào, khởi động theo lịch, kiểm tra ắc quy, lốp, dầu và hệ thống thủy lực. Hạn chế tháo phụ tùng và khô gioăng vì để chết máy.",
  },
  {
    title: "Công trình",
    image: "/media/construction.jpg",
    alt: "Công trình bê tông đang xây, mặt sân ướt lúc chạng vạng",
    summary: "Tuần tra hiện trường, khóa cổng, theo dõi kết cấu và hạng mục dở dang.",
    detail:
      "Nhà đang xây, công trình dân dụng và công nghiệp. Giữ coppha, thép, thiết bị thi công còn lại. Ghi nhận mưa nắng, thấm, nứt, sạt và dấu hiệu người lạ ra vào.",
  },
  {
    title: "Máy móc công nghiệp",
    image: "/media/machinery.jpg",
    alt: "Máy công nghiệp trong xưởng, một số được bọc màng bảo vệ",
    summary: "Vận hành không tải định kỳ, bọc màng co chống rỉ và hơi muối.",
    detail:
      "Dây chuyền, máy công cụ, thiết bị nhà xưởng. Chạy không tải để dầu lưu thông. Bọc màng co khi tài sản ở vùng ven biển hoặc xưởng ẩm. Độ ẩm và nhiệt theo dõi từ xa, không để máy thành sắt vụn chờ xử lý.",
  },
];

export const methods = [
  {
    title: "Bảo quản trực tiếp",
    image: "/media/hero.jpg",
    alt: "Căn nhà có cổng sắt và vườn, ánh chiều",
    lead: "Người có mặt tại tài sản. Phù hợp nhà ở, vườn, công trình và nơi cần chăm sóc bằng tay.",
    points: [
      "Niêm phong, tuần tra, bảo trì hiện trường.",
      "Biên bản từng lần kiểm, ảnh và người ký.",
      "Cặp đôi quản gia với nhà ở; đội vườn với cây ăn trái; ca trực với công trình.",
    ],
  },
  {
    title: "Gián tiếp bằng công nghệ thông minh",
    image: "/media/soc.jpg",
    alt: "Phòng giám sát với màn hình camera cổng và kho",
    lead: "Trung tâm SOC xem 24/7. Phù hợp xe, máy móc và danh mục tài sản phân tán.",
    points: [
      "Camera, cảm biến cửa và độ ẩm.",
      "Mã QR tại điểm kiểm: ảnh trước — sau, tọa độ GPS của người thực hiện.",
      "Cơ quan tiến hành tố tụng và tổ chức tín dụng xem trực tiếp trên ứng dụng theo quyền được cấp.",
    ],
  },
];

export const steps = [
  { n: "01", title: "Tiếp nhận", text: "Hồ sơ, quyết định giao giữ hoặc biên bản thu hồi. Khảo sát hiện trạng tại chỗ." },
  { n: "02", title: "Bàn giao", text: "Phương án bảo quản, niêm phong, ảnh gốc, danh mục tài sản chi tiết." },
  { n: "03", title: "Giữ tài sản", text: "Trực tiếp, công nghệ, hoặc cả hai. Không khai thác ngoài phạm vi được giao." },
  { n: "04", title: "Nhật ký số", text: "Mỗi lần bảo trì một dòng: QR, ảnh, GPS, người thực hiện. Báo cáo định kỳ." },
  { n: "05", title: "Kết thúc", text: "Bàn giao lại hoặc xử lý hoa lợi đúng quyết định của cơ quan có thẩm quyền." },
];

export const principles = [
  {
    title: "Đúng việc được giao",
    text: "Chỉ bảo quản. Không định giá để bán, không môi giới, không xử lý tài sản thay cơ quan có thẩm quyền.",
  },
  {
    title: "Giữ nguyên hiện trạng",
    text: "Nhà không bị biến thành nhà hoang. Xe vẫn nổ máy. Máy không thành đống sắt. Vườn vẫn ra trái.",
  },
  {
    title: "Minh bạch từng lần kiểm",
    text: "Nhật ký số gắn ảnh, thời điểm và tọa độ. Cơ quan và chủ tài sản xem cùng một sổ, không hai bản kể.",
  },
  {
    title: "Chịu trách nhiệm bằng tiền",
    text: "Cam kết bồi thường 100% thiệt hại phát sinh do lỗi bảo quản. Vận hành theo Nghị định 142/2024/NĐ-CP và Nghị định 47/2026/NĐ-CP.",
  },
];

export const compare = [
  { item: "Hiện diện", direct: "Cán bộ tại tài sản, theo ca", remote: "Camera, cảm biến, trung tâm SOC" },
  { item: "Ghi nhận", direct: "Biên bản giấy và bản số", remote: "QR, ảnh trước — sau, GPS" },
  { item: "Phù hợp", direct: "Nhà, vườn, công trình cần chăm sóc", remote: "Xe, máy móc, tài sản nằm rải" },
  { item: "Nhịp", direct: "Theo lịch trực và mùa vụ", remote: "Giám sát liên tục 24/7" },
];

export const stages = [
  "Tố tụng hình sự",
  "Tố tụng dân sự",
  "Tài sản thu hồi — tổ chức tín dụng",
  "Khác",
];

export type Article = {
  slug: string;
  title: string;
  date: string;
  dateLabel: string;
  category: string;
  excerpt: string;
  image: string;
  alt: string;
  paragraphs: string[];
};

export const articles: Article[] = [
  {
    slug: "tang-vat-vat-chung",
    title: "Giữ tang vật, vật chứng qua từng giai đoạn tố tụng hình sự",
    date: "2026-09-12",
    dateLabel: "12.09.2026",
    category: "Tố tụng hình sự",
    excerpt:
      "Niêm phong chỉ là mốc đầu. Tài sản còn phải sống được đến khi vụ án kết thúc — không mốc, không mất phụ tùng, không bị mở ngoài biên bản.",
    image: "/media/evidence.jpg",
    alt: "Tủ hồ sơ được niêm phong",
    paragraphs: [
      "Tang vật và vật chứng thường đứng yên rất lâu: từ khi thu giữ, qua điều tra, truy tố, xét xử, có khi cả thi hành án. Khoảng lặng ấy đủ để nhà ẩm, xe chết bình, máy gỉ.",
      "VINACARE ASSET nhận giữ theo quyết định giao. Hiện trạng lúc bàn giao được chụp thành bộ ảnh gốc. Niêm phong không bị mở vì tò mò. Khi cơ quan cần xem xét, cán bộ bảo quản có mặt, chụp trước và sau, ghi người yêu cầu.",
      "Nhật ký số để cán bộ Công an mở lại đúng lần kiểm: ảnh, giờ, tọa độ người thực hiện. Không còn tình trạng “hôm đó có ai vào nhà không nhớ”.",
      "Phần việc dừng ở bảo quản. Việc xử lý vật chứng vẫn thuộc cơ quan tiến hành tố tụng.",
    ],
  },
  {
    slug: "tai-san-to-tung-dan-su",
    title: "Tài sản tranh chấp và tài sản kê biên trong tố tụng dân sự",
    date: "2026-08-28",
    dateLabel: "28.08.2026",
    category: "Tố tụng dân sự",
    excerpt:
      "Một căn nhà đang kiện không phải là căn nhà bỏ không. Giữ hiện trạng để còn đối chiếu khi định giá và khi thi hành án.",
    image: "/media/interior.jpg",
    alt: "Nội thất nhà được phủ kín, chờ giải quyết tranh chấp",
    paragraphs: [
      "Trong dân sự, tài sản vừa là đối tượng tranh chấp vừa là nơi người ta vẫn muốn dùng. Ranh giới là văn bản giao giữ: ai được vào, ai không, việc gì được làm.",
      "Chúng tôi không sắp xếp lại nội thất cho đẹp hơn hồ sơ. Đồ phủ vải, cửa khóa, sân vẫn quét, mái vẫn được xem sau mưa. Sửa chữa làm đổi giá trị chỉ thực hiện khi có văn bản đồng ý.",
      "Với tài sản kê biên, mục tiêu thực dụng là: đến ngày thi hành án, tài sản không mất mát so với biên bản kê biên vì thiếu người trông.",
    ],
  },
  {
    slug: "tai-san-thu-hoi-ngan-hang",
    title: "Tài sản tổ chức tín dụng thu hồi, trong lúc chờ xử lý nợ",
    date: "2026-08-04",
    dateLabel: "04.08.2026",
    category: "Tổ chức tín dụng",
    excerpt:
      "Nhà, xe, máy đã nhận bàn giao vẫn xuống cấp từng tháng nếu chỉ rào lại. Bảo quản là để tài sản còn bán được.",
    image: "/media/vehicles.jpg",
    alt: "Bãi phương tiện thu giữ",
    paragraphs: [
      "Sau thu hồi, tổ chức tín dụng cần thời gian định giá, rao bán, xử lý nội bộ. Trong khoảng đó xe hết bình, nhà mất máy lạnh, máy móc kẹt gỉ — giá xử lý tụt không phải vì thị trường.",
      "VINACARE ASSET nhận bàn giao cùng ngân hàng, lập danh mục, chọn trực tiếp hay giám sát từ xa theo loại tài sản. Đơn vị thẩm định đến là mở cổng, có người dẫn, khóa lại như cũ.",
      "Chúng tôi không chào bán, không nhận đặt cọc, không cho thuê mái nhà. Việc xử lý nợ vẫn là của tổ chức tín dụng.",
    ],
  },
  {
    slug: "vuon-cay-an-trai",
    title: "Vườn cây ăn trái: thu hoạch và ủy thác, không bỏ mùa",
    date: "2026-07-16",
    dateLabel: "16.07.2026",
    category: "Ruộng vườn",
    excerpt:
      "Cây không chờ án xong. Trái chín phải được hái, cân và ghi vào sổ — hoa lợi đi đúng nơi quy định.",
    image: "/media/orchard.jpg",
    alt: "Hàng cây ăn trái trong vườn",
    paragraphs: [
      "Ruộng vườn là tài sản sống. Niêm phong cổng rồi đi khỏi là một mùa mất trắng, và mất trắng không có trong biên bản kê biên.",
      "Mô hình thu hoạch và ủy thác: chăm theo mùa, thu hái, cân sản lượng trước mặt người chứng kiến khi được yêu cầu, chụp ảnh, lập biên bản. Hoa lợi nộp ngân sách hoặc xử lý theo quyết định — không chia tay, không bán chợ.",
      "Nhật ký vườn ghi nước, phân, sâu bệnh và sản lượng. Chủ sở hữu và cơ quan nhìn cùng một sổ.",
    ],
  },
  {
    slug: "nhat-ky-so-soc",
    title: "Nhật ký số và trung tâm SOC: một sổ cho mọi bên",
    date: "2026-06-30",
    dateLabel: "30.06.2026",
    category: "Công nghệ",
    excerpt:
      "Quét mã tại điểm kiểm, ảnh trước — sau, tọa độ người làm. Phòng giám sát mở cho cơ quan được cấp quyền.",
    image: "/media/soc.jpg",
    alt: "Phòng giám sát màn hình hiện trường",
    paragraphs: [
      "Bảo quản dễ sinh tranh cãi ở câu “lúc giao còn đủ”. Nhật ký giấy thất lạc. Ảnh trong điện thoại cá nhân không phải hồ sơ.",
      "Mỗi điểm tài sản có mã QR. Người bảo trì quét mã, chụp trước khi động vào, chụp sau khi xong. Hệ thống gắn giờ và tọa độ GPS của lần kiểm. Không có ảnh thì lần đó chưa tính là đã làm.",
      "Trung tâm SOC xem camera và cảm biến 24/7. Cán bộ Công an, Tòa án hoặc tổ chức tín dụng được cấp tài khoản xem đúng tài sản mình phụ trách — không xem chéo hồ sơ khác.",
      "Công nghệ không thay người ở những nơi cần tưới cây hay chạy máy không tải. Nó làm cho lần trực ấy không thể chối.",
    ],
  },
];

export function articleBySlug(slug: string) {
  return articles.find((item) => item.slug === slug);
}
