import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  user: any;

  constructor() {}

  getCurrentUser(): any {
    // Get the current user from local storage or other storage mechanism
    // and return it as an object
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      this.user = JSON.parse(currentUser);
    }
    return this.user;
  }
  isAuthenticated(): boolean {
    // Check if the user is authenticated (i.e., if the user object exists)
    
    return !!this.getCurrentUser();
    
  }

  isAuthorized(email: string, password: string): boolean {
    // Check if the current user is an admin
    return this.isAuthenticated() && this.isAdmin(email, password);
  }

  private isAdmin(email: string, password: string): boolean {
    // Check if the specified email and password match an admin in the AdminTable
    const admins = [
      { email: 'zizoufg', password: 'password1' },
      { email: 'bej', password: 'password2' },
      { email: 'hamouda', password: 'password3' }
    ];
    return admins.some(admin => admin.email === email && admin.password === password);
  }
}
