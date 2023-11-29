const ASCII_SYMBOLS = [
  {
    name: 'Dice ⚅',
    symbols: ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'],
  },
  {
    name: 'Geometry ▤',
    symbols: ['□', '▤', '▥', '▦', '▩', '■'],
  },
  {
    name: 'Skin Tone 🟧',
    symbols: ['⬜', '🟨', '🟧', '🟥', '🟫', '⬛'],
  },
  {
    name: 'Color Square 🟩',
    symbols: ['🟨','🟩','🟦', '🟪', '🟥', '🟧'],
  },
  {
    name: 'Lunar Emote ',
    symbols: ['🌕', '🌔', '🌓', '🌒', '🌑', '🌘',  '🌗', '🌖', '🌕'],
  },
  {
    name: 'Color Rhombus 🟩',
    symbols: ['🟨','🟩','🟦', '🟪', '🟥', '🟧'],
  },
  {
    name: 'Color Polka Dot 🟠',
    symbols: ['⚪', '🟡', '🟠', '🔴', '🟤', '⚫'],
  },
  {
    name: 'RaNdoM 💠',
    symbols: ['🔲', '🔶', '🔺', '💠', '🔷', '🔳'],
  },
  {
    name: 'Smiley 🙃',
    symbols: ['🥶', '🤢','🙃', '🥵', '😡', '😈'],
  },
  {
    name: 'Heart 💜',
    symbols: ['💛', '💚', '💙', '💜', '💓', '🖤'],
  },
  {
    name: 'Fractional Circle ◔',
    symbols: ['●', '◕', '◑', '◔', '○', '◌'],
  },
  {
    name: 'Monospace Alphabet',
    symbols: ['A', 'B', 'C', 'D', 'E', 'F'],
  },
  {
    name: 'Digital Digit 🯵',
    symbols: ['🯰', '🯱', '🯲', '🯳', '🯴', '🯵'],
  },
  {
    name: 'Snow Flakes ❄',
    symbols: ['❄', '❅', '❆','✾', '❃', '✽'],
  },
  {
    name: 'Horizontal Bar 𝄘',
    symbols: ['𝄖', '𝄗', '𝄘','𝄙', '𝄚', '𝄛'],
  },
  {
    name: 'Skin Tone 🏻',
    symbols: ['🏿', '🏾', '🏽', '🏼', '🏻', '🏻'],
  },
  {
    name: 'Tally Rod 𝍫',
    symbols: ['𝍩', '𝍪', '𝍫', '𝍬', '𝍭', '𝍱'],
  },
  {
    name: 'Kaeriten ㆗',
    symbols: ['㆒', '㆓', '㆔', '㆖', '㆗', '㆙'],
  },
  {
    name: 'Operator',
    symbols: ['🞡', '🞢', '🞤', '🞫', '🞧', '🞮'],
  },
  {
    name: 'Plus',
    symbols: ['🞡', '🞨', '🞤', '🞥', '🞦', '🞧'],
  },
  {
    name: 'Astrik',
    symbols: ['🞵', '🞶', '🞷', '🞸', '🞹', '🞺'],
  },
  {
    name: 'Diamond',
    symbols: ['🮠', '🮢', '🮤', '🮨', '🮫', '🮮'],
  },
  {
    name: 'Weighted Square',
    symbols: ['🞎', '🞏', '🞐', '🞑', '🞒', '🞓'],
  },
  {
    name: 'Weighted Circle',
    symbols: ['🞅', '🞊', '🞆', '🞇', '🞈', '🞉'],
  },
  {
    name: 'Uni Shade',
    symbols: ['░', '░', '▒', '▒', '▓', '▓'],
  },
  {
    name: 'Double Shade',
    symbols: ['░░', '░▒', '▒▒', '▒▓', '▓▓', '▓░'],
  },
  {
    name: 'Partial Shade',
    symbols: ['┊', '║', '░', '▒', '▓','█'],
  },
  {
    name: 'Vertical Block',
    symbols: ['▁', '▂', '▄', '▅', '▆', '▇'],
  },
  {
    name: 'Flag',
    symbols: ['🇯🇵', '🇻🇨', '🇺🇬', '🇳🇵', '🇱🇰', '🇬🇵'],
  },
];

export { ASCII_SYMBOLS };

// #️⃣*️⃣0️⃣1️⃣2️⃣3️⃣4️⃣5️⃣6️⃣7️⃣8️⃣9️⃣🔟🔠🔡🔢🔣🔤🆒🆓🆕🆖🆗🆙🅰🆎🅱🆑ℹ🆔Ⓜ🅿🅾🈁🈂🈷🈶🈯🉐🈹🈚🈲🉑🈸🈴🈳㊗㊙🈺🈵⬆↗➡↘⬇↙⬅↖↕↔↩↪⤴⤵🔃🔄♈♉♊♋♌♍♎♏♐♑♒♓⛎🔀🔁🔂▶📶📳📴⏩⏭⏯◀⏪⏮🔼⏫🔽⏬⏸⏹⏺⏏🚳🚭🚯🚱🚷📵🔞📕📗📘📙📒📓📔📖📚🕛🕧🕐🕜🕑🕝🕒🕞🕓🕟🕔🕠🕕🕡🕖🕢🕣🕘🕤🕙🕥🕚🕦🌍🌎🌏🌐🗾🏔⛰🌋🗻🏕🏖🏜🏝🏞🏯🏙🗽⛺🌃🌄🌅🌆🌇🌉🌌🎢♠♥♥♦♣