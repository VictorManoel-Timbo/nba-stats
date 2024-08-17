import { Rest } from "@/services/rest/rest";
import { AxiosError } from "axios";
import { Observable, Subject, take } from "rxjs";

export class Service {
    private _dados = new Rest();

    private dados$: Subject<any> = new Subject<any>();

    dados: Observable<any> = this.dados$.asObservable()
    
    getTeams() {
        this._dados.getTeams().subscribe({
            next: (response) => {
                this.dados$.next(response)
            },
            error: () => {
                alert(AxiosError)
            }
        })
    }
}