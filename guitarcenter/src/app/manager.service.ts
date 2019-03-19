import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  guiter = [
    {

        id: 1,
        name: 'Fender Acoustasonic Telecaster Acoustic-Electric Guitar',

        // tslint:disable-next-line:max-line-length
        description: 'Handcrafted in Corona, California, the Fender American Acoustasonic Telecaster gives you a whole arsenal of convincing acoustic and electric tones in one great-feeling guitar. Thanks to its revolutionary Fender and Fishman-designed Acoustic Engine, you can choose from an assortment of 10 distinct guitar and tonewood combinations. With all this versatility, the Fender Acoustasonic might be the only guitar you’ll need for any gig.',
        price: 1999.99,
        itemNum: 1500000000254931,
        type: 'electric',
        // tslint:disable-next-line:max-line-length
        image: 'https://media.guitarcenter.com/is/image/MMGS7/Acoustasonic-Telecaster-Acoustic-Electric-Guitar-Dakota-Red/L48020000006000-00-220x220.jpg'
    },

    {
        id: 2,
        name: 'Yamaha F335 Acoustic Guitar',

        // tslint:disable-next-line:max-line-length
        description: 'Yamahas F335 gives you that classic dreadnought shape and sound at a price point that wont break your bank. The F335s tonewood combination includes a laminate spruce top, rosewood fingerboard and bridge, and meranti back and sides. Gold die-cast tuners provide smooth and accurate tuning while a tortoiseshell pickguard gives a bit more style.',
        price: 159.99 ,
        itemNum: 127474187613991390,
        type: 'acoustic',
        image: 'https://media.guitarcenter.com/is/image/MMGS7/F335-Acoustic-Guitar-Black/512940000001000-00-220x220.jpg'

    },
    {
        id: 3,
        name: 'Gibson Les Paul Special P-90 Limited Edition Electric Guitar Honey Burst',

        // tslint:disable-next-line:max-line-length
        description: 'Harking back to the electronics of the mid-\'50s, this very limited-edition Les Paul Special is loaded with Gibson\'s acclaimed P-90 single-coil pickups for some extra bark and bite. With a thin nitro-finished mahogany construction, set-neck and stable tune-o-matic bridge, it\'s everything you could want in a Les Paul, in a limited-edition Honey Burst',
        price: 999.99 ,
        itemNum: 1500000220202 ,
        type: 'electric',
        // tslint:disable-next-line:max-line-length
        image: 'https://media.guitarcenter.com/is/image/MMGS7/Les-Paul-Special-P-90-Limited-Edition-Electric-Guitar-Honey-Burst/L21754000001000-00-220x220.jpg'

    },

    {
        id: 4,
        name: 'PRS John Mayer Silver Sky Electric Guitar',

        // tslint:disable-next-line:max-line-length
        description: 'The PRS Silver Sky is the result of a close collaboration between Grammy Award-winning musician John Mayer and Paul Reed Smith. More than two and half years in the making, the Silver Sky is a vintage-inspired instrument that is at once familiar, but also newly PRS through and through. This model was based off of Mayer and Smith’s favorite elemen.',
        price: 2299.00 ,
        itemNum:  150000000020631 ,
        type: 'electric',
        // tslint:disable-next-line:max-line-length
        image: 'https://media.guitarcenter.com/is/image/MMGS7/John-Mayer-Silver-Sky-Electric-Guitar-Dodgem-Blue/L18249000008000-00-220x220.jpg'

    },
    {
        id: 5,
        name: 'Epiphone Les Paul Special II Plus Limited Edition Electric Guitar',

        // tslint:disable-next-line:max-line-length
        description: 'Since its introduction almost 20 years ago, The Special-II has met the needs of countless musicians with its combination of Les Paul features, great tone and affordability. The Special II Plus Top Limited Edition Electric Guitar is made with a flamed maple top, mahogany body, bolt-on mahogany neck, smooth 22-fret rosewood fingerboard, ',
        price: 229.00 ,
        itemNum:  1290440071506 ,
        type: 'electric',
        // tslint:disable-next-line:max-line-length
        image: 'https://media.guitarcenter.com/is/image/MMGS7/Les-Paul-Special-II-Plus-Limited-Edition-Electric-Guitar-Transparent-Black/430855000011000-00-220x220.jpg'

    },
    {
        id: 6,
        name: 'Gibson Les Paul Standard 2018 Electric Guitar Blood Orange Burst',

        // tslint:disable-next-line:max-line-length
        description: 'The iconic Les Paul Standard is celebrated by the world’s greatest musicians as the standard for perfection in the world of electric guitars. The new Les Paul Standard features the popular asymmetrical SlimTaper neck profile with Ultra-Modern weight relief for increased comfort and playability. Impeccable looks are highlighted by the powerful, ',
        price: 2799.00 ,
        itemNum:   1500000137358  ,
        type: 'electric',
        // tslint:disable-next-line:max-line-length
        image: 'https://media.guitarcenter.com/is/image/MMGS7/Les-Paul-Standard-2018-Electric-Guitar-Blood-Orange-Burst/K35707000001000-00-220x220.jpg'

    },
    {
        id: 7,
        name: 'Breedlove Pursuit Concert Sitka-Koa Acoustic-Electric Guitar With Gig Bag Whiskey Burst',

        // tslint:disable-next-line:max-line-length
        description: 'The Pursuit Concert acoustic-electric is Breedlove’s best-selling guitar. This Sitka spruce topped and Hawaiian koa-bodied version sounds warm and beautiful. The Pursuit Concert Sitka-Koa acoustic-electric guitar is easy to play with a 1-11/16 radiused neck. For live performances, it\'s equipped with Belcat\'s Iris-1 active pickup system with a 3-ba. ',
        price: 799.99 ,
        itemNum:    1500000225333   ,
        type: 'acoustic',
        // tslint:disable-next-line:max-line-length
        image: 'https://media.guitarcenter.com/is/image/MMGS7/Pursuit-Concert-Sitka-Koa-Acoustic-Electric-Guitar-With-Gig-Bag-Whiskey-Burst/L27647000001000-00-220x220.jpg'

    },
    {
        id: 8,
        name: 'Takamine GD-30CE 12-String Acoustic-Electric Guitar Wine Red',

        // tslint:disable-next-line:max-line-length
        description: 'This special edition GD30CE-12 dreadnought is a stage-worthy 12-string acoustic-electric guitar with a solid-top construction, soft Venetian-style cutaway, superior-sounding Takamine electronics system and an exclusive Wine Red finish. This gorgeous performance-ready model is crafted with a solid spruce top paired with a mahogany body that combine . ',
        price: 449.99 ,
        itemNum:    1500000210810   ,
        type: 'acoustic',
        // tslint:disable-next-line:max-line-length
        image: 'https://media.guitarcenter.com/is/image/MMGS7/GD-30CE-12-String-Acoustic-Electric-Guitar-Wine-Red/L18559000001000-00-220x220.jpg'

    },

];

  constructor() { }
}
