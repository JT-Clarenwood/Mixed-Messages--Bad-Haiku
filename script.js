// Store components for haiku.
const haikuComponents = {
    firstFiveSyl : [
        'Like crunchy cornflakes',
        'The chill, worming in',
        'I was in fire',
        'Calm as a river',
        'Beautiful sunrise'
    ],
    sevenSyl: [
        'Gold leaves rustle underfoot',
        'Shock, pleasure, bursting within',
        'The room was dark and somber',
        'Tranquility in my heart',
        'On a warm summer morning'
    ],
    lastFiveSyl: [
        'Beauty in decay',
        'Summer tongue awakes',
        'I sleep peacefully',
        'Blue summer skies reign',
        'I wait for day\'s start'
    ]
};

// Function to select random line
const selectLine = array => array[Math.floor(Math.random() * array.length)];

// Function to join parts into one haiku
const constructHaiku = components => {
    const messageArray = [];
    for (const part in components) {
        messageArray.push(selectLine(components[part]));
    }
    return messageArray.join('\n');
};

console.log(constructHaiku(haikuComponents));