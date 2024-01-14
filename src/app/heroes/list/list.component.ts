import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroes:string[]=["Spiderman","Ironman","Hulk","Capitan América"];
  public heroDeleted?:string;

  deleteLastHero():void{
    this.heroDeleted=this.heroes.pop()!;
  }
}
