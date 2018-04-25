export const modulePath = ({ userName, id }) => {
	return '$SERVER_ADDRESS$$API_PATH$/module/' + userName + '/' + id
}
