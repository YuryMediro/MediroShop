export const getReviewEnding = (reviewCount: number) => {
	switch (reviewCount) {
		case 1 || 21 || 31:
			return `${reviewCount} отзыв`
		case 2 || 3 || 4 || 22 || 23 || 24 || 34:
			return `${reviewCount} отзыва`
		default:
			return `${reviewCount} отзывов`
	}
}
