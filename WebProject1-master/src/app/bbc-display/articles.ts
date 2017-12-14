export interface Source {
    id: string;
    name: string;
}

export interface Article {
    source: Source;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: Date;
}

export interface RootObject {
    status: string;
    articles: Article[];
}