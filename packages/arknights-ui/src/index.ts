import type { App } from 'vue'

// Styles
import './styles/index.css'

// Components
import Button from './components/Button'
import Input from './components/Input'
import Table from './components/Table'
import Card from './components/Card'
import Menu, { ArknightsMenuItem } from './components/Menu'
import Dialog from './components/Dialog'
import Drawer from './components/Drawer'
import Pagination from './components/Pagination'
import Select from './components/Select'
import Switch from './components/Switch'

const components = [
  Button,
  Input,
  Table,
  Card,
  Menu,
  ArknightsMenuItem,
  Dialog,
  Drawer,
  Pagination,
  Select,
  Switch,
]

const install = (app: App) => {
  components.forEach((component) => {
    if (component && (component as any).install) {
      app.use(component as any)
    }
  })
}

export {
  Button,
  Input,
  Table,
  Card,
  Menu,
  ArknightsMenuItem as MenuItem,
  Dialog,
  Drawer,
  Pagination,
  Select,
  Switch,
}

export default { install }
