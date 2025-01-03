const formatUSDCurrency = (value) => {
	return value.toLocaleString('en-US', {
		style: 'currency',
		currency: 'USD',
	});
};

const formatVNDCurrency = (value) => {
	return value.toLocaleString('vi-VN', {
		style: 'currency',
		currency: 'VND',
	});
};

export { formatUSDCurrency, formatVNDCurrency };
