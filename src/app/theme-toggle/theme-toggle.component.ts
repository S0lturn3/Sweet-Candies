import { Component, OnInit } from '@angular/core';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

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
  }

}
