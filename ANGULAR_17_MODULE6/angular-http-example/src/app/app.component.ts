import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './data.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,HttpClientModule],
  template: `
    <div>
      <h1>Angular HTTP Example</h1>
      <button (click)="getData()">Get Data</button>
      <button (click)="postData()">Post Data</button>
      <div NgIf="responseData">
        <h2>Response Data:</h2>
        <pre>{{ stringifyResponseData() }}</pre>
      </div>
    </div>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-http-example';
  responseData: any;

  constructor(private dataService: DataService) {}

  getData(): void {
    this.dataService.getData().subscribe((data) => {
      this.responseData = data;
    });
  }

  postData(): void {
    const data = { title: 'foo', body: 'bar', userId: 1 };
    this.dataService.postData(data).subscribe((response) => {
      this.responseData = response;
    });
  }

  stringifyResponseData(): string {
    return JSON.stringify(this.responseData, null, 2);
  }

}
