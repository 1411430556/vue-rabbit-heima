<div align="center">

# 🐰 Vue-Rabbit 电商平台

![GitHub Repo stars](https://img.shields.io/github/stars/1411430556/vue-rabbit)

![Vue](https://img.shields.io/badge/Vue.js-3.2.45-4FC08D?style=flat-square&logo=vue.js)
![Vite](https://img.shields.io/badge/Vite-4.0.0-646CFF?style=flat-square&logo=vite)
![Pinia](https://img.shields.io/badge/Pinia-2.0.28-yellow?style=flat-square)
![Element Plus](https://img.shields.io/badge/Element_Plus-2.2.28-409EFF?style=flat-square&logo=element)

一个基于 Vue 3、Vite 和 Element Plus 构建的现代化电商平台，提供完整的购物体验。

</div>

## ✨ 功能特性

- 🏠 **首页展示**：轮播图、商品推荐、新品上架等模块
- 🔍 **商品分类**：多级商品分类浏览
- 🛒 **购物车**：商品添加、修改、删除、结算
- 💰 **支付流程**：订单确认、支付、支付结果展示
- 👤 **用户中心**：登录注册、个人信息管理、订单管理
- 🌙 **响应式设计**：适配不同设备屏幕
- 💾 **数据持久化**：使用 Pinia 持久化存储用户数据和购物车
- 🌐 **国际化支持**：支持多语言切换功能

## 🚀 技术栈

- **前端框架**：Vue 3
- **构建工具**：Vite
- **状态管理**：Pinia + 持久化插件
- **路由管理**：Vue Router
- **UI 组件库**：Element Plus
- **HTTP 请求**：Axios
- **CSS 预处理器**：Sass
- **工具库**：VueUse、Dayjs
- **代码规范**：ESLint

## 📦 安装和使用

### 环境要求

- Node.js >= 16.0.0
- npm >= 7.0.0

### 安装依赖

```bash
# 克隆项目
git clone https://github.com/your-username/vue-rabbit.git

# 进入项目目录
cd vue-rabbit

# 安装依赖
npm install
```

### 开发模式

```bash
# 启动开发服务器
npm run dev
```

### 构建生产版本

```bash
# 构建生产版本
npm run build

# 预览生产版本
npm run preview
```

### 代码检查

```bash
# 代码格式检查
npm run lint
```

## 📁 项目结构

```
vue-rabbit/
├── public/             # 静态资源目录（不会被编译处理的静态资源文件）
├── src/                # 源代码目录（项目的主要代码）
│   ├── apis/           # API 接口封装（按模块划分的后端接口请求函数）
│   │   ├── cart.js     # 购物车相关接口
│   │   ├── category.js # 分类相关接口
│   │   ├── home.js     # 首页相关接口
│   │   ├── order.js    # 订单相关接口
│   │   └── user.js     # 用户相关接口
│   ├── assets/         # 项目资源文件（会被打包工具处理的静态资源）
│   │   ├── images/     # 图片资源
│   │   └── icons/      # 图标资源
│   ├── components/     # 公共组件（可复用的UI组件）
│   │   ├── common/     # 通用组件
│   │   ├── library/    # 业务组件库
│   │   └── index.js    # 组件统一注册
│   ├── composables/    # 组合式函数（可复用的逻辑代码）
│   │   ├── useCart.js  # 购物车相关逻辑
│   │   ├── useCategory.js # 分类相关逻辑
│   │   └── useCountDown.js # 倒计时逻辑
│   ├── directives/     # 自定义指令（Vue自定义指令集合）
│   │   ├── lazy.js     # 图片懒加载指令
│   │   └── index.js    # 指令统一注册
│   ├── router/         # 路由配置（Vue Router相关配置）
│   │   ├── index.js    # 路由主配置
│   │   └── routes.js   # 路由表定义
│   ├── stores/         # Pinia 状态管理（全局状态管理模块）
│   │   ├── cartStore.js # 购物车状态
│   │   ├── categoryStore.js # 分类状态
│   │   └── userStore.js # 用户状态
│   ├── styles/         # 全局样式文件（全局CSS样式定义）
│   │   ├── common.scss # 公共样式
│   │   ├── element/    # Element Plus 样式覆盖
│   │   ├── mixins.scss # SCSS混入
│   │   └── var.scss    # 变量定义
│   ├── utils/          # 工具函数（通用工具方法）
│   │   ├── http.js     # Axios封装
│   │   ├── storage.js  # 本地存储封装
│   │   └── vaildate.js # 表单验证工具
│   ├── views/          # 页面组件（按路由划分的页面）
│   │   ├── CartList/   # 购物车页面
│   │   ├── Category/   # 商品分类页面
│   │   ├── Checkout/   # 结算页面
│   │   ├── Detail/     # 商品详情页面
│   │   ├── Home/       # 首页
│   │   │   ├── components/ # 首页专用组件
│   │   │   └── index.vue   # 首页主组件
│   │   ├── Layout/     # 布局组件（包含头部、底部等公共结构）
│   │   ├── Login/      # 登录页面
│   │   ├── Member/     # 会员中心（个人信息、订单管理等）
│   │   │   ├── components/ # 会员中心组件
│   │   │   ├── order.vue   # 订单管理页面
│   │   │   └── info.vue    # 个人信息页面
│   │   ├── Pay/        # 支付页面
│   │   └── SubCategory/# 子分类页面
│   ├── App.vue         # 根组件（应用入口组件）
│   └── main.js         # 入口文件（应用初始化和挂载）
├── vite.config.js      # Vite 配置文件（构建工具配置）
├── jsconfig.json       # JS 配置文件（编辑器配置和路径别名）
├── package.json        # 项目依赖配置（依赖包和脚本命令）
├── .eslintrc.js        # ESLint 配置（代码规范检查配置）
├── .env                # 环境变量（基础环境变量）
├── .env.development    # 开发环境变量
├── .env.production     # 生产环境变量
└── README.md           # 项目说明文档
```

## 🌟 主要功能模块

### 首页
展示轮播图、商品推荐、新品上架等内容，为用户提供直观的购物入口。

### 商品分类
支持多级分类，用户可以通过分类快速找到所需商品。

### 商品详情
展示商品的详细信息，包括图片、价格、规格、评价等，支持加入购物车和立即购买。

### 购物车
管理用户添加的商品，支持修改数量、删除商品、选择结算等操作。

### 订单结算
确认订单信息，包括收货地址、支付方式、优惠券等，进行支付。

### 个人中心
管理个人信息、查看订单记录、管理收货地址等。

## 🔧 自定义配置

请参考 [Vite 配置参考](https://vitejs.dev/config/) 进行自定义配置。

## 🤝 贡献指南

1. Fork 本仓库
2. 创建新的功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交您的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开一个 Pull Request

## 📜 许可证

本项目基于 MIT 许可证发布 - 详情请参见 [LICENSE](LICENSE) 文件。
