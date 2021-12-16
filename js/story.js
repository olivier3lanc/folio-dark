const story = [
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
    'noah',
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
    'wormhole-c'
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
        character: 'Michael Kahnwald',
        actor: 'Sebastian Rudolph'
    },
    'hannah-child': {
        character: 'Hannah Kahnwald',
        actor: 'Ella Lee'
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
        character: 'Ulrich Nielsen',
        actor: 'Ludger Bökelmann'
    },
    'katharina-teen': {
        character: 'Katharina Nielsen',
        actor: 'Nele Trebs'
    },
    'katharina': {
        character: 'Katharina Nielsen',
        actor: 'Jördis Triebel'
    },
    'charlotte-teen': {
        character: 'Charlotte Doppler',
        actor: 'Stephanie Amarell'
    },
    'charlotte': {
        character: 'Charlotte Doppler',
        actor: 'Karoline Eichhorn'
    },
    'aleksander-teen': {
        character: 'Aleksander Tiedemann',
        actor: 'Béla Gabor Lenz'
    },
    'aleksander': {
        character: 'Aleksander Tiedemann',
        actor: 'Peter Benedict'
    },
    'regina-teen': {
        character: 'Regina Tiedemann',
        actor: 'Lydia Maria Makrides'
    },
    'regina': {
        character: 'Regina Tiedemann',
        actor: 'Deborah Kaufmann'
    },
    'claudia-child': {
        character: 'Claudia Tiedemann',
        actor: 'Gwendolyn Göbel'
    },
    'claudia': {
        character: 'Claudia Tiedemann',
        actor: 'Julika Jenkins'
    },
    'claudia-old': {
        character: 'Claudia Tiedemann',
        actor: 'Lisa Kreuzer'
    },
    'helge-child': {
        character: 'Helge Doppler',
        actor: 'Tom Philipp'
    },
    'helge': {
        character: 'Helge Doppler',
        actor: 'Peter Schneider'
    },
    'helge-old': {
        character: 'Helge Doppler',
        actor: 'Hermann Beyer'
    },
    'tannhaus': {
        character: 'H.G. Tannhaus',
        actor: 'Arnd Klawitter'
    },
    'tannhaus-old': {
        character: 'H.G. Tannhaus',
        actor: 'Christian Steyer'
    },
    'bernd': {
        character: 'Bernd Doppler',
        actor: 'Anatole Taubman'
    },
    'bernd-old': {
        character: 'Bernd Doppler',
        actor: 'Michael Mendl'
    },
    'jana-teen': {
        character: 'Jana Nielsen',
        actor: 'Rike Sindler'
    },
    'jana': {
        character: 'Jana Nielsen',
        actor: 'Anne Lebinsky'
    },
    'jana-old': {
        character: 'Jana Nielsen',
        actor: 'Tatja Seibt'
    },
    'egon': {
        character: 'Egon Tiedemann',
        actor: 'Sebastian Hülk'
    },
    'egon-old': {
        character: 'Egon Tiedemann',
        actor: 'Christian Pätzold'
    },
    'tronte-child': {
        character: 'Tronte Nielsen',
        actor: 'Joshio Marlon'
    },
    'tronte': {
        character: 'Tronte Nielsen',
        actor: 'Felix Kramer'
    },
    'tronte-old': {
        character: 'Tronte Nielsen',
        actor: 'Walter Kreye'
    },
    'ines-teen': {
        character: 'Ines Kahnwald',
        actor: 'Lena Urzendowsky'
    },
    'ines': {
        character: 'Ines Kahnwald',
        actor: 'Anne Ratte-Polle'
    },
    'ines-old': {
        character: 'Ines Kahnwald',
        actor: 'Angela Winkler'
    },
    'peter': {
        character: 'Peter Doppler',
        actor: 'Stephan Kampwirth'
    },
    'doris': {
        character: 'Doris Tiedemann',
        actor: 'Luise Heyer'
    },
    'agnes': {
        character: 'Agnes Nielsen',
        actor: 'Antje Traue'
    },
    'greta': {
        character: 'Greta Doppler',
        actor: 'Cordelia Wege'
    },
    'jonas': {
        character: 'L\'Étranger',
        actor: 'Andreas Pietschmann'
    },
    'noah': {
        character: 'Noah',
        actor: 'Mark Waschke'
    },
}
