

 // interface for Games and and sites with odds
export interface Site {
    companyName: string;
    oddsTeam1: number;
    oddsTeam2: number;
}

export interface Game {
    team1: string;
    team2: string;
    startTime: string;
    sites: Site[];
}

export interface RootObject {
    games: Game[];
}
