import { useState, type FormEvent, type ReactNode } from "react";
import { assets, company, stages } from "@/lib/content";

type Errors = Partial<Record<"name" | "org" | "phone" | "stage" | "message", string>>;

const empty = {
  name: "",
  org: "",
  phone: "",
  email: "",
  asset: assets[0]?.title ?? "Nhà cửa",
  stage: stages[0] ?? "",
  message: "",
};

function validate(values: typeof empty): Errors {
  const errors: Errors = {};
  if (values.name.trim().length < 2) errors.name = "Điền họ tên người liên hệ.";
  if (values.org.trim().length < 2) errors.org = "Điền cơ quan hoặc tổ chức.";
  if (!/^[0-9+\s().-]{8,16}$/.test(values.phone.trim())) errors.phone = "Số điện thoại chưa đúng.";
  if (!values.stage) errors.stage = "Chọn nhóm hồ sơ.";
  if (values.message.trim().length < 12) errors.message = "Mô tả ngắn tài sản và việc cần bảo quản.";
  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [refCode, setRefCode] = useState<string | null>(null);

  function set<K extends keyof typeof empty>(key: K, value: (typeof empty)[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    const next = validate(values);
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    const code = `VA-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    const entry = { ...values, code, at: new Date().toISOString() };
    try {
      const prev = JSON.parse(localStorage.getItem("vinacare-inquiries") ?? "[]") as unknown[];
      localStorage.setItem("vinacare-inquiries", JSON.stringify([entry, ...prev].slice(0, 20)));
    } catch {
      /* máy chặn lưu cục bộ vẫn nhận được mã trên màn hình */
    }
    setRefCode(code);
    setValues(empty);
  }

  if (refCode) {
    return (
      <div className="border border-line bg-card p-8" role="status">
        <p className="kicker">Đã ghi nhận</p>
        <h2 className="mt-4 text-3xl text-ink">Hồ sơ của bạn đã vào sổ tiếp nhận.</h2>
        <p className="mt-4 text-muted">
          Mã theo dõi <span className="font-semibold text-ink tabular-nums">{refCode}</span>. Bộ phận trực gọi lại
          trong giờ hành chính. Cần người đến ngay, gọi{" "}
          <a href={company.phoneHref} className="font-semibold text-ink tabular-nums">
            {company.phoneDisplay}
          </a>
          .
        </p>
        <button type="button" className="btn btn-line mt-6" onClick={() => setRefCode(null)}>
          Gửi hồ sơ khác
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="border border-line bg-card p-6 md:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Họ tên" error={errors.name}>
          <input
            value={values.name}
            onChange={(event) => set("name", event.target.value)}
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            className={inputClass(Boolean(errors.name))}
          />
        </Field>
        <Field label="Cơ quan / tổ chức" error={errors.org}>
          <input
            value={values.org}
            onChange={(event) => set("org", event.target.value)}
            autoComplete="organization"
            aria-invalid={Boolean(errors.org)}
            className={inputClass(Boolean(errors.org))}
          />
        </Field>
        <Field label="Điện thoại" error={errors.phone}>
          <input
            value={values.phone}
            onChange={(event) => set("phone", event.target.value)}
            autoComplete="tel"
            inputMode="tel"
            aria-invalid={Boolean(errors.phone)}
            className={inputClass(Boolean(errors.phone))}
          />
        </Field>
        <Field label="Email (nếu có)" error={undefined}>
          <input
            value={values.email}
            onChange={(event) => set("email", event.target.value)}
            autoComplete="email"
            inputMode="email"
            className={inputClass(false)}
          />
        </Field>
        <Field label="Nhóm tài sản" error={undefined}>
          <select
            value={values.asset}
            onChange={(event) => set("asset", event.target.value)}
            className={inputClass(false)}
          >
            {assets.map((asset) => (
              <option key={asset.title}>{asset.title}</option>
            ))}
          </select>
        </Field>
        <Field label="Nhóm hồ sơ" error={errors.stage}>
          <select
            value={values.stage}
            onChange={(event) => set("stage", event.target.value)}
            aria-invalid={Boolean(errors.stage)}
            className={inputClass(Boolean(errors.stage))}
          >
            {stages.map((stage) => (
              <option key={stage}>{stage}</option>
            ))}
          </select>
        </Field>
      </div>
      <div className="mt-5">
        <Field label="Tài sản và việc cần bảo quản" error={errors.message}>
          <textarea
            value={values.message}
            onChange={(event) => set("message", event.target.value)}
            rows={5}
            aria-invalid={Boolean(errors.message)}
            className={inputClass(Boolean(errors.message))}
          />
        </Field>
      </div>
      <button type="submit" className="btn btn-brass mt-6">
        Gửi yêu cầu tiếp nhận
      </button>
    </form>
  );
}

function inputClass(invalid: boolean) {
  return [
    "mt-2 w-full border bg-paper px-3 py-3 text-sm text-ink",
    invalid ? "border-ink" : "border-line",
  ].join(" ");
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <label className="block text-sm font-medium text-ink">
      {label}
      {children}
      {error ? <span className="mt-1 block text-xs font-normal text-brass">{error}</span> : null}
    </label>
  );
}
