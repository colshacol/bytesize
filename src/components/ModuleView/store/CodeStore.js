import * as React from 'react'
import { observable, action, computed, flow } from 'mobx'
import workerize from 'workerize'

type StatusT = 'chillin' | 'executing'

export class CodeStore {
  @observable originalCodeContent: string = '// write your code here\n'
  @observable editedCodeContent: string = '// write your code here\n'
  @observable status: StatusT = 'chillin'
  @observable logs: any[] = []

  @action
  setEditedCodeContent = (content) => {
    this.editedCodeContent = content
  }

  @action
  resetCodeContent = () => {
    this.editedCodeContent = this.originalCodeContent
  }

  @action
  setExecutingStatus = () => {
    this.status = 'executing'
  }

  @action
  setChillinStatus = () => {
    this.status = 'chillin'
  }

  @action
  setLogs = (logs: any[]) => {
    this.logs = logs
  }

  @action.bound
  executeCodeInEditor = flow(function*(value) {
    // EXECUTE THAT SHIT
    this.setExecutingStatus()
    console.log('executing!!!!', value)
    try {
      const worker = yield workerize(make(this.editedCodeContent))
      const logs = yield worker.execute()
      console.log(worker, logs)
      // this.setLogs(yield worker.execute())
      this.setLogs(logs)
      this.setChillinStatus()
    } catch (error) {
      this.setLogs([error])
    }
  })
}

const make = (code) => `
export function execute() {
	const consoleTarget = []

	const createProxy = (which) => new Proxy(() => {}, {
		apply(target, self, data) {
			consoleTarget.push({ method: which, data })
		}
	})

	const console = {
		log: createProxy('log'),
		error: createProxy('error'),
		warn: createProxy('warn'),
		info: createProxy('info'),
		table: createProxy('table'),
	}

	eval(\`${code}\`)

	return consoleTarget
}
`
