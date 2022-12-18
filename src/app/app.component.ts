import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'image-gallery';
  private data:any = [] // creates an empty array where images from API will be stored.
  constructor(private http: HttpClient) {

  }

  // Create a method getData to fech data from the API URL

  getData() { // the URL get passed into the this.http.get() method, which sends a GET request to the URL.

    const url ='https://jsonplaceholder.typicode.com/photos?albulmId-1'
    this.http.get(url).subscribe((res)=> { /* subscribe() method listen and awaits for response,
      then response data, res, once available is saved in the data array created. */
      this.data = res
      console.log(this.data)

    })
  }
}
