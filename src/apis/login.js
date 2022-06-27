import _axios from '@/utils/request'

export const login = () => _axios.get('/mock/login.json')
