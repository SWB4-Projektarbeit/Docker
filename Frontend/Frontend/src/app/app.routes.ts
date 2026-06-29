import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'rooms', pathMatch: 'full' },
  {
    path: 'rooms',
    loadComponent: () => import('./pages/room-selection/room-selection.component').then(m => m.RoomSelectionComponent),
  },
  {
    path: 'rooms/:roomUid/template',
    loadComponent: () => import('./pages/template-selection/template-selection.component').then(m => m.TemplateSelectionComponent),
  },
  { path: '**', redirectTo: 'rooms' },
];
