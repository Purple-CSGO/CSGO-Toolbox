<h1 align="center">CSGO工具箱</h1>

<h4 align="center">一个为CSGO游戏的各个方面带来便利的工具集合</h4>

<div align="center">

[![stars](https://img.shields.io/github/stars/One-Studio/CSGO-Toolbox.svg?style=flat&color=green)](https://github.com/One-Studio/CSGO-Toolbox)
[![fork](https://img.shields.io/github/forks/One-Studio/CSGO-Toolbox.svg?style=flat&color=critical)](https://github.com/One-Studio/CSGO-Toolbox)
[![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?style=flat)](https://github.com/One-Studio/CSGO-Toolbox#捐赠)
[![release](https://img.shields.io/github/release/One-Studio/CSGO-Toolbox.svg?style=flat&color=blue)](https://github.com/One-Studio/CSGO-Toolbox/releases)

</div>

## 说明

CSGO工具箱旨在游戏的各个方面给玩家带来便利，如设置的修改、备份、还原、启动项修改、快捷启动、硬件配置查看、录像下载、管理、观看等等，从而减少玩家在调整设置等事项上花费的时间，节省出更多的时间投入游戏本身。

> 代码闭源，本仓库仅为官网代码

<div align="center" >
  <img src="https://api.star-history.com/svg?repos=One-Studio/CSGO-Toolbox&type=Date" alt="Star History Chart" style="width: 50%;" />
</div>

### 技术栈

框架：[Wails](https://wails.io/) + [Vue.js](https://vuejs.org/)

语言：Go + TypeScript + HTML + CSS ( TailwindCSS + SCSS )

### 兼容系统和平台

| 系统       | x64 | x32 | arm64 |
|:--------:|:---:|:---:|:-----:|
| Win10/11 | ✔️  | 📈  | 📈    |
| ~Win7    | ❌   | ❌   | ❌     |
| Linux    | 📈  | 📈  | 📈    |
| MacOS    | 📈  | 📈  | 📈    |

- ❌ Wails 明确不兼容 除非框架更新支持

- 📈 计划在未来得到支持

## 下载

- <https://github.com/One-Studio/CSGO-Toolbox/releases>

- <https://api.upup.cool/get/csgo-toolbox>

## 路线图

### 画饼清单

#### 核心

- [x] 前后端代码重构
- [ ] 用户活跃度统计
- [ ] 代码格式化 eslint + prettier
- [ ] i18n 多语言支持
- [ ] 启动时的引导，选择路径和偏好设置
- [ ] CFGX 界面图形化操作调整CFG
- [ ] 游戏设置分析、展示与分享
- [ ] 文件操作
  - [ ] 增加删除功能
  - [ ] 增加复制按钮，方便分享
  - [ ] 修改文件名时输入.后没有添加后缀导致修改后不显示文件的bug
- [ ] 赛事信息？

#### 界面

- [x] 升级v3界面（类 Fluent Design）
- [ ] 深色模式 Dark Mode
- [ ] 实时公告
- [ ] 关于页面
- [ ] 广告

#### 工具

- [ ] 启动项组改名
- [ ] 标签式启动项编辑
- [ ] 画面设置图形化切换和多档位
- [ ] 快捷打开目录（CFG、地图、脚本、录像）
- [ ] **控制台指令大全**
- [ ] **控制台指令搜索功能**
- [ ] 职业选手游戏设置&外设（类似Prosetting）
- [ ] 准星生成
- [ ] 击杀条生成

#### 硬件

- [ ] 手动添加外设信息
- [ ] 信息一键截图分享
- [ ] 改进硬件信息（如显示屏品牌型号等）
- [ ] 获得实时硬件信息（CPU主频等）

#### 账号

- [ ] 新增复制和删除功能
- [ ] 工具箱账号系统，登录注册验证

#### 录像

- [x] demo解析数据
- [ ] hlae启动选项 打开对话框选择路径
- [ ] demo组织管理功能 拖拽文件自动解压改名
- [ ] 多文件夹支持
- [ ] demo内置下载与下载的进度展示
- [ ] 通过md5区分不同的demo 过滤合并信息
- [ ] demo name和filename切换 方便标记
- [ ] demo播放 对不支持的路径 复制临时dem文件以正常播放
- [ ] 自动录像生成
- [ ] 联动 HLAE（通过mirv_pgl）
- [ ] 通过 mirv_pgl 读写消息
- [ ] 比赛信息/录像下载

### 做好的饼

- [x] 载入动画
- [x] 核心：Steam账号信息读取
- [x] 核心：设置文件加密
- [x] 核心：steam账号切换免登陆（需要保存密码）
- [x] 核心：更新检查和点击下载安装，大版本强制更新
- [x] 核心：安装包读取已安装路径  
- [x] 核心：单实例
- [x] 核心：广告
- [x] 核心：系统托盘
- [x] 工具：多启动项档位，快捷启动国服、国际服
- [x] 工具：国服反和谐
- [x] 工具：简易雷达
- [x] 工具：VAC验证问题修复
- [x] 录像：文件夹设置、浏览、录像观看和改名
- [x] 录像：HLAE和FFmpeg的安装、更新
- [x] 录像：HLAE启动设置，包括自定义启动和覆盖设置切换
- [x] 录像：分享链接转换功能（协议问题暂时移出，独立到[另一个仓库](https://github.com/One-Studio/csgo-demo-downloader)）
- [x] CFG：备份、欢迎、修改文件名、直接打开 local/cfg 文件
- [x] CFG：云端备份功能（安全问题暂时屏蔽）

## 捐赠

- 支付宝：

<img src="./assets/img/支付宝.png" alt="Alipay" style="zoom: 80%;" />

- 微信：

<img src="./assets/img/微信.png" alt="Wechat" style="zoom:80%;" />
