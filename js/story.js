const story = [
    'opening-credits-a',
    'opening-credits-b',
    'opening-credits-d',
    'opening-credits-e',
    'opening-credits-g',
    'opening-credits-h',
    'opening-credits-i',
    'opening-credits-j',
    'opening-credits-l',
    'opening-credits-m',
    'opening-credits-n',
    'opening-credits-o',
    'opening-credits-q',
    'opening-credits-r',
    'opening-credits-s',
    'opening-credits-u',
    'opening-credits-v',
    'grotttes-a',
    'grotttes-c',
    'foret-noa',
    'blockhaus-a',
    'sic-mundus-tattoo',
    'blockhaus-b',
    'route-a',
    'route-c',
    'blast',
    'claudia-futur-a',
    'claudia-futur-b',
    'machine-b',
    'machine-c',
    'particles-a',
    'particles-b',
    'particles-c',
    'particles-d',
    'particles-e',
    'adam-a',
    'st-christophe-c',
    'matter-c',
    'matter-e',
    'matter-f',
    'matter-l',
    'matter-m',
    'matter-g',
    'matter-j',
    'wormhole-a',
    'wormhole-b',
    'wormhole-c',
    'jonas-teen',
    'martha-teen',
    'bartosz',
    'magnus',
    'franziska',
    'elisabeth',
    'mikkel',
    'michael',
    'hannah-child',
    'hannah',
    'ulrich',
    'ulrich-teen',
    'katharina-teen',
    'katharina',
    'charlotte-teen',
    'charlotte',
    'aleksander-teen',
    'aleksander',
    'regina-teen',
    'regina',
    'claudia-child',
    'claudia',
    'claudia-old',
    'helge-child',
    'helge',
    'helge-old',
    'tannhaus',
    'tannhaus-old',
    'bernd',
    'bernd-old',
    'jana-teen',
    'jana',
    'jana-old',
    'egon',
    'egon-old',
    'tronte-child',
    'tronte',
    'tronte-old',
    'ines-teen',
    'ines',
    'ines-old',
    'peter',
    'doris',
    'agnes',
    'greta',
    'jonas',
    'noah'
];

const portraits = [
    'jonas-teen',
    'martha-teen',
    'bartosz',
    'magnus',
    'franziska',
    'elisabeth',
    'mikkel',
    'michael',
    'hannah-child',
    'hannah',
    'ulrich',
    'ulrich-teen',
    'katharina-teen',
    'katharina',
    'charlotte-teen',
    'charlotte',
    'aleksander-teen',
    'aleksander',
    'regina-teen',
    'regina',
    'claudia-child',
    'claudia',
    'claudia-old',
    'helge-child',
    'helge',
    'helge-old',
    'tannhaus',
    'tannhaus-old',
    'bernd',
    'bernd-old',
    'jana-teen',
    'jana',
    'jana-old',
    'egon',
    'egon-old',
    'tronte-child',
    'tronte',
    'tronte-old',
    'ines-teen',
    'ines',
    'ines-old',
    'peter',
    'doris',
    'agnes',
    'greta',
    'jonas',
    'noah'
]

const casting = {
    'jonas-teen': {
        character: 'Jonas Kahnwald',
        actor: 'Louis Hofmann'
    },
    'martha-teen': {
        character: 'Martha Nielsen',
        actor: 'Lisa Vicari'
    },
    'bartosz': {
        character: 'Bartosz Tiedemann',
        actor: 'Paul Lux'
    },
    'magnus': {
        character: 'Magnus Nielson',
        actor: 'Moritz Jahn'
    },
    'franziska': {
        character: 'Franziska Doppler',
        actor: 'Gina Stiebitz'
    },
    'elisabeth': {
        character: 'Elisabeth Doppler',
        actor: 'Carlotta von Falkenhayn'
    },
    'mikkel': {
        character: 'Mikkel Nielsen',
        actor: 'Daan Lennard Liebrenz'
    },
    'michael': {
        character: '',
        actor: ''
    },
    'hannah-child': {
        character: '',
        actor: ''
    },
    'hannah': {
        character: 'Hannah Kahnwald',
        actor: 'Maja Schöne'
    },
    'ulrich': {
        character: 'Ulrich Nielsen',
        actor: 'Oliver Masucci'
    },
    'ulrich-teen': {
        character: '',
        actor: ''
    },
    'katharina-teen': {
        character: '',
        actor: ''
    },
    'katharina': {
        character: 'Katharina Nielsen',
        actor: 'Jördis Triebel'
    },
    'charlotte-teen': {
        character: '',
        actor: ''
    },
    'charlotte': {
        character: 'Charlotte Doppler',
        actor: 'Karoline Eichhorn'
    },
    'aleksander-teen': {
        character: '',
        actor: ''
    },
    'aleksander': {
        character: 'Aleksander Tiedemann',
        actor: 'Peter Benedict'
    },
    'regina-teen': {
        character: '',
        actor: ''
    },
    'regina': {
        character: 'Regina Tiedemann',
        actor: 'Deborah Kaufmann'
    },
    'claudia-child': {
        character: '',
        actor: ''
    },
    'claudia': {
        character: 'Claudia Tiedemann',
        actor: 'Julika Jenkins'
    },
    'claudia-old': {
        character: '',
        actor: ''
    },
    'helge-child': {
        character: '',
        actor: ''
    },
    'helge': {
        character: '',
        actor: ''
    },
    'helge-old': {
        character: '',
        actor: ''
    },
    'tannhaus': {
        character: '',
        actor: ''
    },
    'tannhaus-old': {
        character: '',
        actor: ''
    },
    'bernd': {
        character: '',
        actor: ''
    },
    'bernd-old': {
        character: '',
        actor: ''
    },
    'jana-teen': {
        character: '',
        actor: ''
    },
    'jana': {
        character: '',
        actor: ''
    },
    'jana-old': {
        character: '',
        actor: ''
    },
    'egon': {
        character: '',
        actor: ''
    },
    'egon-old': {
        character: '',
        actor: ''
    },
    'tronte-child': {
        character: '',
        actor: ''
    },
    'tronte': {
        character: '',
        actor: ''
    },
    'tronte-old': {
        character: '',
        actor: ''
    },
    'ines-teen': {
        character: '',
        actor: ''
    },
    'ines': {
        character: '',
        actor: ''
    },
    'ines-old': {
        character: '',
        actor: ''
    },
    'peter': {
        character: 'Peter Doppler',
        actor: 'Stephan Kampwirth'
    },
    'doris': {
        character: '',
        actor: ''
    },
    'agnes': {
        character: '',
        actor: ''
    },
    'greta': {
        character: '',
        actor: ''
    },
    'jonas': {
        character: 'L\'Étranger',
        actor: 'Andreas Pietschmann'
    },
    'noah': {
        character: '',
        actor: ''
    },
}
