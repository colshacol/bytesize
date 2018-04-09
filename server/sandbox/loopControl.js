const INSERTED_VAR_NAME = '__LOOP_PROTECTOR_COUNTER__'

let t

const defineVariable = name => value => {
	return t.assignmentExpression('=', name, value)
}

const number = num => {
	return t.NumericLiteral(num)
}

const insertCounter = (path, t) => {
	const variableName = path.scope.generateUidIdentifier(INSERTED_VAR_NAME)
	const declaration = t.declareVariable(variableName)
	const definition = defineVariable(variableName)(number(0))

	path.scope.parent.push(declaration)
	path.insertBefore(t.expressionStatement(definition))

	return { variableName }
}

const ifStatement = left => operator => right => block => {
	return t.ifStatement(t.binaryExpression(operator, left, right), block, null)
}

const injectLoopProtector = t => path => {
	const { variableName } = insertCounter(path, t)

	path
		.get('body')
		.unshiftContainer(
			'body',
			ifStatement(t.UpdateExpression('++', variableName, false))('>')(number(99))(
				t.throwStatement(t.stringLiteral('Loop Stack Exceeded'))
			)
		)
}

module.exports = function(babel) {
	const { types } = babel
	t = types

	const loopProtector = injectLoopProtector(types)

	return {
		visitor: {
			ForStatement: loopProtector,
			ForInStatement: loopProtector,
			ForAwaitStatement: loopProtector,
			WhileStatement: loopProtector
		}
	}
}
