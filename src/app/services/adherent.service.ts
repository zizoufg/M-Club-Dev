import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdherentService {

  adherentURL:string="http://localhost:3000/adherent";
  constructor(private httpClient:HttpClient) { }

   //send Req to get all adherents //
   getAllAdherents(){
    return this.httpClient.get<any[]>(this.adherentURL);
  }
  //send Req to get adherent By id //
  getAdherentById(id:any){
    return this.httpClient.get(this.adherentURL+'/'+id);
  }
  //send Req to delete adherent by ID //
  deleteAdherentById(id:any){
    return this.httpClient.delete(this.adherentURL +'/'+id);
  }
  //Send Req to add adherent //
  addAdherent(adherent:any){
    return this.httpClient.post(this.adherentURL,adherent);
  }
  //Req to edit adherent //
  editAdherent(newAdherent:any , id:any){
    return this.httpClient.put(this.adherentURL+ '/'+id,newAdherent);
  }
}
