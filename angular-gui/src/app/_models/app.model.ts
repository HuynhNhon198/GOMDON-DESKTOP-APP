export interface Irole {
    id?: number;
    code?: string;
    name?: string;
    uid?: string;
    userName?: string;
}

export interface IPort {
    port: string,
    desc: string
}

export interface IResultOpenPort {
    port: string,
    err: string
}