(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{600:function(e,t,a){"use strict";a.r(t);var s=a(6),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",{attrs:{align:"center"}},[a("img",{attrs:{width:"500",src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2d32c1b0135a4c1583fd02e45f0496b1~tplv-k3u1fbpfcp-watermark.image"}})]),e._v(" "),a("blockquote",[a("p",[e._v("要一直向上，要保持满腔的热血")])]),e._v(" "),a("h2",{attrs:{id:"背景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[e._v("#")]),e._v(" 背景")]),e._v(" "),a("p",[e._v("项目组有个类似富文本编辑器功能，在IE浏览器下需要支持打印。为解决打印兼容性问题，需要一套根据Html输出PDF的服务。")]),e._v(" "),a("p",[e._v("so, 想直接看结果的： "),a("a",{attrs:{href:"http://118.25.49.69",target:"_blank",rel:"noopener noreferrer"}},[e._v("Html转PDF 在线预览"),a("OutboundLink")],1),e._v("  😎😎😎")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/363c0d41e7964058a1cb5cda7d97b24b~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),e._v(" "),a("h2",{attrs:{id:"调研"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#调研"}},[e._v("#")]),e._v(" 调研")]),e._v(" "),a("p",[e._v("html转pdf方案有很多，怎么选择也看各位的具体情况")]),e._v(" "),a("h3",{attrs:{id:"_1、chrome浏览器自带"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、chrome浏览器自带"}},[e._v("#")]),e._v(" 1、chrome浏览器自带")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a79c4d31f122416ab0e6046be3da88a8~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),e._v(" "),a("h4",{attrs:{id:"缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[e._v("#")]),e._v(" 缺点：")]),e._v(" "),a("ul",[a("li",[e._v("需要用户自己点击")]),e._v(" "),a("li",[e._v("用户需要使用chrome等支持的浏览器")]),e._v(" "),a("li",[e._v("打印默认是全局打印\n"),a("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/de59bb0fb31c48608b2d32f0f6aea9f6~tplv-k3u1fbpfcp-watermark.image",alt:""}})])]),e._v(" "),a("p",[a("strong",[e._v("广告")]),e._v("：局部打印可以参考我的插件😝😝😝: "),a("a",{attrs:{href:"https://github.com/alexwjj/vue-iframe-print",target:"_blank",rel:"noopener noreferrer"}},[e._v("vue-iframe-print"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("code",[e._v("npm install vue-iframe-print")]),e._v(" 在需要打印的DOM上加上"),a("code",[e._v("v-print")]),e._v("即可实现局部打印")]),e._v(" "),a("h3",{attrs:{id:"_2、html2canvas-jspdf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、html2canvas-jspdf"}},[e._v("#")]),e._v(" 2、html2canvas + jsPdf")]),e._v(" "),a("p",[e._v("实现可参考："),a("a",{attrs:{href:"https://segmentfault.com/a/1190000009211079",target:"_blank",rel:"noopener noreferrer"}},[e._v("Javascript 将html转成pdf,下载,支持多页哦（html2canvas 和 jsPDF）"),a("OutboundLink")],1)]),e._v(" "),a("h4",{attrs:{id:"缺点-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缺点-2"}},[e._v("#")]),e._v(" 缺点：")]),e._v(" "),a("ul",[a("li",[e._v("html2canvas插件在IE的兼容性问题")]),e._v(" "),a("li",[e._v("清晰度问题")]),e._v(" "),a("li",[e._v("分页问题")]),e._v(" "),a("li",[e._v("文字图片截断问题")])]),e._v(" "),a("h3",{attrs:{id:"_3、node服务端转换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、node服务端转换"}},[e._v("#")]),e._v(" 3、node服务端转换")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://wkhtmltopdf.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("wkthtmltopdf"),a("OutboundLink")],1),e._v(" 坑较多~")]),e._v(" "),a("li",[a("a",{attrs:{href:"http://amirraminfar.com/phantomjs-node/#/",target:"_blank",rel:"noopener noreferrer"}},[e._v("phantomjs"),a("OutboundLink")],1),e._v("  基于webkit的无头浏览器,社区使用的不多，很久没更新了，可以深度了解下")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://zhaoqize.github.io/puppeteer-api-zh_CN/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Puppeteer"),a("OutboundLink")],1),e._v(" + Headless Chrome  社区里使用该方案的也比较多")])]),e._v(" "),a("p",[a("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/96cd59cc46834b22a7b3c3dd2ba864c7~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),e._v(" "),a("h2",{attrs:{id:"选用egg-puppeteer-😉😉😉"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选用egg-puppeteer-😉😉😉"}},[e._v("#")]),e._v(" 选用Egg + Puppeteer 😉😉😉")]),e._v(" "),a("p",[e._v("如果你想自己重头开始搭建，可以参考："),a("a",{attrs:{href:"https://blog.csdn.net/zhai_865327/article/details/104792646",target:"_blank",rel:"noopener noreferrer"}},[e._v("puppeteer 生成pdf，绝对解决你的需求"),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"部署-敲黑板-❗❗❗"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署-敲黑板-❗❗❗"}},[e._v("#")]),e._v(" 部署（敲黑板）❗❗❗")]),e._v(" "),a("p",[e._v("当你已经完成了基本功能以后，高高兴兴的以为就剩下最后一步了，那么坑来了~")]),e._v(" "),a("h3",{attrs:{id:"_1、在-docker-中使用-puppeteer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、在-docker-中使用-puppeteer"}},[e._v("#")]),e._v(" 1、在 Docker 中使用 Puppeteer")]),e._v(" "),a("p",[e._v("官方文档指出“在 Docker 中使用 headless Chrome 并使其运行起来可能会非常棘手”。官方文档有"),a("a",{attrs:{href:"https://github.com/puppeteer/puppeteer/blob/main/docs/troubleshooting.md#running-puppeteer-in-docker",target:"_blank",rel:"noopener noreferrer"}},[e._v("疑难解答部分"),a("OutboundLink")],1),e._v("，你可以找到有关用 Docker 安装 puppeteer 的所有必要信息。")]),e._v(" "),a("p",[e._v("如果你在 Alpine 镜像上安装 Puppeteer，请确保在看到页面的这一部分时再向下滚动一点。否则你可能会忽略一个事实：你无法运行最新的 Puppeteer 版本，并且你还需要用一个标记禁用 shm")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const browser = await puppeteer.launch({\n headless: true,\n args: ['--disable-dev-shm-usage']\n});\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("p",[e._v("否则，Puppeteer 子进程可能会在正常启动之前耗尽内存。")]),e._v(" "),a("h3",{attrs:{id:"_2、在centos中部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、在centos中部署"}},[e._v("#")]),e._v(" 2、在centOS中部署")]),e._v(" "),a("h3",{attrs:{id:"第一步-安装chrome"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第一步-安装chrome"}},[e._v("#")]),e._v(" 第一步：安装chrome")]),e._v(" "),a("p",[e._v("因为是直接使用的Puppeteer包，需要依赖于chrome内核，所以你在启动项目"),a("code",[e._v("npm install")]),e._v(" 的时候会一直卡在"),a("code",[e._v("node install.js")]),e._v("这里，因为china网络问题和chrome太大，你很难在服务器上直接部署成功。")]),e._v(" "),a("p",[e._v("puppeteer支持本地chrome安装链接，所以可以手动指定")]),e._v(" "),a("p",[e._v("跳过chrome安装："),a("code",[e._v("npm install puppeteer --ignore-scripts")])]),e._v(" "),a("p",[e._v("chrome安装具体可参考："),a("a",{attrs:{href:"https://blog.csdn.net/Zeng__Yi/article/details/105661354",target:"_blank",rel:"noopener noreferrer"}},[e._v("阿里云服务器（centos7）的使用（7）一Puppeteer导出PDF的部署和使用"),a("OutboundLink")],1)]),e._v(" "),a("h4",{attrs:{id:"坑出没-warning"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#坑出没-warning"}},[e._v("#")]),e._v(" 坑出没，warning~")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const browser = await puppeteer.launch({\n      args: ['--disable-dev-shm-usage', '--no-sandbox'],\n      headless:true,\n      // linux chrome的默认安装路径\n      executablePath:'/opt/google/chrome/chrome'\n  });\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br")])]),a("p",[e._v("这里写的puppeteer启动路径"),a("code",[e._v("executablePath")]),e._v("是linux下chrome的安装路径，如果换了本地，不同的系统对应的路径可能都不一样~  千辛万苦找了一个包，很好用~ "),a("code",[e._v("npm install carlo")])]),e._v(" "),a("p",[e._v("关于"),a("code",[e._v("carlo")]),e._v("，可以去了解下："),a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/48319397",target:"_blank",rel:"noopener noreferrer"}},[e._v("『Carlo』 一个新的 Electron ?"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("'use strict';\nconst puppeteer = require('puppeteer');\n\nconst findChrome = require('../../node_modules/carlo/lib/find_chrome');\n\nlet browser = null;\n\nmodule.exports = async () => {\n  if (!browser) {\n    const findChromePath = await findChrome({});\n    // browser = await puppeteer.launch();\n    browser = await puppeteer.launch({\n      headless: true,\n      // chrome的默认安装路径\n      executablePath: findChromePath.executablePath,\n      args: [\n        '--disable-gpu',\n        '--disable-dev-shm-usage',\n        '--disable-setuid-sandbox',\n        '--no-first-run',\n        '--no-sandbox',\n        '--no-zygote',\n        '--single-process',\n      ],\n    });\n  }\n  return browser;\n};\n\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br"),a("span",{staticClass:"line-number"},[e._v("24")]),a("br"),a("span",{staticClass:"line-number"},[e._v("25")]),a("br"),a("span",{staticClass:"line-number"},[e._v("26")]),a("br"),a("span",{staticClass:"line-number"},[e._v("27")]),a("br"),a("span",{staticClass:"line-number"},[e._v("28")]),a("br"),a("span",{staticClass:"line-number"},[e._v("29")]),a("br")])]),a("h3",{attrs:{id:"第二步-部署脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第二步-部署脚本"}},[e._v("#")]),e._v(" 第二步：部署脚本")]),e._v(" "),a("p",[e._v("虽然egg有自己的进程管理，但是这里还是推荐使用pm2，在项目根目录下")]),e._v(" "),a("p",[e._v("新建 deploy.sh")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# 部署脚本\ntype node\nnpm install puppeteer --ignore-scripts\nnpm install\npm2 kill\n# 睡眠，避免出现错误：Spawning PM2 daemon with pm2_home\nsleep 2\npm2 start pm2.config.json\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br")])]),a("p",[e._v("新建 pm2.config.json")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{\n  "apps": [\n    {\n      "name": "html-to-pdf",\n      "script": "npm",\n      "args": "run start",\n      "log_date_format": "YYYY-MM-DD HH:mm:ss",\n      "exec_mode": "fork",\n      "max_memory_restart": "500M"\n    }\n  ]\n}\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br")])]),a("h3",{attrs:{id:"一切就绪-启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一切就绪-启动"}},[e._v("#")]),e._v(" 一切就绪，启动！！！")]),e._v(" "),a("p",[e._v("在服务器的项目中执行"),a("code",[e._v("sh deploy.sh")]),e._v(", pm2显示启动成功即可")]),e._v(" "),a("p",[e._v("这个时候服务是没问题了，但是其他问题就来了，因为服务器上是没有中文字体库的~所以生成的pdf，中文字体全是乱码")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1eecfaf7894f4666b1399d3320832291~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),e._v(" "),a("h3",{attrs:{id:"第三步-安装字体"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第三步-安装字体"}},[e._v("#")]),e._v(" 第三步：安装字体")]),e._v(" "),a("p",[e._v("一、安装fontconfig\n"),a("code",[e._v("yum -y install fontconfig")]),e._v("\n这个命令执行完成之后，就可以在"),a("code",[e._v("/usr/share")]),e._v("文件夹里面看到fonts和fontconfig\n二、添加中文字体库")]),e._v(" "),a("ul",[a("li",[e._v("从window的"),a("code",[e._v("C:\\Windows\\Fonts")]),e._v("里面字体拷贝一份，或者只选择你需要的")]),e._v(" "),a("li",[e._v("在CentOS的"),a("code",[e._v("/usr/share/fonts")]),e._v("新建一个叫chinese的文件夹")]),e._v(" "),a("li",[e._v("然后把刚刚拷贝字体放到CentOS的"),a("code",[e._v("/usr/share/fonts/chinese")]),e._v("里面")]),e._v(" "),a("li",[e._v("修改chinese目录的权限。"),a("code",[e._v("chmod -R 775 /usr/share/fonts/chinese")])]),e._v(" "),a("li",[e._v("接下来需要安装"),a("code",[e._v("ttmkfdir")]),e._v("来搜索目录中所有的字体信息，并汇总生成fonts.scale文件，输入命令"),a("code",[e._v("yum -y install ttmkfdir")])]),e._v(" "),a("li",[e._v("执行ttmkfdir命令， "),a("code",[e._v("ttmkfdir -e /usr/share/X11/fonts/encodings/encodings.dir")])]),e._v(" "),a("li",[e._v("打开字体配置文件，"),a("code",[e._v("vi /etc/fonts/fonts.conf")]),e._v("，添加下面这一段")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("\x3c!-- Font directory list --\x3e\n<dir>/usr/share/fonts</dir>\n<dir>/usr/share/X11/fonts/Type1</dir>\n<dir>/usr/share/X11/fonts/TTF</dir>\n<dir>/usr/local/share/fonts</dir>\n<dir>/usr/local/share/fonts/chinese</dir>\n<dir>~/.fonts</dir>\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br")])]),a("ul",[a("li",[e._v("刷新内存中的字体缓存，fc-cache")]),e._v(" "),a("li",[e._v("看一下现在机器上已经有了刚才添加的字体。fc-list :lang=zh")])]),e._v(" "),a("h2",{attrs:{id:"大功告成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#大功告成"}},[e._v("#")]),e._v(" 大功告成")]),e._v(" "),a("p",[e._v("这个时候基本就没问题了, 后续遇到的问题再更新。")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/967055123abf44c794f39a474474e041~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),e._v(" "),a("h2",{attrs:{id:"最后-ie加载pdf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最后-ie加载pdf"}},[e._v("#")]),e._v(" 最后：IE加载PDF")]),e._v(" "),a("p",[e._v("需要安装下adobe reader\n"),a("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c649e383990e4f3787516bbba6a8f44f~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),e._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[e._v("#")]),e._v(" 参考")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://segmentfault.com/a/1190000009211079",target:"_blank",rel:"noopener noreferrer"}},[e._v("Javascript 将html转成pdf,下载,支持多页哦（html2canvas 和 jsPDF）"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.cn/post/6844903612993241101",target:"_blank",rel:"noopener noreferrer"}},[e._v("html转PDF文件，完美解决方案——jsPDF,htmltocanvas,pdfmake,wkhtmltopdf,TuesPechkin,snappy"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/158204817",target:"_blank",rel:"noopener noreferrer"}},[e._v("利用puppeteer和egg.js实现html2pdf、html2png。"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://zhaoqize.github.io/puppeteer-api-zh_CN/#?product=Puppeteer&version=v5.5.0&show=api-pagepdfoptions",target:"_blank",rel:"noopener noreferrer"}},[e._v("page.pdf([options])"),a("OutboundLink")],1)])]),e._v(" "),a("p",[a("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dec3b75bd7a24e4bbbc89040d69ec311~tplv-k3u1fbpfcp-watermark.image",alt:""}})])])}),[],!1,null,null,null);t.default=r.exports}}]);