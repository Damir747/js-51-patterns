export default function adapter(data, index) {
	return {
		"Id": data.Id || data.id || index,
		"state": data.State || data.state,
		"counterparty": data.Counterparty || data.counterparty,
		"manager": data.Manager || data.manager
	};
}