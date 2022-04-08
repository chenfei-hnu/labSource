# 说明

React + React-Router + Typescript + ant design + webpack4.0
使用 React hook 进行开发

# 项目运行

```
# 安装项目依赖
yarn

# 项目启动
yarn start

# 项目构建
yarn build

```

# 业务介绍

目录结构

    ├── build                   // 编译结果目录
    ├── .husky                  // git代码提交前husky验证配置
    ├── config                  // webpack 配置目录
    │   ├── webpack.base.ts     // 公用配置
    │   ├── webpack.dev.ts      // 开发时配置
    │   └── product.dev.js      // 打包时配置
    ├── mock                    // mock 数据
    ├── script                  // node.js 脚本
    ├── src                     // 源码目录
    │   ├── basicLayout         // 布局组件
    │   ├── components          // 公共组件
    │   ├── config              // 项目配置，路由、sideMenu等等
    │   ├── models              // 全局状态model
    │   ├── pages               // 页面文件目录
    │   │   └── index
    │   │       ├── index.tsx   // 页面逻辑
    │   │       ├── index.less  // 页面样式
    │   ├── router              // 路由
    │   ├── styles              // 全局样式文件
    │   ├── utils               // 常用工具类
    │   ├── index.tsx           // 入口文件
    │   ├── test-config         // jest相关配置
    ├── .eslintrc.js            // eslint 配置文件
    ├── .gitignore              // git提交忽略配置
    ├── .prettierrc.json        // prettier 配置
    ├── .stylelintrc            // stylelintrc 配置
    ├── .global.d.ts            // Typescript 全局声明
    ├── postcss.config.js       // postcss 配置
    ├── commitlint.config.js    // git提交信息校验配置
    └── tsconfig.json           // Typescript 配置

# 依赖介绍

- 使用 Eslint Stylelint 进行代码规范化并配合 Beautify，Eslint，Prettier ，stylelint ，Vetur 等 VSCode 插件，将 VSCode 做如下修改进行自动格式化

```
{
  // 每次保存自动格式化
  "editor.formatOnSave": true,
  // 每次保存的时候将代码按eslint格式进行修复
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll.stylelint": true
  },
  // vue文件默认格式化方式vetur
  "[vue]": {
    "editor.defaultFormatter": "octref.vetur"
  },
  // vetur格式化配置
  "vetur.format.defaultFormatter.html": "js-beautify-html",
  "vetur.format.options.tabSize": 2,
  "vetur.format.defaultFormatterOptions": {
    "js-beautify-html": {
      "wrap_attributes": "auto", // props属性超过一定长度换行
      "wrap_line_length": 70, // 超过70个字符换行，主要用来限制同一行props属性不超过3个
      "end_with_newline": false, // 不要求文件最后必须换行
      "semi": true, //设置分号
      "singleQuote": true, // 建议使用双引号而不是单引号
    },
    "prettier": {
      "trailingComma": "none", // 无尾随逗号
      "singleQuote": true, // 建议使用双引号而不是单引号
    },
  },
  "prettier.trailingComma": "none", // tsx没有生效，需要单独配置一次
  "vetur.format.defaultFormatter.js": "vscode-typescript", //让vue中的js按编辑器自带的ts格式进行格式化
  "javascript.format.insertSpaceBeforeFunctionParenthesis": true, // 函数前加上空格 只有在默认vetur的时候生效
  // js文件默认格式化方式 和vue中的js保持一致使用编辑器自带的ts格式
  "[javascript]": {
    "editor.defaultFormatter": "vscode.typescript-language-features"
  },
  // tsx
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  // json文件默认格式化方式prettier
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  // css文件默认格式化方式prettier
  "[css]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  // css文件默认格式化方式prettier
  "[scss]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[less]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  // 防止编辑器内置linter与插件冲突设置
  "css.validate": false,
  "less.validate": false,
  "scss.validate": false,
  // 启用stylelint插件
  "stylelint.enable": true,
  "stylelint.validate": [
    "css",
    "less",
    "postcss",
    "scss",
    "vue",
    "sass"
  ],
  // -----------------------其他自行配置-----------------------
  //关闭快速预览
  "editor.minimap.enabled": false,
  // 字体大小
  // 控制折行方式 - "on" (根据视区宽度折行)
  "editor.wordWrap": "on",
  "editor.tabSize": 2, // 换行默认以tab缩进 2个字符
  "editor.colorDecorators": false, // 控制编辑器是否显示内联颜色修饰器和颜色选取器。
  "editor.snippetSuggestions": "top", // 将建议的代码段优先级提前选择，比如输入for第一个提示是for循环代码段。
  "files.associations": {
    // 文件关联语言的优先级配置
    "*.vue": "vue",
    "*.cshtml": "html",
    "*.js": "javascript",
    "*.dwt": "html"
  },
  // 添加vue支持
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "html",
    "vue",
    "typescript",
    "typescriptreact"
  ]
}

```

- 使用 Jest and Enzyme 进行测试
- 使用 mockjs 构造网络请求数据
- 使用 autoprefixer 为 css 代码添加兼容语法
- 使用 husky 对提交代码进行检测，commitlint 对 git 提交的信息仅校验
- 使用 Loadable 进行路由懒加载
- 使用基于 redux 和 redux-saga 的数据流方案 dva 进行状态管理
