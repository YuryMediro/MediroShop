import {
	Album,
	FolderKanban,
	Star,
	type LucideIcon,
	RussianRuble,
} from 'lucide-react'

export function getIconStatistics(id: number): LucideIcon {
	switch (id) {
		case 1:
		default:
			return RussianRuble
		case 2:
			return FolderKanban
		case 3:
			return Album
		case 4:
			return Star
	}
}
