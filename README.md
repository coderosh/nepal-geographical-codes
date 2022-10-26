# nepal-geographical-codes

> Get geographical codes of districts and local bodies. Data provided by [https://opendatanepal.com/](https://opendatanepal.com/)

<a href="https://npmjs.com/package/nepal-geographical-codes"><img alt="NPM" src="https://img.shields.io/npm/v/nepal-geographical-codes" /></a>
<a href="https://github.com/coderosh/nepal-geographical-codes"><img alt="MIT" src="https://img.shields.io/badge/license-MIT-blue.svg" /></a>
<a href="#"><img alt="CI" src="https://img.shields.io/github/workflow/status/coderosh/nepal-geographical-codes/CI"></a>
<a href="https://github.com/coderosh/nepal-geographical-codes"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome!" /></a>

## Installation

```sh
# with npm
npm i nepal-geographical-codes

# with yarn
yarn add nepal-geographical-codes
```

## Usage

This package exports 4 functions and 4 objects.

- getDistrictCode

  ```js
  import { getDistrictCode } from 'nepal-geographical-codes'

  const code = getDistrictCode('Kathmandu')

  console.log(code) // 306
  ```

- getLocalBodyCode

  ```js
  import { getLocalBodyCode } from 'nepal-geographical-codes'

  const code = getLocalBodyCode('Kathmandu Metropolitian City')

  console.log(code) // 30608
  ```

- getLocalBodiesInDistrict

  ```js
  import { getLocalBodiesInDistrict } from 'nepal-geographical-codes'

  const localBodies = getLocalBodiesInDistrict('Kathmandu')

  console.log(localBodies) // ["Shankharapur Municipality", "Kageshwori Manahara Municipality", ...]
  ```

- getDistrictsInProvince

  ```js
  import { getDistrictsInProvince } from 'nepal-geographical-codes'

  const districts = getDistrictsInProvince('3')

  console.log(districts) // ['Bhaktapur','Chitwan', ...]
  ```

  ```js
  import { getDistrictsInProvince } from 'nepal-geographical-codes'

  const districts = getDistrictsInProvince('Bagmati')

  console.log(districts) // ['Bhaktapur','Chitwan', ...]
  ```

  ```js
  import { getDistrictsInProvince } from 'nepal-geographical-codes'

  const districts = getDistrictsInProvince('Bagmati Province')

  console.log(districts) // ['Bhaktapur','Chitwan', ...]
  ```

- districts

  ```js
  import { districts } from 'nepal-geographical-codes'

  console.log(districts) //  { "Taplejung": 101, "Sankhuwasabha": 102, ... }
  ```

- localBodies

  ```js
  import { localBodies } from 'nepal-geographical-codes'

  console.log(localBodies) // { "Phaktanlung Rural Municipality": 10101, "Mikwakhola Rural Municipality": 10102, ...}
  ```

- districtsInProvinces

  ```js
  import { districtsInProvinces } from 'nepal-geographical-codes'

  console.log(districtsInProvinces) // { 1: ["Bhojpur", "Dhankuta", ...], ... }
  ```

- localBodiesInDistrict

  ```js
  import { localBodiesInDistrict } from 'nepal-geographical-codes'

  console.log(localBodiesInDistrict) // { "Taplejung": [ "Phaktanlung Rural Municipality", ... ], ... }
  ```
