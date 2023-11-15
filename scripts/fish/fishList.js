import { getFish } from '../database.js'

const fishes = getFish()

export const fishList = (fishes) => {
    let htmlString = ''

    for (const fish of fishes) {
        htmlString += `
<div class='stylish'>
    <img src='${fish.image}' class='stylish-img' />
    <ul>
        <li>Name: ${fish.name}</li>
        <li>Species: ${fish.species}</li>
        <li>Length: ${fish.length}"</li>
        <li>Habitat: ${fish.location}</li>
        <li>Diet: ${fish.food}</li>
    </ul>
</div>
`}

    return htmlString
}

export const mostHolyFish = () => {
    const out = []

    for (const fish of fishes) {
        if (fish.length % 3 === 0) {
            out.push(fish)
        }
    }

    return out
}

export const soldierFish = () => {
    const out = []

    for (const fish of fishes) {
        if (fish.length % 5 === 0) {
            out.push(fish)
        }
    }

    return out
}

export const nonHolyFish = () => {
    const out = []

    for (const fish of fishes) {
        if (!(fish.length % 3 === 0) && !(fish.length % 5 === 0)) {
            out.push(fish)
        }
    }

    return out
}

export const sortHolyFish = () => {
    let out = []

    for (const fish of mostHolyFish()) {
        out.push(fish)
    }
    for (const fish of soldierFish()) {
        if (!out.includes(fish)) {
            out.push(fish)
        }
    }
    for (const fish of nonHolyFish()) {
        if (!out.includes(fish)) {
            out.push(fish)
        }
    }

    return out
}