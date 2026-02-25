export interface Blogger{
    id:number;
    nickname:string;
    avatar:string;
    bio:string;
    banned:boolean;
}


export interface BlogPost{
    id:number;
    blogger:Blogger;
    title:string;
    content:string;
    date:string;
    published:boolean;
    tags:string;
}