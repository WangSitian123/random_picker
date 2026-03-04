const creators = [];

function addCreator(platform, name, desc) {
  const item = {
    platform: String(platform || "").trim(),
    name: String(name || "").trim(),
    desc: String(desc || "").trim(),
  };

  if (!item.platform || !item.name || !item.desc) return;
  creators.push(item);
}

function addCreatorFromLine(line) {
  const parts = String(line || "")
    .split(/[|｜]/)
    .map((s) => s.trim());
  if (parts.length < 3) return;
  addCreator(parts[0], parts[1], parts.slice(2).join(" | "));
}

// 便捷新增：只要写“平台|名字|描述”即可
[
  "公众号|AI帝国|AI信息",
  "公众号|保研岛|保研信息",
  "公众号|波动智能|AI + AI agent信息",
  "公众号|大谋侠|国际局势",
  "公众号|单读|深度阅读",
  "公众号|单读|深度阅读",
  "公众号|二当家李多余|自我成长",
].forEach(addCreatorFromLine);

const pickBtn = document.getElementById("pickBtn");
const resultEl = document.getElementById("result");

function renderResult(item) {
  resultEl.innerHTML = `
    <p class="meta"><strong>平台：</strong>${item.platform}</p>
    <p class="meta"><strong>名字：</strong>${item.name}</p>
    <p class="meta"><strong>描述：</strong>${item.desc}</p>
  `;
}

function pickRandom() {
  if (!creators.length) {
    resultEl.innerHTML = '<p class="placeholder">暂无可选数据，请先在脚本中添加</p>';
    return;
  }

  const index = Math.floor(Math.random() * creators.length);
  renderResult(creators[index]);
}

pickBtn.addEventListener("click", pickRandom);
