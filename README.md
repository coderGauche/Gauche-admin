# Gauche-Admin

### 介绍 :books:

:rocket: :rocket: :rocket: Gauche Admin 基于 React18、React-Router v6、React-Hooks、Redux、TypeScript、Vite3、monorepo、Ant-Design5.0 开源的一套后台管理框架。

### 在线预览地址 👀

- Link：http://xxxxx.cn

### Git 仓库地址 (欢迎 Star⭐)

- GitHub：https://github.com/coderGauche/Gauche-admin

### 安装使用步骤 📑

- **Clone：**

```text
# GitHub
git clone https://github.com/HalseySpicy/Hooks-Admin.git
```

- **Install：**

````text
npm install
pnpm install  ✅推荐
cnpm install

# pnpm install 安装失败，请升级 nodejs 到 16 以上，或尝试使用以下命令：
npm install --registry=https://registry.npm.taobao.org

- **Run：**

```text
pnpm run dev
pnpm run serve
````

- **Build：**

```text
# 开发环境
pnpm run build:dev

# 测试环境
pnpm run build:test

# 生产环境
pnpm run build:pro
```

- **Lint：**

```text
# eslint 检测代码
pnpm run lint:eslint

# prettier 格式化代码
pnpm run lint:prettier

# stylelint 格式化样式
lint:stylelint
```

- **commit：**

```text
# 提交代码（会自动执行 lint:lint-staged 命令）
pnpm run commit
```

### 四、文件资源目录 📚

```text
Geeker-Admin
├─ .vscode                # vscode推荐配置
├─ public                 # 静态资源文件（忽略打包）
├─ src
│  ├─ api                 # API 接口管理
│  ├─ assets              # 静态资源文件
│  ├─ components          # 全局组件
│  ├─ config              # 全局配置项
│  ├─ enums               # 项目枚举
│  ├─ hooks               # 常用 Hooks
│  ├─ language            # 语言国际化
│  ├─ layouts             # 框架布局
│  ├─ routers             # 路由管理
│  ├─ redux               # redux store
│  ├─ styles              # 全局样式
│  ├─ typings             # 全局 ts 声明
│  ├─ utils               # 工具库
│  ├─ views               # 项目所有页面
│  ├─ App.tsx             # 入口页面
│  ├─ main.tsx            # 入口文件
│  └─ env.d.ts            # vite 声明文件
├─ .editorconfig          # 编辑器配置（格式化）
├─ .env                   # vite 常用配置
├─ .env.development       # 开发环境配置
├─ .env.production        # 生产环境配置
├─ .env.test              # 测试环境配置
├─ .eslintignore          # 忽略 Eslint 校验
├─ .eslintrc.js           # Eslint 校验配置
├─ .gitignore             # git 提交忽略
├─ .prettierignore        # 忽略 prettier 格式化
├─ .prettierrc.js         # prettier 配置
├─ .stylelintignore       # 忽略 stylelint 格式化
├─ .stylelintrc.js        # stylelint 样式格式化配置
├─ CHANGELOG.md           # 项目更新日志
├─ commitlint.config.js   # git 提交规范配置
├─ index.html             # 入口 html
├─ LICENSE                # 开源协议文件
├─ lint-staged.config     # lint-staged 配置文件
├─ package-lock.json      # 依赖包包版本锁
├─ package.json           # 依赖包管理
├─ postcss.config.js      # postcss 配置
├─ README.md              # README 介绍
├─ tsconfig.json          # typescript 全局配置
└─ vite.config.ts         # vite 配置
```
