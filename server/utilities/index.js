import produce from 'immer'

export const producer = (handler) => {
	return (target) => produce(target, handler)
}
