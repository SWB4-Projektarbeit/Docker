import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly backendUrl = 'http://localhost:8215';

  constructor(private http: HttpClient) {}

  login() {
    globalThis.location.href = `${this.backendUrl}/api-timesy/login?redirect_uri=${globalThis.location.href}`;
  }

  logout() {
    this.http.get(`${this.backendUrl}/api-timesy/logout`).subscribe(() => {
        globalThis.location.reload();
    });
  }
}
