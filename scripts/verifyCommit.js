// Invoked on the commit-msg git hook by yorkie.

const chalk = require('chalk')
const childProcess = require('child_process')

const msgPath = process.env.HUSKY_GIT_PARAMS
const msg = require('fs').readFileSync(msgPath, 'utf-8').trim()
const email = childProcess.execSync('git config user.email').toString().trim()
const commitRE =
  /^(revert: )?(feat|fix|docs|dx|style|refactor|perf|test|workflow|build|ci|chore|types|wip|release)(\(.+\))?: .{1,50}/

if (!commitRE.test(msg)) {
  console.error(
    `  ${chalk.bgRed.white(' ERROR ')} ${chalk.red(
      `invalid commit message format.`
    )}\n\n` +
      chalk.red(
        `  Proper commit message format is required for automated changelog generation. Examples:\n\n`
      ) +
      `    ${chalk.green(`feat(compiler): add 'comments' option`)}\n` +
      `    ${chalk.green(
        `fix(v-model): handle events on blur (close #28)`
      )}\n\n` +
      chalk.red(
        `  See https://github.com/myNameCao/learn/blob/master/git%20commit%20style.md\n`
      )
  )
  process.exit(1)
}

if (!/@xiaoyangedu\.com$/.test(email)) {
  chalk.red('此用户没有权限，具有权限的用户为： xxx@xiaoyangedu.com')
  process.exit(1)
}
