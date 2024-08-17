export class Teams {
    constructor(
        public data?: [
            {
                id: number,
                conference: string,
                division: string,
                city: string,
                name: string,
                full_name: string,
                abbreviation: string
            }
        ]
    ) { }
}