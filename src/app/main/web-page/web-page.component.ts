import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Typed from 'typed.js';


@Component({
  selector: 'app-web',
  templateUrl: './web-page.component.html',
  styleUrls: ['./web-page.component.css']
})


export class WebPageComponent implements OnInit {

  @ViewChild('sessionHome') sessionHome: ElementRef | any;

  constructor(
  ) {

  }
  ngOnInit() {
    console.log('Web iniciado');
  }

  ngAfterViewInit() {
    //const element = document.getElementsByClassName("texto");
    //console.log(element[0].innerHTML)
    //console.log(this.sessionHome.nativeElement.innerHTML)
    const strings = ['Front-end Developer.', 'FullStack.', 'Gamer.']
    new Typed('.texto' , {
      strings: strings,
      loop: true,
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  goLinkedin() {
    window.open("https://www.linkedin.com/in/jhonatanvago/", "_blank")
  };

  goGitHub() {
    window.open("https://github.com/jhonatanvago", "_blank")
  };
}

