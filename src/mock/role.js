import Mock from 'mockjs'

// admin 角色可以访问所有菜单
const roles = [
  {
    id: 'editor', // 角色id
    name: 'editor',
    description: '编辑',
    accessibleRoutes: [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
      '13',
      '14',
      '15',
      '16',
      '17',
      '18',
      '19',
      '20',
      '21',
      '22',
      '23',
      '24',
      '25',
      '26',
      '27',
      '28',
      '29',
      '30',
      '31',
      '32',
      '33',
      '34',
      '35',
      '36',
      '37',
      '38',
      '39',
      '40',
      '41',
      '42',
      '43',
      '44',
      '45',
      '46',
      '47',
      '48',
      '49',
      '50',
      '51',
      '52',
      '53',
      '54',
      '55',
      '56',
      '57',
      '58',
      '59',
      '60',
      '61',
      '62',
      '63',
      '64',
      '65',
      '66',
      '67'
    ] // 可访问的菜单id列表
  },
  {
    id: 'operator', // 角色id
    name: 'operator',
    description: '运营',
    accessibleRoutes: [
      '1',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
      '13',
      '14',
      '15',
      '16',
      '17',
      '18',
      '19',
      '20',
      '21',
      '22',
      '23',
      '24',
      '25',
      '26',
      '27',
      '28',
      '29',
      '30',
      '31',
      '32',
      '33',
      '34',
      '35',
      '36',
      '37',
      '38',
      '39',
      '40',
      '41',
      '42',
      '43',
      '44',
      '45',
      '46',
      '47',
      '48',
      '49',
      '50',
      '51',
      '52',
      '53',
      '54',
      '55',
      '56',
      '57',
      '58',
      '59',
      '60',
      '61',
      '62',
      '63',
      '64',
      '65'
    ] // 可访问的菜单id列表
  }
]

export default {
  getRoles() {
    return roles
  },
  newRole() {
    const res = {
      data: Mock.mock('id')
    }
    return res
  },
  updateRole() {
    const res = {
      data: 'success'
    }
    return res
  },
  deleteRole() {
    const res = {
      data: 'success'
    }
    return res
  }
}
