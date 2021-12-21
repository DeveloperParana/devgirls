import StyleDictionary from 'style-dictionary'

const myStyleDictionary = StyleDictionary.extend('tokens/config.json');

myStyleDictionary.buildPlatform('scss');

// You can also extend Style Dictionary multiple times:
// const myOtherStyleDictionary = myStyleDictionary.extend({})

// myOtherStyleDictionary.buildAllPlatforms()
