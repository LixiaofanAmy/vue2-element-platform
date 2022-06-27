import _axios from '@/utils/request'

export const getMenuList = () => _axios.get('/mock/menus.json')
