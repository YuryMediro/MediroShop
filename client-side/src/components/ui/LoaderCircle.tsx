import { cn } from '@/shared/lib/utils'
import { type VariantProps, cva } from 'class-variance-authority'
import { LoaderCircle } from 'lucide-react'


const iconVariants = cva('animate-spin text-muted-foreground', {
	variants: {
		size: {
			default: 'size-9',
			sm: 'size-6'
		}
	},
	defaultVariants: {
		size: 'default'
	}
})

type TypeIconVariants = VariantProps<typeof iconVariants>

export const CircleLoader = ({ size }: TypeIconVariants) => {
	return <LoaderCircle className={cn(iconVariants({ size }))} />
}
