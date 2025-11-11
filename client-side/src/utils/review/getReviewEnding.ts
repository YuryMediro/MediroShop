export const getReviewEnding = (reviewCount: number) => {
	const lastDigit = reviewCount % 10
	const lastTwoDigits = reviewCount % 100

	// Исключения для чисел 11-14
	if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
		return `${reviewCount} отзывов`
	}

	// Основные правила
	switch (lastDigit) {
		case 1:
			return `${reviewCount} отзыв`
		case 2:
		case 3:
		case 4:
			return `${reviewCount} отзыва`
		default:
			return `${reviewCount} отзывов`
	}
}
