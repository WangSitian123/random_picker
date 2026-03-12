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
  "公众号|脑机观澜|脑机接口产业动态",
  "B站|本子在隔壁|心理学",
  "B站|智能路障|深度思考",
  "B站|姜Dora在此|访谈",
  "B站|TheS艾斯|个人成长",
  "B站|一席精选|演讲",
  "B站|取景框看世界|大学生存技巧",
  "B站|贺宇宙|个人成长-短视频",
  "B站|四象studio|有趣科普",
  "B站|愚者说|个人成长",
  "B站|双双今天更好了嘛|日常vlog",
  "B站|猴猴说话|心理学",
  "B站|不加醋的氨基酸|职场经验分享",
  "B站|与书籍度过漫长岁月|个人成长",
  "B站|亿点点不一样|我们不是科普，我们与你一起发现",
  "B站|云社_|相声",
  "B站|歌白说Geslook|深度科普",
  "B站|王阿华的解忧平行宇宙|心理学",
  "B站|毕导|有趣科普",
  "B站|毕的二阶导|有趣科普",
  "B站|新石器公园|深度科普",
  "B站|运动与科学|运动科普",
  "B站|小蜜桃mitao|个人成长-唠嗑型",
  "B站|王一快|个人成长-聊天型",
  "B站|圆梦指南|运动康复",
  "B站|切片计划|影像深度分析-女性",
  "B站|情节严重社|深度科普",
  "B站|运动康复胡老师|运动康复",
  "B站|渤海小吏|人性深度分析",
  "B站|猴猴做大圣|穿搭",
  "B站|李冉在冥想|冥想方面深度思考",
  "B站|咸鱼堡的医药海滩|行业动态",
  "B站|慢慢学的四饼|心理学",
  "B站|王木头学科学|深度科普",
  "B站|詹青云解忧摊粉丝|阿詹阿庞直播片段",
  "B站|北美运动学博士Bruce_PhD|运动学科普",
  "B站|帅你一脸毛蛋|外在提升",
  "B站|小超人在巴黎X|皮肤",
  "B站|妙招姐|生活小技巧",
  "B站|庞颖|辩论",
  "B站|阿詹|辩论",
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
