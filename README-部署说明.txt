Michael Harrington — GitHub Pages 完整网站
目标网址：https://DRMichaelHarrington.github.io/

一、文件内容
index.html          首页
about.html          人物介绍
faq.html            15 组完整展开问答，每个答案三段
insights.html       10 篇文章的目录
articles/           10 个独立文章页，每篇正文约 1,000 个英文单字
css/style.css       完整响应式样式
js/main.js          手机菜单及可选照片替换功能
images/             默认插图、图标及未来照片的位置
robots.txt          爬虫说明
sitemap.xml         14 个正式页面的网址清单
404.html            找不到页面时的引导页
.nojekyll           GitHub Pages 静态文件标记（上传时请保留）

二、发布到 GitHub Pages
1. 在 GitHub 建立名为 DRMichaelHarrington.github.io 的仓库。
   使用默认个人域名时，仓库名前半部分应与实际 GitHub 用户名相同。
2. 解压压缩包，把 index.html、about.html、所有文件夹及其他文件放到仓库根目录。
   不要把整个网站再套进一层子文件夹。
3. 上传并提交文件后，进入仓库 Settings → Pages。
4. Source 选择 Deploy from a branch，Branch 选择 main，目录选择 / (root)。
5. 保存，等待 GitHub 完成发布，再打开目标网址检查。

本压缩包是可上传的网站文件，未替你登入 GitHub、建立仓库或发布上线。
不需要 npm、数据库、付费插件或额外构建步骤。
本地可双击 index.html 检查基础页面；也可使用任意静态服务器预览。

三、放入图片
现在的网站已包含 10 张不同的几何风格 SVG 文章配图，以及人物位置的姓名字母图。
这些是默认排版素材，不是人物原始照片。未加入照片时，网站仍然完整显示。

将你的照片改为下列文件名，放进 images 文件夹并上传到 GitHub：
portrait.jpg    首页人物照片，建议直式 4:5，至少 900 × 1125 像素
about.jpg       About 人物照片，建议直式 4:5，至少 900 × 1125 像素
article-01.jpg  数据信息主题
article-02.jpg  量化研究与市场背景主题
article-03.jpg  量化模型主题
article-04.jpg  研究准备主题
article-05.jpg  人工智能与人类理解主题
article-06.jpg  教育与开放知识主题
article-07.jpg  知识与社会价值主题
article-08.jpg  智能研究伙伴主题
article-09.jpg  个人介绍主题
article-10.jpg  研究沟通主题

文章图片建议横式 2:1，至少 1200 × 600 像素。16:9 图片也可以，会居中裁切。
请使用真正的 JPEG 文件，不要把 PNG 文件仅改扩展名为 .jpg。
文件名区分大小写，必须全部小写，与上表完全一致。
加入这些 JPG 后，网站会自动替换默认 SVG。不需要逐页更改 HTML。
没有某张 JPG 时，对应默认图仍然显示，不会出现破图。
若浏览器禁用 JavaScript，网站会保持显示默认 SVG，正文与导航仍然可用。
只需更新照片时，保留其他网站文件及原有 SVG 即可。

favicon.svg 是暂用 MH 姓名字母图标，不代表已获授权的品牌商标。
social-cover.png 是分享链接时的默认横式封面。

四、页面信息
所有正式页面均使用英文，含独立标题、描述、canonical URL 与社交分享信息。
FAQ 和文章分别含对应结构化资料；正式正文直接写在 HTML 内，不依赖 JavaScript 加载。
不存在后台、账号、编辑器或页面编辑模式。

五、内容依据
文章由提供的四份文件中的主题重新撰写，涵盖研究、AI、准备、教育、社会价值等。
没有将未经独立证实的绩效数字、学位、机构关系或师承关系写成首页宣传承诺。
补充可靠的履历或相关资料后，可继续更新 About 及文章内容。

六、检查记录
提交包已检查：HTML 结构、内部页面链接、默认图片路径、文章正文单字数、FAQ 数量与段落、
页面 metadata、结构化资料、XML 网站地图、JavaScript 语法，以及 ZIP 完整性。
本环境未提供浏览器验证能力，未运行真实浏览器的视觉与交互测试。

GitHub 官方发布步骤参考：
https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
