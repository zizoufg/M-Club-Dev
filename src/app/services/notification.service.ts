import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  notificationURL:string="http://localhost:3000/notification";
  constructor(private httpClient:HttpClient) { }

  //send Req to get all notifications //
  getAllNotifications(){
    return this.httpClient.get<any[]>(this.notificationURL);
  }
  //send Req to get notification By id //
  getNotificationById(id:any){
    return this.httpClient.get(this.notificationURL+'/'+id);
  }
  //send Req to delete notification by ID //
  deleteNotificationById(id:any){
    return this.httpClient.delete(this.notificationURL +'/'+id);
  }
  //Send Req to add notification //
  addNotification(notification:any){
    return this.httpClient.post(this.notificationURL,notification);
  }
  //Req to edit notification //
  editNotification(newNotification:any , id:any){
    return this.httpClient.put(this.notificationURL+ '/'+id,newNotification);
  }
}
