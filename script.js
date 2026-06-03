const header = document.querySelector("[data-header]");
const form = document.querySelector("[data-contact-form]");
const formNote = document.querySelector("[data-form-note]");

function syncHeader() {
  header.classList.toggle("scrolled", window.scrollY > 18);
}

window.addEventListener("scroll", syncHeader, { passive: true });
syncHeader();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const stage = data.get("stage");
  const need = String(data.get("need") || "").trim();

  formNote.textContent = need
    ? `已记录：${stage} / ${need}。建议下一步输出项目诊断清单、页面结构和自动化流程图。`
    : "请补充最想先解决的问题，方便匹配海底轮项目的优先交付模块。";
});
