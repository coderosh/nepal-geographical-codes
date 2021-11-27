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

const getDistrictsInProvince = (
  province: '1' | '2' | '3' | '4' | '5' | '6' | '7'
) => {
  return districtsInProvinces[province]
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
