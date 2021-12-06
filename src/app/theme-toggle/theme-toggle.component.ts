import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss']
})
export class ThemeToggleComponent implements OnInit {

  @Output() changeTheme = new EventEmitter();

  moonICO = faMoon;
  sunICO = faSun;

  switchTheme(){
    this.changeTheme.emit()
  }

  constructor() { }

  ngOnInit(): void { }

}
// ----- Running fine