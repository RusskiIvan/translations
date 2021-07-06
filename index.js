const { readdirSync} = require('fs');

const allLocales = {};
for (const locale of readdirSync('./locales')) {
    allLocales[locale] = {};
    for (const module of readdirSync(`./locales/${locale}`)) {
        allLocales[locale][module.split('.json')[0]] = require(`./locales/${locale}/${module}`)
    }
}

module.exports = allLocales;