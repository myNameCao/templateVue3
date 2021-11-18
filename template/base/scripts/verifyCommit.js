#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-var-requires */
const childProcess = require('child_process')
const chalk = require('chalk')
const fs = require('fs')
const email = childProcess.execSync('git config user.email').toString().trim()
const msg = fs.readFileSync(process.argv[2], 'utf-8').trim() // 索引 2 对应的 commit 消息文件
const commitRE =
  /^(feat|fix|docs|style|refactor|perf|test|workflow|build|ci|chore|release|workflow)(\(.+\))?: .{1,100}/
if (!commitRE.test(msg)) {
  /* eslint-disable */
  console.error(
    `  ${chalk.bgRed.white(' ERROR ')} ${chalk.red(
      'invalid commit message format.'
    )}\n\n` +
      chalk.red(
        '  Proper commit message format is required for automated changelog generation. Examples:\n\n'
      ) +
      `    ${chalk.green('feat(compiler): add "comments" option')}\n` +
      `    ${chalk.green(
        'fix(v-model): handle events on blur (close #28)'
      )}\n\n` +
      chalk.red(
        '详情请查看 git commit 提交规范：https://github.com/myNameCao/learn/blob/master/git%20commit%20style.md'
      )
  )
  process.exit(1)
}

if (!/@xiaoyangedu\.com$/.test(email)) {
  console.error('此用户没有权限，具有权限的用户为： xxx@xiaoyangedu.com')
  process.exit(1)
}
