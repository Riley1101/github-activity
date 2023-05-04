export interface Author {
    name: string;
    email: string;
    date: string;
}

export interface Committer {
    name: string;
    login : string;
    avatar_url : string;
}
export interface Commit {
    author: Author;    
    committer: Author;
    message: string;
}

export interface CommitData{
    author: Author;
    sha: string;
    commit: Commit;
    html_url: string;
    committer: Committer;
}

