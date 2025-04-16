export interface Character {
    name:string,
    status:string,
    gender:string,
}

export interface Response {
    info: any,
    results: Character[]
}