export interface ResponsePosts {
    title: string;
    description: string;
    date: string;
}

export interface RequestPosts {
    id: string;
    post: ResponsePosts;
}