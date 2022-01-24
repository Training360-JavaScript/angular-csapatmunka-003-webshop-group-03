import { Injectable } from '@angular/core';

export interface IMenuItem {
  text: string;
  link: string;
  icon?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  appName: string = 'SOLID Cast';

  menuItems: IMenuItem[] = [
    {text: 'Home', link: '/', icon: 'home'},
    {text: 'Action', link: '/cat01'},
    {text: 'Animation', link: '/cat02'},
    {text: 'Crime', link: '/cat03'},
    {text: 'Drama', link: '/cat04'},
    {text: 'Comedy', link: '/cat05'},
    {text: 'Romance', link: '/cat06'},
    {text: 'Fantasy', link: '/cat07'},
    {text: 'Sci-fi', link: '/cat08'},
    {text: 'Horror', link: '/cat09'},
    {text: 'Tesztoldal', link: '/test'},
  ];

  constructor() { }
}
