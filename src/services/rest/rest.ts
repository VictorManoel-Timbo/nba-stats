import api from "../ApiConfig/rxjs";

export class Rest {
    getTeams() {
        return api.get('/teams');
    }

}