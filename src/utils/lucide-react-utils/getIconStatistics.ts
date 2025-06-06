import {
	Album,
	DollarSign,
	FolderKanban,
	Star,
	type LucideIcon,
} from 'lucide-react'

export function getIconStatistics(id: number): LucideIcon {
	switch (id) {
		case 1:
		default:
			return DollarSign
		case 2:
			return FolderKanban
		case 3:
			return Album
		case 4:
			return Star
	}
}
