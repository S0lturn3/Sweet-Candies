import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { inject } from '@angular/core/testing';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Sweet Candies';
  theme: Theme = 'dark-theme';

  dynamicPath: any = 'chocolate-background.jpg';

  onThemeChange(){
    if (this.theme == 'dark-theme') {
      this.dynamicPath = 'chocolate-background.jpg';
    } else{
      this.dynamicPath = 'red-valvet-background.jpg';
    }
  }

  
  downArrowICO = faChevronDown;
  
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
    ) { }
    
    ngOnInit() {
      this.initializeTheme();
    }
    
  switchTheme(){
    this.document.body.classList.replace(
      this.theme,
       this.theme === 'dark-theme'
       ? (this.theme = 'light-theme')
       : (this.theme = "dark-theme"))
  }

  initializeTheme = (): void =>
    this.renderer.addClass(this.document.body, this.theme);
}

export type Theme = 'dark-theme' | 'light-theme';