const database = {
    fish: [
        {
            image: 'assets/fish/oranda-goldfish.webp',
            name: 'Miranda',
            species: 'Oranda Goldfish',
            length: 10,
            location: 'East Siberian Sea',
            food: 'plants, algae, small insects, crustaceans, brine shrimp, worms'
        },
        {
            image: 'assets/fish/sunfish.jpeg',
            name: 'Sonny',
            species: 'Sunfish Mola Mola',
            length: 70,
            location: 'oceans worldwide',
            food: 'jellyfish, small fish, fish larvae, squid, crustaceans'
        },
        {
            image: 'assets/fish/blobfish.jpeg',
            name: 'Bobby',
            species: 'Blobfish',
            length: 12,
            location: 'Australia, Tasmania, & New Zealand deep waters',
            food: 'crustaceans'
        },
        {
            image: 'assets/fish/red-handfish.jpeg',
            name: 'Frederick',
            species: 'Red Handfish',
            length: 2.4,
            location: 'Frederick Henry Bay, Tasmania',
            food: 'crustaceans, worms'
        },
        {
            image: 'assets/fish/emperor-angelfish.jpeg',
            name: 'Alexander',
            species: 'Emperor Angelfish',
            length: 16,
            location: 'oceans worldwide',
            food: 'algae, brine shrimp, squid, scallops, clams, coral, seaweed'
        },
        {
            image: 'assets/fish/black-bullhead-catfish.jpeg',
            name: 'Whiskers',
            species: 'Black Bullhead Catfish',
            length: 15,
            location: 'central US, England',
            food: 'grains, plants, insects, small fish, crustaceans'
        }
    ],
    tips: [
        {
            person: 'John Doe',
            quote: 'Lorem ipsum dolor sit amet consectetur adipiscing elit litora vehicula euismod, cum magna rutrum nisi vivamus interdum neque habitasse cursus.'
        },
        {
            person: 'John Doe',
            quote: 'Lorem ipsum dolor sit amet consectetur adipiscing elit litora vehicula euismod, cum magna rutrum nisi vivamus interdum neque habitasse cursus. Netus dictumst malesuada arcu.'
        },
        {
            person: 'John Doe',
            quote: 'Lorem ipsum dolor sit amet consectetur adipiscing elit litora vehicula euismod, cum magna rutrum nisi.'
        },
        {
            person: 'John Doe',
            quote: 'Lorem ipsum dolor sit amet consectetur adipiscing elit litora vehicula euismod, cum magna rutrum nisi vivamus interdum neque habitasse cursus. Netus dictumst malesuada arcu.'
        },
        {
            person: 'John Doe',
            quote: 'Lorem ipsum dolor sit amet consectetur adipiscing elit litora vehicula euismod, cum magna rutrum nisi vivamus interdum neque habitasse cursus.'
        },
        {
            person: 'John Doe',
            quote: 'Lorem ipsum dolor sit amet consectetur adipiscing elit litora vehicula euismod, cum magna rutrum nisi vivamus interdum neque habitasse cursus. Netus dictumst malesuada arcu.'
        },
        {
            person: 'John Doe',
            quote: 'Lorem ipsum dolor sit amet consectetur adipiscing elit litora vehicula euismod, cum magna rutrum nisi.'
        },
        {
            person: 'John Doe',
            quote: 'Lorem ipsum dolor sit amet consectetur adipiscing elit litora vehicula euismod, cum magna rutrum nisi vivamus interdum neque habitasse cursus. Netus dictumst malesuada arcu.'
        }
    ],
    locations: [
        {
            image: 'assets/locations/east-siberian-sea.webp',
            name: 'East Siberian Sea',
            fish: 'Oranda Goldfish'
        },
        {
            image: 'assets/locations/frederick-henry-bay-tasmania.jpeg',
            name: 'Frederick Henry Bay, Tasmania',
            fish: 'Blobfish, Red Handfish'
        },
        {
            image: 'assets/locations/lake-meadows-england.jpg',
            name: 'Lake Meadows, England',
            fish: 'Black Bullhead Catfish'
        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({ ...fish }))
}

export const getTips = () => {
    return database.tips.map(tips => ({ ...tips }))
}

export const getLocations = () => {
    return database.locations.map(locations => ({ ...locations }))
}
