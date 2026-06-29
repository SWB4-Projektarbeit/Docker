import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Building, FlatRoom } from '../../models/room.model';

@Injectable({ providedIn: 'root' })
export class RoomService {
  private readonly backendUrl = 'http://localhost:8215'
  private readonly baseUrl = '/api-timesy';

  constructor(private http: HttpClient) {}

  getRooms(filters?: { building?: string; floor?: string; room_name?: string }): Observable<Building[]> {
    let params = new HttpParams();
    if (filters?.building) params = params.set('building', filters.building);
    if (filters?.floor) params = params.set('floor', filters.floor);
    if (filters?.room_name) params = params.set('room_name', filters.room_name);
    return this.http.get<Building[]>(`${this.backendUrl}${this.baseUrl}/rooms`, { params });
  }

  getFlatRooms(filters?: { building?: string; floor?: string; room_name?: string }): Observable<FlatRoom[]> {
    return this.getRooms(filters).pipe(
      map((buildings: Building[]) => buildings.flatMap(b =>
        b.rooms.map(r => ({
          uid: r.roomUid,
          name: r.roomName,
          building: b.buildingName,
          floor: r.floor,
          templateUid: r.templateUid,
          templateName: r.templateName,
          schedule: r.schedule,
        }))
      ))
    );
  }
}
