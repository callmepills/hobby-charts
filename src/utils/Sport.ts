type Sport = {
    sportId: string;
    name: string;
    description: string;
    longDescription?: string;
    disabled?: boolean;
};

const SPORTS: Sport[] = [
    {
        sportId: "baseball",
        name: "Baseball",
        description: "America's pastime and the oldest sport in the trading card hobby, celebrated for its storied history and legendary players.",
        longDescription: "Baseball is America's pastime and the oldest sport in the trading card hobby, celebrated for its storied history and legendary players. The sport has a deep-rooted tradition of card collecting that dates back to the late 19th century. Baseball cards often feature iconic imagery, rookie debuts, and historic moments that resonate with collectors. The hobby is characterized by its rich variety of card designs, from vintage sets to modern releases, making it a cornerstone of sports card collecting.",
        disabled: true,
    },
    {
        sportId: "basketball",
        name: "Basketball",
        description: "A rapidly growing sport in the trading card world, fueled by global superstars and dynamic gameplay.",
        longDescription: "Basketball is a rapidly growing sport in the trading card world, fueled by global superstars and dynamic gameplay. The sport has seen a surge in popularity among collectors, driven by the rise of international players and the excitement of high-scoring games. Basketball cards often feature vibrant designs, rookie debuts, and sought-after autographs that capture the energy of the sport. The hobby continues to evolve, with new releases and innovations that keep collectors engaged and eager to chase their favorite players.",
        disabled: true,
    },
    {
        sportId: "football",
        name: "Football",
        description: "A dominant sport in North America, known for its emphasis on rookie cards, autographs, and high-value collectibles.",
        longDescription: "Football is a dominant sport in North America, known for its emphasis on rookie cards, autographs, and high-value collectibles. The sport's trading card hobby has grown significantly over the years, with collectors seeking out cards of top prospects, star players, and memorable game moments. Football cards often feature dynamic designs, limited-edition parallels, and chase-worthy hits that appeal to both casual collectors and serious investors. The hobby reflects the excitement and intensity of the sport itself, making it a popular choice among sports card enthusiasts.",    },
    {
        sportId: "hockey",
        name: "Hockey",
        description: "A fast-paced, physical sport played on ice, known for its passionate fanbase and rich history of trading card collecting.",
        longDescription: "Hockey is a fast-paced, physical sport played on ice, known for its passionate fanbase and rich history of trading card collecting. The sport has produced some of the most iconic athletes in sports history, and hockey cards often feature dynamic action shots, rookie debuts, and memorable moments from the game. Collectors are drawn to hockey cards for their unique designs, limited editions, and the thrill of chasing rare autographs and memorabilia pieces.",
        disabled: true,
    },
];

export function getAllSports() {
    return SPORTS;
}

export function getSportById(sportId: string)  {
    return SPORTS.find((sport) => sport.sportId === sportId);
}