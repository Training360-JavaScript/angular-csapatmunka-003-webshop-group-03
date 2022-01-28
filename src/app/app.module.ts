import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { Cat01Component } from './page/cat01/cat01.component';
import { HomeComponent } from './page/home/home.component';
import { FilterPipe } from './pipe/filter.pipe';
import { FeaturedPipe } from './pipe/featured.pipe';
import { NumberrandomPipe } from './pipe/numberrandom.pipe';
import { Cat02Component } from './page/cat02/cat02.component';
import { Cat03Component } from './page/cat03/cat03.component';
import { Cat04Component } from './page/cat04/cat04.component';
import { Cat05Component } from './page/cat05/cat05.component';
import { Cat06Component } from './page/cat06/cat06.component';
import { Cat07Component } from './page/cat07/cat07.component';
import { Cat08Component } from './page/cat08/cat08.component';
import { Cat09Component } from './page/cat09/cat09.component';
import { MovieCardComponent } from './common/movie-card/movie-card.component';
import { MoviePagerComponent } from './common/movie-pager/movie-pager.component';
import { TextsorterPipe } from './pipe/textsorter.pipe';
import { TestpageComponent } from './page/testpage/testpage.component';
import { SorterPipe } from './pipe/sorter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    Cat01Component,
    HomeComponent,
    FilterPipe,
    FeaturedPipe,
    NumberrandomPipe,
    Cat02Component,
    Cat03Component,
    Cat04Component,
    Cat05Component,
    Cat06Component,
    Cat07Component,
    Cat08Component,
    Cat09Component,
    MovieCardComponent,
    MoviePagerComponent,
    TextsorterPipe,
    TestpageComponent,
    SorterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
