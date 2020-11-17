import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http';
import 'rxjs/Rx';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  presURL = 'https://comprasapp-d8c61.firebaseio.com/proveedores.json';
  preURL = 'https://comprasapp-d8c61.firebaseio.com/proveedores';
  proveedores: any = [];
  constructor(private http: HttpClient) {}

  postProveedor( proveedor: any) {
    const newpres = JSON.stringify(proveedor);
    const headers = new HttpHeaders({
    'Content-Type': 'application/json'
    });
    return this.http.post(this.presURL, newpres, {headers}).pipe(
      map( res => {
        console.log(res);
        return res;
      })
    )
}
getProveedores () {
  return this.http.get(this.presURL).pipe(
    map(res => res)
  )
}
getProveedor ( id$: string ){
  const url = `${ this.preURL }/${ id$ }.json`;
  return this.http.get( url ).pipe(
  map( res => res));
  }
  putProveedor( proveedor, id$: string) {
    const newpre = JSON.stringify(proveedor);

    const url = `${ this.preURL }/${ id$ }.json`;
    return this.http.put( url, newpre,{headers: new HttpHeaders().set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
    .set('Access-Control-Allow-Headers', 'Content-Type')}).pipe(
    map( res => {
    console.log(res);
    return res;
    }))
    }

    delProveedor ( id$: string ) {
      const url = `${ this.preURL }/${ id$ }.json`;
      return this.http.delete( url )
      .map( res => res);
      }
}
