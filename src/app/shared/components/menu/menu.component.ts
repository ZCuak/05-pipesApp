import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: ``
})
export class MenuComponent implements OnInit{
  items: MenuItem[] | undefined;

  ngOnInit() {
      this.items = [
          { label: 'Pipes de angular',
             icon: 'pi pi-desktop',
             items: [
              {
              label: 'Textos y Fechas',
              icon: 'pi pi-align-left',
              routerLink: 'basic'
              },
              {
              label: 'Números',
              icon: 'pi pi-dollar',
              routerLink: 'numbers'
              },
              {
              label: 'No comunes',
              icon: 'pi pi-globe',
              routerLink: 'uncommon'
              },
            ]
          },


          { label: 'Pipes Personalizados',
            icon: 'pi pi-cog',
            items: [
              {
                label: 'Otros',
                icon: 'pi pi-cog'
              }
          ]}
      ];
  }
}
