export interface Nade {
    createdAt: string;
    description: string[];
    endPosition: string;
    favoriteCount: number;
    game: string;
    gfycat: {
        avgColor: string;
        duration: string;
        gfyId: string;
        largeVideoUrl: string;
        largeVideoWebm: string;
        smallVideoUrl: string;
        _id: string;
    };
    imageLineup: {
        id: string;
        stack: string;
        url: string;
        _id: string;
    };
    imageLineupThumb: {
        id: string;
        stack: string;
        url: string;
        _id: string;
    };
    imageLineupThumbUrl: string;
    imageMain: {
        id: string;
        stack: string;
        url: string;
        _id: string;
    };
    images: string[];
    map: string;
    movement: string;
    new: boolean;
    numReviews: number;
    oneWay: boolean;
    reviews: string[];
    score: number;
    slug: string;
    startPosition: string;
    status: string;
    tags: string[];
    teamSide: string;
    technique: string;
    tickrate: string;
    type: string;
    updatedAt: string;
    user: string;
    viewCount: number;
}
