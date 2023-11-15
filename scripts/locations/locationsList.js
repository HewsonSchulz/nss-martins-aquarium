import { getLocations } from '../database.js'

export const locationsList = () => {
    const locations = getLocations()
    let htmlString = ''

    for (const location of locations) {
        htmlString += `
<div class='stylish'>
    <img src='${location.image}' class='stylish-img' />
    <ul>
        <li>Name: ${location.name}</li>
        <li>Harvested Fish: ${location.fish}</li>
    </ul>
</div>
`}

    return htmlString
}
