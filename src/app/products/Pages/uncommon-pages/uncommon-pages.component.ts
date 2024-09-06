import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-pages',
  templateUrl: './uncommon-pages.component.html',
  styleUrl: './uncommon-pages.component.css'
})
export class UncommonPagesComponent {
// i18nSelect
public name:string = 'Geancarlos';
public gender: 'male'|'female' = 'male';
public invitationMap = {
  'male':'invitarlo',
  'female':'invitarla'
}


changeClient():void{
  this.name = 'Melissa';
  this.gender = 'female';
}
// i18nPlural
public clients: string[] = ['Maria','Pedro','Fernando','Hernando','Eduardo','Melissa','Natalia']
public clientsMap = {
  '=0':'no tenemos ningún cliente esperando',
  '=1':'tenemos 1 cliente esperando',
  'other':'tenemos # clientes esperando',
}

deleteClient():void{
  this.clients.shift();
}

// KeyValue Pipe
public person ={
  'name':'Geancarlos',
  'age': 22,
  'address':'Chiclayo'
}

// Async Pipe
public myObservableTimer = interval(2000).pipe(
  tap(value => console.log('tap',value))
)

public promiseValue: Promise<string> = new Promise(
(resolve, reject) => {
  setTimeout(() =>{
    resolve('Tenemos data en la promesa.');
    console.log('Resuelto')
  }, 3500

  );
}

)
}
