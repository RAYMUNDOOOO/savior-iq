import BlackGate from "/src/assets/blackGate.png";
import Ethanol from "/src/assets/ethanol.png";
import Benromach from "/src/assets/benromach.jpg";
import Guaiacol from "/src/assets/guaiacol.png";
import Ardbeg from "/src/assets/ardbeg.jpeg";
import Cotswolds from "/src/assets/cotswolds.jpeg";
import Elements from "/src/assets/elementsOfIslay.jpeg";
import gM from "/src/assets/gm.jpeg";
import Glendronach from "/src/assets/glendronach.jpeg";
import otherCompound from "/src/assets/compond3.jpg";

export const TileTable = [
    {
        img: [ BlackGate, Ethanol ], url: { whiskey: "/whiskey/1234", compound: "/flavour/Herbal" },
        filters: {
            whiskey: {
                region: ["Australia"],
                flavour: ["Sweet", "Floral"],
                brand: ["Black Gate"]
            },
            compound: {
                flavour: [ "Sweet", "Floral" ]
            }
        }
    },
    {
        img: [ Benromach, Guaiacol ], url: { whiskey: "/whiskey/1235", compound: "/flavour/Fruity" },
        filters: {
            whiskey: {
                region: ["Scotland"],
                flavour: ["Fruity", "Spicy"],
                brand: ["Benromach"]
            },
            compound: {
                flavour: ["Sweet", "Smokey", "Herbal"]
            }
        }
    },
    {
        img: [ Ardbeg, otherCompound ], url: { whiskey: "/whiskey/1236", compound: "/flavour/Spicy" },
        filters: {
            whiskey: {
                region: ["Scotland"],
                flavour: ["Sweet", "Spicy"],
                brand: ["Ardbeg"]
            },
            compound: {
                flavour: ["Floral", "Fruity"]
            }
        }
    },
    {
        img: [ Cotswolds, Guaiacol ], url: { whiskey: "/whiskey/1293213", compound: "/flavour/Sweet" },
        filters: {
            whiskey: {
                region: ["Rest of the world"],
                flavour: ["Sweet", "Smokey", "Herbal"],
                brand: ["Cotswolds"]
            },
            compound: {
                flavour: ["Spicy", "Herbal", "Peaty"]
            }
        }
    },
    {
        img: [ Elements, Ethanol ], url: { whiskey: "/whiskey/1293213", compound: "/flavour/Smokey" },
        filters: {
            whiskey: {
                region: ["Rest of the world"],
                flavour: ["Sweet", "Smokey", "Herbal"],
                brand: ["Elements of Islay"]
            },
            compound: {
                flavour: ["Smokey"]
            }
        }
    },
    {
        img: [ gM, otherCompound ], url: { whiskey: "/whiskey/0984092143", compound: "/flavour/Peaty" },
        filters: {
            whiskey: {
                region: ["Scotland"],
                flavour: ["Sweet", "Smokey", "Herbal"],
                brand: ["G&M"]
            },
            compound: {
                flavour: ["Peaty", "Herbal", "Floral"]
            }
        }
    },
    {
        img: [ Glendronach, Guaiacol ], url: { whiskey: "/whiskey/12392193", compound: "/flavour/Floral" },
        filters: {
            whiskey: {
                region: ["Scotland"],
                flavour: ["Sweet", "Smokey", "Herbal"],
                brand: ["Glendronach"]
            },
            compound: {
                flavour: ["Sweet", "Smokey", "Herbal"]
            }
        }
    },
]
