export interface IPoo {
    id: number,
    createdAt: string,
    updatedAt: string,
    content: string,
    likes: number,
    userId: number
}

export interface PooData {
    statusCode: number;
    data: {
        counts: number;
        tweets: IPoo[]
    }
}

export interface ICreatePoo {
    statusCode: number;
    data: IPoo
}