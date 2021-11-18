# 下载项目依赖

- 强制使用 **_yarn_**

<br>

# vscode 插件下载

1. Prettier - Code formatter
2. Git History
3. eslint

<br>

# 项目检验

## Prettier

- 每次保存的时 会强制格式化代码，所以没有必要关注过程编程的格式

* 👻 配置文件下放到项目，保证 vscode 没有个人习惯的的配置

## Eslint

- 每次 git commit 会检查 js 代码，不符合 eslint 规则 会 commit 失败

* 配置文件 .eslintrc.js

## Commit-msg

- 🔥 如果不按照[规范](https://github.com/myNameCao/learn/blob/master/git%20commit%20style.md) 不能正常提交代码

## Email

- 必须使用公司的邮箱提交 例如: xxx@xiaoyangedu.com

* 查看邮箱

```shell
    查看邮箱

    git config user.name
    git config user.email

    修改


    git config --global user.name "your name"
    git config --global user.email "your email"

```

<br>

# 版本迭代

- 历史记录 CHANGELOG.md

* devlop 提交后触发一次测试环境的发版

* master 为保护分支 需要手动发版

* 每次线上发版 会生成一个 `tag`

<br>

# script 命令

## Compiles and hot-reloads for development

```shell
yarn serve

```

## Compiles and minifies for production

```shell
yarn build
```

## Compiles and minifies for online

```shell
yarn com
```

<br>

# axios 请求

## url 配置

- 本项目 url 需要统一配置（lib/baseApi）

- 分两种接口公共接口和私有接口（代码会自动识别添加 token）
  公共接口: 不需要 token
  私有接口:需要 token

```js
{
  //  需要token 接口列表
  privatePath: {},
  //  不需要token 接口列表
  publicPath: {
    login: '/xy/login'
  }
}
```

## 发送请求

方法一（异步回调）

```js
import axios from '@utils'

axios({
  url: 'AccountsInfo',
  success(res) {
    // todo something
  }
})
```

方法二（async）

```js
;axios () => {
  let { data } = await ajax({ url: 'AccountsInfo' })
  // todo something
}
```

方法三:（then)

```js
axios({ url: 'AccountsInfo' }).then(res => {
  // todo something
})
```

请求数据

- data 只包含请求业务参数
- token 会根据接口注册的位置 自动添加
- loading 当页面发送请求时，需要 loadind 添加`true`, 默认不 loaing,请求完成自动关闭
- success 成功后的逻辑

## error 处理

## 工具类

    axios 属于项目的工具类他是默认的函数

```js
import axios, { encrypt, setCookie } from '@utils'

// todo something

encrypt()

setCookie()
```
