export interface Match {
    id: string;
    home_name: string;
    away_name: string;
    score: string;
    ht_score: string;
    ft_score: string;
    et_score: string;
    time: string;
    league_id: string;
    status: string;
    added: string;
    last_changed: string;
    home_id: string;
    away_id: string;
    events: any;
    league_name: string;
}

export interface Data {
    match: Match[];
}

export interface RootObject {
    success: boolean;
    data: Data;
}
