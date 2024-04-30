import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private baseEndpoint = 'http://localhost:8080/api/usuarios';
  private cabeceras: HttpHeaders = new HttpHeaders({'ContentType': 'application/json'});

  constructor(private http: HttpClient) { }

  public  listar (): Observable<Usuario[]>{
   return this.http.get<Usuario[]>(this.baseEndpoint);
  }

  public listarpaguinas(page: string, size: string): Observable<any>{
    const params =new HttpParams()
    .set('page', page)
    .set('size', size);
return this.http.get<any>(`${this.baseEndpoint}/all`,{params: params});
  }

  public ver (id: number): Observable<Usuario>{
   return this.http.get<Usuario>(`${this.baseEndpoint}/${id}`);
  }
  public  crear (alumno:Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(this.baseEndpoint,alumno, {headers: this.cabeceras});
  }
 public editar (alumno:Usuario): Observable<Usuario>{
  return this.http.put<Usuario>(`${this.baseEndpoint}/${alumno.id}`,alumno,{headers: this.cabeceras});
 }
public eliminar (id: number): Observable<void>{
  return this.http.delete<void>(`${this.baseEndpoint}/${id}`);
}
}
