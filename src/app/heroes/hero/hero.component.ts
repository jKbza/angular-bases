import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public alias:string="Ironman";
  public name:string="Tony Stark";
  public age:number=35;

  get capitalizeName():string{
    return this.alias.toUpperCase();
  }

  getHeroDescription():string{
    return `${this.alias}-${this.name}-${this.age}`;
  }

  changeHero():void{
    this.alias="Spiderman"
  }

  changeAge():void{
    this.age=99;
  }

  resetForm():void{
    this.alias="Ironman";
    this.name="Tony Stark";
    this.age=35;
  }

}
