import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-pages',
  templateUrl: './basic-pages.component.html',
  styleUrl: './basic-pages.component.css'
})
export class BasicPagesComponent {

  public nameLower:string = 'gEan'
  public nameUpper:string = 'GEAN'
  public nameCapital:string = 'geAN cArlos'
}
