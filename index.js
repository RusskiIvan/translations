const { readdirSync } = require('fs');
const { join } = require('path')

const allLocales = {};
for (const locale of readdirSync(join(__dirname, './locales'))) {
    allLocales[locale] = {};
    for (const module of readdirSync(join(__dirname, `./locales/${locale}`))) {
        allLocales[locale][module.split('.json')[0]] = require(join(__dirname, `./locales/${locale}/${module}`))
    }
}

module.exports = allLocales;