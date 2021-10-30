const path = require('path')
const fs = require('fs')
const { execSync } = require('child_process')

const updatePackage = version => {
  const pkgPath = path.resolve('./', 'package.json')
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'))
  pkg.version = version
  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n')
}

let version = process.argv[2] || ''

updatePackage(version)

// 必须都是同步的

execSync(
  `yarn changelog && git add . && git commit -m 'release(自动化): ${version}' && git push`
)
execSync(`git tag '${version}' && git push origin --tags `)
