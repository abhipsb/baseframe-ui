import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  public menuItems: string[] = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.loadMenus();
  }


  private loadMenus() {
    this.http.get("assets/plugins/metadata.json").subscribe((plugins: string) => {
      this.menuItems = Object.keys(plugins);
    });
  }
}
