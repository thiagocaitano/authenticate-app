import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient, HttpParams } from '@angular/common/http';
import { UsuarioDTO } from "../../core/dto/usuario-dto";
import { Observable } from "rxjs";

@Injectable({
	providedIn: 'root'
})
export class LoginService {
	private url = environment.apiUrl + 'autenticacao/';

	constructor(
		private http: HttpClient
	) { }

    public login(usuarioDTO: UsuarioDTO): Observable<any> {
        return this.http.post(this.url + "login", usuarioDTO)
    }

}