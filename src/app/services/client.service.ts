import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  clientURL:string="http://localhost:3000/client";
  constructor(private httpClient:HttpClient) { }

   //send Req to get all clients //
   getAllClients(){
    return this.httpClient.get<any[]>(this.clientURL);
  }
  //send Req to get client By id //
  getClientById(id:any){
    return this.httpClient.get(this.clientURL+'/'+id);
  }
  //send Req to delete client by ID //
  deleteClientById(id:any){
    return this.httpClient.delete(this.clientURL +'/'+id);
  }
  //Send Req to add client //
  addClient(client:any){
    return this.httpClient.post(this.clientURL,client);
  }
  //Req to edit client //
  editClient(newClient:any , id:any){
    return this.httpClient.put(this.clientURL+ '/'+id,newClient);
  }
}
