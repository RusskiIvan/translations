# Translation

This repository holds all of the translation files for the [Rusty Helper](https://top.gg/bot/708645572906844190) discord bot.

Feel free to contribute and add translations in your own language

## Help

All translation talk happens on the [Rusty Helper Discord server](https://discord.gg/78rdzbPMpP) translation chat

## How to help translate

1. Make sure you have a github account
2. Clone the github repository
3. Make all of your translations
4. Create a pull request

## Translation Requirements

* Must be a member of the official [Rusty Helper Discord server](https://discord.gg/78rdzbPMpP) with the @Translators role
* Must understand English
* General knowledge of Discord App and Discord terms

## Project format

Each language and locale as it's own folder inside of the locales folder. Inside of that folder are JSON files for different translation needs like commands and errors etc. Look at `en` folder for all of the english strings for translation

### Translating Variables

Translation strings which have a variable in them will look like this:

#### English ( en )
```
Inventory cost for Ortovox => Inventory cost for {{user}}
```

#### Russian ( ru )
```
Стоимость инвентаря для Ortovox => Стоимость инвентаря для {{user}}
```

### Text Formatters

Some messages may contain special formatting characters, such as `**` and `__` or `[word](https://google.com)`, these are Markdown special characters, which styles words as **bold**, _underline_ etc. Here are some examples of correct translation in these cases:

#### English ( en )
```
__Hello **{{name}}**__, how are you [today](https://google.com)?
```

#### German ( de )
```
__Hallo **{{name}}**__, wie geht es dir [heute](https://google.com)?
```

### Gender

If your locale language translates `you` or `your` to a specific gender, then please use the equivalent of `they`, `them` and `their` for general/neutral addressing.

# Languages

| Language   | Completed |
|------------|-----------|
| English    | 0/0       |
| Russian    | 0/0       |
| Spanish    | 0/0       |
| Turkish    | 0/0       |
| Portuguese | 0/0       |
| German     | 0/0       |
| French     | 0/0       |
| Chinese    | 0/0       |