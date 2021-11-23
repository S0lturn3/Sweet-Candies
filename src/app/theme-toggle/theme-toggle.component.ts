import { Component, OnInit } from '@angular/core';
import { faCoffee, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const checkbox = document.getElementById('checkbox');

function mudarTema(){
  checkbox?.addEventListener('change', () => {
      // Muda o tema do site
      document.body.classList.toggle('light');
  })
}

@Component({
  selector: 'theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.css']
})
export class ThemeToggleComponent implements OnInit {

  // faCoffe = faCoffee;

  moonICO = faMoon;
  sunICO = faSun;

  constructor() {}

  ngOnInit(): void {
    mudarTema()
  }

}
