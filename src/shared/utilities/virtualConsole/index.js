import jsdom, { JSDOM } from 'jsdom'
import { html } from './html'

const virtualConsole = new jsdom.VirtualConsole()

const log = (...messages) => {
	console.log('~ ', ...messages)
}

const error = (...messages) => {
	console.error('~ ', ...messages)
}

const warn = (...messages) => {
	console.warn('~ ', ...messages)
}

virtualConsole.on('error', error)
virtualConsole.on('warn', warn)
virtualConsole.on('log', log)

// virtualConsole.sendTo(console)

const windowOptions = { virtualConsole, runScripts: 'dangerously' }
export const window = new JSDOM(html, windowOptions)
