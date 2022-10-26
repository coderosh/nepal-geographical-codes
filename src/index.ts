import { capitalize } from './utils'

import districts from './data/districts.json'
import localBodies from './data/local-bodies.json'
import districtsInProvinces from './data/districts-in-provinces.json'
import localBodiesInDistrict from './data/local-bodies-in-district.json'

const getLocalBodyCode = (localBody: keyof typeof localBodies) => {
  const key = capitalize(localBody) as keyof typeof localBodies
  return localBodies[key]
}

const getDistrictCode = (district: keyof typeof districts) => {
  const key = capitalize(district) as keyof typeof districts
  return districts[key]
}

const getLocalBodiesInDistrict = (district: keyof typeof districts) => {
  const key = capitalize(district) as keyof typeof districts
  return localBodiesInDistrict[key]
}

const provinceNames = [
  '1',
  'Madhesh',
  'Bagmati',
  'Gandaki',
  'Lumbini',
  'Karnali',
  'Sudurpashchim',
] as const

type ProvinceParam =
  | keyof typeof districtsInProvinces
  | typeof provinceNames[number]
  | `${typeof provinceNames[number]} Province`

const getDistrictsInProvince = (province: ProvinceParam) => {
  if (!isNaN(+province)) {
    return districtsInProvinces[province as keyof typeof districtsInProvinces]
  }

  const provinceName = capitalize(province).replace(
    ' Province',
    ''
  ) as typeof provinceNames[number]

  const index = provinceNames.indexOf(provinceName)

  return districtsInProvinces[
    `${index + 1}` as keyof typeof districtsInProvinces
  ]
}

export {
  districts,
  localBodies,
  districtsInProvinces,
  localBodiesInDistrict,
  getDistrictCode,
  getLocalBodyCode,
  getLocalBodiesInDistrict,
  getDistrictsInProvince,
}
