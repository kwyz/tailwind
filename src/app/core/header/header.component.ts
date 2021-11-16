import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor() { }
 
  public isDarkModeOn: boolean = false;
  public isAuthenticated: boolean = false;

  ngOnInit(): void {
    this.ApplySiteTheme();
  }

  public LogIn() {
    this.isAuthenticated = !this.isAuthenticated;
  }

  public SwitchDarkMode() {
    localStorage.theme = this.isDarkModeOn  ? "light" : "dark";
    this.ApplySiteTheme();
  }

  private ApplySiteTheme() {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.dataset.theme = "dark"
      document.documentElement.classList.add("dark")
      document.documentElement.classList.remove("light")
      this.isDarkModeOn = true;
    } else {
      document.documentElement.dataset.theme = "light";
      document.documentElement.classList.add("light")
      document.documentElement.classList.remove("dark")
      this.isDarkModeOn = false;
    }
  }
}
