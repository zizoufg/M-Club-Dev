import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {
  equipeURL:string="http://localhost:3000/equipe";
  constructor(private httpClient:HttpClient) { }

  //send Req to get all equipes //
  getAllEquipes(){
    return this.httpClient.get<any[]>(this.equipeURL);
  }
  //send Req to get equipe By id //
  getEquipeById(id:any){
    return this.httpClient.get(this.equipeURL+'/'+id);
  }
  //send Req to delete equipe by ID //
  deleteEquipeById(id:any){
    return this.httpClient.delete(this.equipeURL +'/'+id);
  }
  //Send Req to add equipe //
  addEquipe(equipe:any){
    return this.httpClient.post(this.equipeURL,equipe);
  }
  //Req to edit equipe //
  editEquipe(newEquipe:any){
    return this.httpClient.put(this.equipeURL+ '/'+ newEquipe.id,newEquipe);
  }
}
