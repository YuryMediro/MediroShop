import StoreLayout from '@/components/Layouts/store-layout/StoreLayout'
import { SettingsPage } from '@/pages/StorePage/SettingsPage/SettingsPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/store/$storeId/settings')({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<StoreLayout>
			<SettingsPage />
		</StoreLayout>
	)
}
