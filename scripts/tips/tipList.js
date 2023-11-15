import { getTips } from '../database.js'

export const tipList = () => {
    const tips = getTips()
    let htmlString = ''

    for (const tip of tips) {
        htmlString += `
<div class='stylish'>
${tip.quote} <br>&emsp;&emsp;&emsp;- ${tip.person}
</div>
`}

    return htmlString
}