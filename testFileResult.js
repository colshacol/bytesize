'use strict'

Object.defineProperty(exports, '__esModule', {
	value: true
})
exports.forInHandler = exports.forOfHandler = exports.forHandler = exports.whileHandler = void 0

;(function() {
	var enterModule = require('react-hot-loader').enterModule

	enterModule && enterModule(module)
})()

var whileHandler = function whileHandler() {
	var _LOOP_PROTECTOR_COUNTER__

	_LOOP_PROTECTOR_COUNTER__ = 0

	while (true) {
		if (_LOOP_PROTECTOR_COUNTER__++ > 99) throw 'Loop Stack Exceeded'
		console.log('hehehehe')
	}
}

exports.whileHandler = whileHandler

var forHandler = function forHandler(arr) {
	var _LOOP_PROTECTOR_COUNTER__2

	_LOOP_PROTECTOR_COUNTER__2 = 0

	for (var i = 1; i > 0; i++) {
		if (_LOOP_PROTECTOR_COUNTER__2++ > 99) throw 'Loop Stack Exceeded'
		console.log('hehehehe')
	}
}

exports.forHandler = forHandler

var forOfHandler = function forOfHandler(arr) {
	var _iteratorNormalCompletion = true
	var _didIteratorError = false
	var _iteratorError = undefined

	try {
		var _LOOP_PROTECTOR_COUNTER__3

		_LOOP_PROTECTOR_COUNTER__3 = 0

		for (
			var _iterator = arr[Symbol.iterator](), _step;
			!(_iteratorNormalCompletion = (_step = _iterator.next()).done);
			_iteratorNormalCompletion = true
		) {
			if (_LOOP_PROTECTOR_COUNTER__3++ > 99) throw 'Loop Stack Exceeded'
			var bar = _step.value
			console.log('hehehehe')
		}
	} catch (err) {
		_didIteratorError = true
		_iteratorError = err
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return != null) {
				_iterator.return()
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError
			}
		}
	}
}

exports.forOfHandler = forOfHandler

var forInHandler = function forInHandler(arr) {
	var _LOOP_PROTECTOR_COUNTER__4

	_LOOP_PROTECTOR_COUNTER__4 = 0

	for (var bar in arr) {
		if (_LOOP_PROTECTOR_COUNTER__4++ > 99) throw 'Loop Stack Exceeded'
		console.log('hehehehe')
	}
}

exports.forInHandler = forInHandler
;(function() {
	var reactHotLoader = require('react-hot-loader').default

	var leaveModule = require('react-hot-loader').leaveModule

	if (!reactHotLoader) {
		return
	}

	reactHotLoader.register(whileHandler, 'whileHandler', 'testFile.js')
	reactHotLoader.register(forHandler, 'forHandler', 'testFile.js')
	reactHotLoader.register(forOfHandler, 'forOfHandler', 'testFile.js')
	reactHotLoader.register(forInHandler, 'forInHandler', 'testFile.js')
	leaveModule(module)
})()
