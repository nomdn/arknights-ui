import { withInstall } from '../../utils/install'
import Menu from './src/Menu.vue'
import MenuItem from './src/MenuItem.vue'

export const ArknightsMenu = withInstall(Menu, 'AkMenu')
export const ArknightsMenuItem = withInstall(MenuItem, 'AkMenuItem')

export default ArknightsMenu
export * from './src/Menu.vue'
export * from './src/MenuItem.vue'
