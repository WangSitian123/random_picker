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
  "公众号|方珍珠|变美",
  "公众号|风起空云|黄涵幸",
  "公众号|歌白说|深度科普",
  "公众号|古典古少侠|自我成长",
  "公众号|好奇帮|澳门大学伍海燕老师实验室",
  "公众号|可可的科研小站|nature分享",
  "公众号|集智俱乐部|交叉前沿",
  "公众号|knowyourself|自我心理成长",
  "公众号|*雀尾|南科大访谈",
  "公众号|路同学|博士随笔",
  "公众号|脑机接口社区|脑机接口行业动态",
  "公众号|脑科学与智能|脑科学论文解读",
  "公众号|牛娃小镇|南科大趣闻",
  "公众号|女神进化论|变美",
  "公众号|人物|记录这个时代值得记录的人",
  "公众号|神经现实|脑科学与现实",
  "公众号|StudioGloire|南科大访谈",
  "公众号|SUSTecher|南科大访谈",
  "公众号|吐槽青年博士|时评",
  "公众号|心仪脑|脑科学领域科研进展",
  "公众号|一席|演讲",
  "公众号|知识分子|科研生活杂文",
  "公众号|追问nextquestion|脑科学 + 人工智能论文解读",

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
