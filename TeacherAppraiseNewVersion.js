/*
按F12调出控制台
选择console
复制这个文本
点击进入评价
在console黏贴文本
评价成功
*/
var num;
var str;
var iframe = document.getElementById('Frame1').contentWindow

//随机评价非常赞同及赞同
//num为评价序号,从1~15共15个,从1开始计数
//Math.floor(Math.random() * 2)+1为评价选项数字,从非常赞同到非常不赞同为1~7,本评价设置为随机1或2
for (num = 1; num <= 15; num++) {
    str = "pj0601id_" + num + "_" + (Math.floor(Math.random() * 2) + 1);
    iframe.document.getElementById(str).click();
}

var str_to_teacher = ["不计辛勤一砚寒，桃熟流丹，李熟技残，种花容易树人难。幽谷飞香不一般，诗满人间，画满人间，英才济济笑开颜。", "您讲的课，是那样丰富多采，每一个章节都仿佛在我面前打开了一扇窗户，让我看到了一个斑斓的新世界……", "信念之火在校园里焚烧着愚昧和无知。岁月证实你的耕耘是神圣的。你拥有春天，拥有阳光，拥有花朵；在永恒的歌声中，成为果实！", "您工作在今朝，却建设着祖国的明天；您教学在课堂，成就却在祖国的四面八方。", "你晶莹，是人类灵魂的雕塑大师和巨匠；你诚挚，毫无自私之心地默默奉献青春，在讲坛上愿作一滴滋润参天大树根基的水珠；你无畏，历经磨难却依然顽强不息地开拓前进，为整个中华民族的振兴而奋斗；你奋进，站在时代的潮头之上，呼唤着一个灿烂的未来……", "用语言播种，用彩笔耕耘，用汗水浇灌，用心血滋润，这就是我们敬爱的老师崇高的劳动。", "东宫白庶子，南寺远禅师。何处遥相见，心无一事时。", "诲尔谆谆，听我藐藐。", "身为世范，为人师表。", "仰之弥高，钻之弥坚", "师者所以传道授业解惑也。", "三尺讲台，三寸舌，三寸笔，三千桃李。十年树木，十载风，十载雨，十万栋梁。"];
var num_to_teacher = Math.floor(Math.random() * 11);

iframe.document.getElementById('jynr').value = str_to_teacher[num_to_teacher]; //输入评议
iframe.document.getElementById('tj').click() //退出
