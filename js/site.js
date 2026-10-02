(function () {
  var btn = document.getElementById("menu-btn");
  var menu = document.getElementById("mobile-menu");
  if (btn && menu) {
    btn.addEventListener("click", function () {
      var open = menu.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.style.overflow = open ? "hidden" : "";
      var label = btn.querySelector(".sr-only");
      if (label) label.textContent = open ? "Đóng menu" : "Mở menu";
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && menu.classList.contains("is-open")) {
        menu.classList.remove("is-open");
        btn.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      }
    });
  }

  var form = document.getElementById("contact-form");
  if (!form) return;

  var success = document.getElementById("contact-success");
  var codeEl = document.getElementById("ref-code");
  var resetBtn = document.getElementById("contact-reset");

  function val(id) {
    var el = document.getElementById(id);
    return el ? el.value.trim() : "";
  }

  function setError(id, message) {
    var input = document.getElementById(id);
    var err = document.getElementById(id + "-error");
    if (input) input.classList.toggle("is-invalid", Boolean(message));
    if (err) {
      err.textContent = message || "";
      err.hidden = !message;
    }
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var name = val("name");
    var org = val("org");
    var phone = val("phone");
    var email = val("email");
    var asset = val("asset");
    var stage = val("stage");
    var message = val("message");
    var ok = true;

    if (name.length < 2) {
      setError("name", "Điền họ tên người liên hệ.");
      ok = false;
    } else setError("name", "");

    if (org.length < 2) {
      setError("org", "Điền cơ quan hoặc tổ chức.");
      ok = false;
    } else setError("org", "");

    if (!/^[0-9+\s().-]{8,16}$/.test(phone)) {
      setError("phone", "Số điện thoại chưa đúng.");
      ok = false;
    } else setError("phone", "");

    if (!stage) {
      setError("stage", "Chọn nhóm hồ sơ.");
      ok = false;
    } else setError("stage", "");

    if (message.length < 12) {
      setError("message", "Mô tả ngắn tài sản và việc cần bảo quản.");
      ok = false;
    } else setError("message", "");

    if (!ok) return;

    var code = "VA-" + new Date().getFullYear() + "-" + Math.floor(1000 + Math.random() * 9000);
    var entry = {
      name: name,
      org: org,
      phone: phone,
      email: email,
      asset: asset,
      stage: stage,
      message: message,
      code: code,
      at: new Date().toISOString(),
    };
    try {
      var prev = JSON.parse(localStorage.getItem("vinacare-inquiries") || "[]");
      localStorage.setItem("vinacare-inquiries", JSON.stringify([entry].concat(prev).slice(0, 20)));
    } catch (e) {}

    if (codeEl) codeEl.textContent = code;
    form.hidden = true;
    if (success) success.hidden = false;
  });

  if (resetBtn) {
    resetBtn.addEventListener("click", function () {
      form.reset();
      form.hidden = false;
      if (success) success.hidden = true;
    });
  }
})();
