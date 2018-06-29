import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http'; 

import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchForArtistComponent } from './html5-test/search-for-artist/search-for-artist.component';
import { ServiceService } from 'src/app/html5-test/service.service';

import { ToastrModule } from 'ngx-toastr';
import { TruncatePipe } from 'src/app/html5-test/limitToPipe';

const appRoutes : Routes  = [
  {
      path:'', 
      component:SearchForArtistComponent, 
      pathMatch: 'full'
  },
  {
    path: "**",
    redirectTo: '',
    pathMatch: "full"
  }
  
]

@NgModule({
  declarations: [
    AppComponent,
    SearchForArtistComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [
    ServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
