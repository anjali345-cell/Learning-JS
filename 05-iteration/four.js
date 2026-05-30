// higher order array loop

const languages = {
    js: 'JavaScript',
    py: 'Python',
    rb: 'Ruby',
    java: 'Java',
    php: 'PHP'
}

// for...in loop
for (const key in languages) {
    // console.log(languages[key])
    console.log(`${key} for ${languages[key]}`)
    
}