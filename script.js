const solutionContent = {
  store: {
    kicker: "门店 AI 自动化官网系统",
    title: "适合美业、养生、汽车服务、教育培训、本地生活和招商加盟",
    copy:
      "把官网展示、AI 客服、产品卡项、预约核销、复购提醒、素材生成和经营看板整合为一个门店业务入口。客户扫码就能咨询、领券、预约、支付和复购，门店端只需要处理确认与服务。",
    points: [
      "产品套餐、体验券、次卡和月卡统一管理",
      "AI 客服自动回答常规问题，敏感内容转人工",
      "渠道二维码追踪来源、店员、素材和成交关系",
    ],
  },
  enterprise: {
    kicker: "企业部门 AI 效率系统",
    title: "适合销售、客服、市场、人事、运营和管理层",
    copy:
      "围绕部门重复工作搭建 AI 助手和自动化流程，让资料收集、客户跟进、内容生产、会议纪要、日报周报和经营分析形成标准工作流。",
    points: [
      "企业知识库、表单、工单和客户资料统一沉淀",
      "按角色配置权限、任务模板和审批节点",
      "减少重复劳动，让团队把时间放回客户和业务判断",
    ],
  },
  agency: {
    kicker: "服务商可复制交付平台",
    title: "适合咨询、代运营、培训、招商和行业解决方案团队",
    copy:
      "把服务商的方法论拆成标准 Skill、页面模板、交付清单和复盘报告，形成报价清晰、交付稳定、可持续续费的企业服务产品。",
    points: [
      "需求诊断、方案生成、项目进度和交付报告一体化",
      "沉淀行业模板，降低每个客户的定制成本",
      "从项目收入升级为搭建费、月服务费和运营托管费",
    ],
  },
};

const header = document.querySelector("[data-header]");
const tabs = document.querySelectorAll("[data-tab]");
const panel = document.querySelector("[data-panel]");
const form = document.querySelector("[data-contact-form]");
const formNote = document.querySelector("[data-form-note]");

function syncHeader() {
  header.classList.toggle("scrolled", window.scrollY > 18);
}

function renderSolution(key) {
  const item = solutionContent[key];
  panel.innerHTML = `
    <div>
      <p class="panel-kicker">${item.kicker}</p>
      <h3>${item.title}</h3>
      <p>${item.copy}</p>
    </div>
    <ul>
      ${item.points.map((point) => `<li>${point}</li>`).join("")}
    </ul>
  `;
}

window.addEventListener("scroll", syncHeader, { passive: true });
syncHeader();

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");
    renderSolution(tab.dataset.tab);
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const target = data.get("target");
  const need = String(data.get("need") || "").trim();

  formNote.textContent = need
    ? `已记录：${target} / ${need}。建议下一步输出诊断清单、页面结构和自动化流程图。`
    : "请补充当前最想解决的问题，方便匹配适合的行业样板和自动化服务。";
});
