export abstract class PlaylistEntry {
    abstract title: string;
    abstract index: number;
}

export class Track extends PlaylistEntry {
    title: string;
    index: number;
    
    constructor(title: string, index: number) {
        super();
        this.title = title;
        this.index = index;
    } 
}

export class TrackCollection extends PlaylistEntry {
    title: string;
    index: number;

    children: Track[];

    constructor(title: string, index: number, children: Track[]) {
        super();
        this.title = title;
        this.index = index;
        this.children = children;
    }
}
