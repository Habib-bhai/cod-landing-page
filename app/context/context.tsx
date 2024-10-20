"use client"
import  {createContext, ReactNode,  useContext,useState, } from "react"

interface Data {
    id: number
    title: string
    description: string
    images: string[]
    modes: {
        mode: string
        modeDescription: string,
        image: string
    }[]
    logo: string
}

type ContextValue = {
    data: Data[];
    dataToSend: Data | null;
    setDataToSend: React.Dispatch<React.SetStateAction<Data | null>>;
  };


const data: Data[] = [
    {
        id: 1,
        title: "BLACK OPS 6",
        description: "While the Gulf War commands the global spotlight, a shadowy clandestine force has infiltrated the highest levels of the CIA, branding anyone who resists as traitors. Exiled from their agency and country that once hailed them as heroes, Black Ops veteran Frank Woods and his team find themselves hunted by the military machine that created them.",
        images: ["/blackOps/blackops6.png","/blackOps/B06-1.png","/blackOps/BO6_Campaign.png","/blackOps/BO6_MP.png"],
        modes: [
            {
                mode: "CAMPAIGN",
                modeDescription: "Combat means making choices – different loadouts, different paths through the mission. In addition to the signature, cinematic Call of Duty campaign missions, Modern Warfare III introduces open combat missions that provide more player choice.",
                image: "/blackOps/BO6_Campaign.png"
            },
            {
                mode: "MULTIPLAYER",
                modeDescription: "Lock and load for the ultimate Multiplayer Experience with Modern Warfare III, featuring remastered and modernized Modern Warfare 2 (2009) maps, new modes, new weapons, and a return to classic gameplay mechanics as well as the all-new aftermarket parts customization system.",
                image:"/blackOps/BO6_MP.png"
            },
            {
                mode: "ZOMBIES",
                modeDescription: "Combat means making choices – different loadouts, different paths through the mission. In addition to the signature, cinematic Call of Duty campaign missions, Modern Warfare III introduces open combat missions that provide more player choice.",
                image: "/blackOps/B06-1.png"
            },
        ],
        
        logo: "/BO6_Banner.png"

    },
    {
        id: 2,
        title: "MODERN WARFARE III",
        description: "In the direct sequel to the record-breaking Call of Duty: Modern Warfare II, Captain Price and Task Force 141 face off against the ultimate threat. The ultranationalist war criminal Vladimir Makarov is extending his grasp across the world causing Task Force 141 to fight like never before.",
        images: ["/wiii/wiii-1.png","/wiii/wiii-2.png","/wiii/wiii-3.png","/wiii/wiii-4.png","/wiii/wiii-5.png","/wiii/wiii-6.png"],
        modes: [
            {
                mode: "CAMPAIGN",
                modeDescription: "Combat means making choices – different loadouts, different paths through the mission. In addition to the signature, cinematic Call of Duty campaign missions, Modern Warfare III introduces open combat missions that provide more player choice.",
                image:"/wiii/wiii-2.png"
            },
            {
                mode: "MULTIPLAYER",
                modeDescription: "Lock and load for the ultimate Multiplayer Experience with Modern Warfare III, featuring remastered and modernized Modern Warfare 2 (2009) maps, new modes, new weapons, and a return to classic gameplay mechanics as well as the all-new aftermarket parts customization system.",
                image: "/wiii/wiii-3.png"
            },
            {
                mode: "ZOMBIES",
                modeDescription: "Combat means making choices – different loadouts, different paths through the mission. In addition to the signature, cinematic Call of Duty campaign missions, Modern Warfare III introduces open combat missions that provide more player choice.",
                image: "/wiii/wiii-6.png"
            },
        ],
         logo: "/wiii/wiii-logo.png"

    },
    {
        id: 3,
        title: "WARZONE",
        description: "Call of Duty: Warzone is one of the biggest free-to-play Battle Royale games of all time. Team up or fly in solo across several huge environments; be the last squad standing to win. Play a variety of Battle Royale game modes including special limited-time modes throughout the year.",
        images: ["/card3.jpg","/warzone/resurgence.png", "/warzone/warzone-two.png", "/warzone/warzone-three.png"],
        modes: [
            {
                mode: "RESURGENCE",
                modeDescription: "A fan favorite, this Mode is a spin on the Battle Royale formula that emphasizes a faster-paced, more aggressive playstyle on smaller maps. Rather than being thrown into the Gulag, Players that are eliminated will redeploy after a short respawn timer - that is, as long as they have teammates that are still alive. ",
                image: "/warzone/resurgence.png"
            },
            {
                mode: "STRONGHOLD AND BLACK SITES",
                modeDescription: "Risk it all by infiltrating AI-patrolled buildings and score some high-end exclusive loot. With Strongholds you can fight through the enemy Stronghold to earn your loadout drop. With Black Sites prepare for the ultimate showdown to earn durable loot. ",
                image: "/warzone/warzone-two.png"
            },
            {
                mode: "THE GULAG",
                modeDescription: "The classic Warzone overtime mechanic in this last chance face off with the Domination-style flag control point for overtime.",
                image: "/warzone/warzone-three.png"
            },
        ],
         logo: "/warzone-logo-sm.png"

    },
    {
        id: 4,
        title: "BLACK CELL",
        description: "Enter BlackCell, the Battle Pass offering in Season 6 that has more than 7,000 Call of Duty Points' worth of items*, to be used across both games.",
        images: ["/blackCell.jpg","/blackCell/blackCell-1.jpg","/blackCell/blackCell-2.jpg", "/blackCell/blackCell-3.jpg", "/blackCell/blackCell-4.jpg", "/blackCell/blackCell-5.jpg"],
        modes: [
            {
                mode: "HAUNT YOUR FOES",
                modeDescription: "The ghastly Alone fuses three bodies into one in a horrific mutant Operator Skin that animates with dripping blood and a static pulse. ",
                image: "/blackCell/blackCell-mode1.jpg"
            },
            {
                mode: "MELT YOUR ENEMIES",
                modeDescription: "The “Ghost Charmer” Assault Rifle, featuring a ghostly animated skin that pulses over the weapon’s stock black and white design.",
                image: "/blackCell/blackCell-mode2.jpg"
            },
            {
                mode: "THROAT RIP",
                modeDescription: "Instantly access the “Throat Rip” Finishing Move to silence your targets with a devastating attack to the jugular.",
                image: "/blackCell/blackCell-mode3.jpg"
            },
        ],
         logo: ""

    },
    {
        id: 5,
        title: "CALL OF DUTY: WARZONE MOBILE",
        description: "Return to Verdansk and squad up in Rebirth Island with real Call of Duty graphics. Join the next era of combat with Call of Duty: Warzone Mobile!",
        images: ["/warzone-mobile/warzone-mobile.png","/warzone-mobile/warzone-mobile-1.png","/warzone-mobile/warzone-mobile-2.png", "/warzone-mobile/warzone-mobile-3.png"],
        modes: [
            {
                mode: "WE HAVE THE MAPS",
                modeDescription: "Explore and dominate all competitors in iconic Battle Royale maps, Verdansk and Rebirth Island. Squad up with friends in Multiplayer maps Shipment, Shoot House, and Scrapyard.",
                image: "/warzone-mobile/warzone-mobile-mode1.png"
            },
            {
                mode: "LEVEL UP ANYWHERE​",
                modeDescription: "Play Call of Duty: Warzone Mobile and advance your progression across Call of Duty®: Modern Warfare® III and Call of Duty®: Warzone™.",
                image: "/warzone-mobile/warzone-mobile-mode2.png"
            },
            {
                mode: "MORE REAL PLAYERS",
                modeDescription: "Test your skills in battle by surviving and dominating the frontlines against up to 120 real players in exciting Battle Royale matches.",
                image: "/warzone-mobile/warzone-mobile-mode3.png"
            },
        ],
         logo: ""

    }
]




const Context = createContext<ContextValue | undefined>(undefined)


export  function useDataContext () {
    const ContextValue = useContext(Context)
    if(!ContextValue) throw new Error("Context is undefined");
    return ContextValue
}

const ContextProvider: React.FC<{children:ReactNode}> = ({children })=> {
    const [dataToSend, setDataToSend] = useState<Data | null>(data[0])

  

  return (
     <Context.Provider value={ { data, dataToSend, setDataToSend } }>
        {children}
     </Context.Provider>
  )
}

export  {ContextProvider, Context}

// export default useDataContext