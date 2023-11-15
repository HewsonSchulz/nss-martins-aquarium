import { fishList, sortHolyFish } from './fish/fishList.js'
import { tipList } from './tips/tipList.js'
import { locationsList } from './locations/locationsList.js'

const htmlFish = document.querySelector('.fishList')
htmlFish.innerHTML = fishList(sortHolyFish())
document.querySelector('.quotes').innerHTML = tipList()
document.querySelector('.locations').innerHTML = locationsList()