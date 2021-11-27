import {
  getDistrictCode,
  getLocalBodyCode,
  getDistrictsInProvince,
  getLocalBodiesInDistrict,
} from '../src'

describe('getDistrictCode', () => {
  test('should return district code', () => {
    expect(getDistrictCode('Kathmandu')).toBe(306)
  })
})

describe('getLocalBodyCode', () => {
  test('should return local body code', () => {
    expect(getLocalBodyCode('Kathmandu Metropolitian City')).toBe(30608)
  })
})

describe('getDistrictsInProvince', () => {
  test('should return all districts in province', () => {
    expect(getDistrictsInProvince('3')).toEqual([
      'Bhaktapur',
      'Chitwan',
      'Dhading',
      'Dolakha',
      'Kathmandu',
      'Kavrepalanchowk',
      'Lalitpur',
      'Makwanpur',
      'Nuwakot',
      'Ramechhap',
      'Rasuwa',
      'Sindhuli',
      'Sindhupalchok',
    ])
  })
})

describe('getLocalBodiesInDistrict', () => {
  test('should return all local bodies in district', () => {
    expect(getLocalBodiesInDistrict('Kathmandu')).toEqual([
      'Shankharapur Municipality',
      'Kageshwori Manahara Municipality',
      'Gokarneshwor Municipality',
      'Budhanilkhantha Municipality',
      'Tokha Municipality',
      'Tarakeshwor Municipality',
      'Nagarjun Municipality',
      'Kathmandu Metropolitian City',
      'Kirtipur Municipality',
      'Chandragiri Municipality',
      'Dakshinkali Municipality',
    ])
  })
})
