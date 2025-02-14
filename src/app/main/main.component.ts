import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  alimentos:boolean=false;
  cafe:boolean=false;
  bebidas:boolean=false

  globalKey:string='';
  selectedImages:string[]=[];

  items = [
    {
      text: 'Bebidas',
      subMenu: [
        {
          text: 'Bebidas calientes',
          images: ['coffee.png'],
          selected: true,
        },
        {
          text: 'Bebidas frías',
          images: ['iced_coffee.png'],
          selected: false,
        },
        {
          text: 'Bebidas a base de té',
          images: ['tee.png'],
          selected: false,
        },
      ],
    },
    {
      text: 'Cafe de Grano',
      subMenu: [
        {
          text: 'Cafe Azteca',
          images: ['coffee_stack.png'],
          selected: true,
        },
        {
          text: 'Cafe en Bolsa',
          images: ['coffee_bag.png'],
          selected: false,
        },
      ],
    },
    {
      text: 'Alimentos',
      subMenu: [
        {
          text: 'Baguette',
          images: ['baguette.png'],
          selected: true,
        },
        {
          text: 'Sándwich',
          images: ['sandwich.png'],
          selected: false,
        },
      ],
    },
  ];
  
  currentImage:string="";
  selectedOption:string="";

  fnOpenCollapsible(key:string):void{
    if (this.globalKey===key){
      this.globalKey="";
    }else{
      this.globalKey=key;
      const index=this.items.findIndex((item)=>item.text === key);
      this.selectedImages= this.items[index].subMenu[0].images;
      this.currentImage=this.selectedImages[0];
      this.selectedOption=this.items[index].subMenu[0].text;
    }
  }

  fnSelectOption(images:string[], option:string):void{
    this.selectedImages=images;
    this.currentImage="";
    setTimeout(()=>{this.currentImage=this.selectedImages[0];},50); /*setTimeout Espera unos segundos antes de ejecutar la accion que se escribe del lado izquierdo */
    this.selectedOption=option;
  }
}
