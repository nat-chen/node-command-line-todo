# Command Line Todo

## 技术栈
NodeJS + Commander + Inquirer + Jest

## 简介
简化版的命令行 Todo 工具，实现了清单列表的展示及增删改的功能。

## 使用方法
1. `node cli.js` 展示 Todo 列表，进入交互式的命令行界面

## 实现细节

### `cli.js`
1. 用于 node 命令的运行文件，使用 `node cli.js`
2. `node cli.js add TASK_NAME` 添加 Todo
3. `node cli.js clear` 删除所有 Todo

### `db.js`
1. `read()` 文件读取: `fs.readFile()`
2. `write()` 文件写入: `fs.writeFile()`

### `index.js`
1. 包含增删改及列表展示的所有逻辑处理
