import api from "../api-config/rxjs-config";

export class Rest {
    getTeams() {
        return api.get('/teams');
    }

}