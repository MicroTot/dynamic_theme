import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ActivitiesComponent } from './pages/activities/activities.component';
import { AmenitiesComponent } from './pages/amenities/amenities.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { GalleryComponent } from './pages/gallery/gallery.component';

import { IndexComponent } from './pages/index/index.component';
import { RoomsComponent } from './pages/rooms/rooms.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: IndexComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'activities',
    component: ActivitiesComponent
  },
  {
    path: 'amenities',
    component: AmenitiesComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'gallery',
    component: GalleryComponent
  },
  {
    path: 'rooms',
    component: RoomsComponent
  },
  {
    path: 'contacts',
    component: ContactsComponent
  },
  { 
    path: '**', 
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
