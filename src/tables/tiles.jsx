import BlackGate from "/src/assets/blackGate.png";
import Ethanol from "/src/assets/ethanol.png";
import Benromach from "/src/assets/benromach.jpg";
import Guaiacol from "/src/assets/guaiacol.png";

export const TileTable = [
    {
        img: [ BlackGate, Ethanol ], url: { whiskey: "/whiskey", compound: "/" },
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
        img: [ Benromach, Guaiacol ], url: { whiskey: "/whiskey", compound: "/" },
        filters: {
            whiskey: {
                region: ["India"],
                flavour: ["Sweet", "Smokey", "Herbal"],
                brand: ["Benromach"]
            },
            compound: {
                flavour: ["Sweet", "Smokey", "Herbal"]
            }
        }
    }
]