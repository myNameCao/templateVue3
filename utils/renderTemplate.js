import fs from 'fs'
import path from 'path'

import deepMerge from './deepMerge.js'
import sortDependencies from './sortDependencies.js'

function renderTemplate(src, dest) {
  // 获得目标文件的信息
  const stats = fs.statSync(src)

  if (stats.isDirectory()) {
    // if it's a directory, render its subdirectories and files recusively
    fs.mkdirSync(dest, { recursive: true })
    for (const file of fs.readdirSync(src)) {
      renderTemplate(path.resolve(src, file), path.resolve(dest, file))
    }
    return
  }

  const filename = path.basename(src)

  // package 新久要合并
  if (filename === 'package.json' && fs.existsSync(dest)) {
    // merge instead of overwriting
    const existing = JSON.parse(fs.readFileSync(dest))
    const newPackage = JSON.parse(fs.readFileSync(src))
    const pkg = sortDependencies(deepMerge(existing, newPackage))
    fs.writeFileSync(dest, JSON.stringify(pkg, null, 2) + '\n')
    return
  }
  // 文件名字修改
  if (filename.startsWith('_')) {
    // rename `_file` to `.file`
    dest = path.resolve(path.dirname(dest), filename.replace(/^_/, '.'))
  }

  fs.copyFileSync(src, dest)
}

export default renderTemplate
