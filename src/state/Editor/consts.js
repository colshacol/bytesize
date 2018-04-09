// const DEFAULT_CONTENTS = `const intercept = require('intercept-stdout')\nconst { createVm } = require('./vm')\n\nmodule.exports.run = (code, ws) => {\n\tconst vm = createVm()\n\tvm.on('console.log', (...args) => {\n\t\targs.forEach(arg => {\n\t\t\tws.send(JSON.stringify({ stdout: arg }))\n\t\t})\n\t})\n\n\treturn new Promise((resolve, reject) => {\n\t\ttry {\n\t\t\tvm.run(code)\n\t\t\tresolve()\n\t\t} catch (error) {\n\t\t\treject(error)\n\t\t}\n\t})\n}`
export const INFINITE_LOOP_DEFAULT_CONTENTS = `const playWithFire = () => {\n\twhile(true) {\n\t\tconsole.log('it is true....')\n\t}\n}\n\nplayWithFire()`

export const ASYNC_DEFAULT_CONTENTS = `const foo = () => new Promise((resolve, reject) => {\n  setTimeout(() => {\n    try {\n     resolve('IT IS RESOLVED') \n    } catch(error) {\n      reject('IT IS REJECTED')\n    }\n  }, 1000)\n})\n\nfoo().then((message) => {\n  console.log('message: ' + message)\n})`
export const DEFAULT_CONTENTS =
	"type Cat = {\n\tname: string,\n  furry: boolean,\n  colors: string[]\n}\n\nconst cat: Cat = {\n  name: 'Fuzzy',\n  furry: true,\n  colors: ['black', 'white']\n}\n\nconst log = (...values: string[]): void => {\n  console.log(...values);\n}\n\nlog(cat.name, cat.colors[0])"