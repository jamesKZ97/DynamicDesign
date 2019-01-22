import { Component, OnInit, OnDestroy  } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  csvUrl: string = '/assets/agents.csv';  // URL to web API
  csvData: any[] = [];
  id:number; 
  key:number;
  public lines:any[] = [];
  public dark:boolean = false;
  public light:boolean = false;

  private sub:any;

  constructor (private http: Http, private route:ActivatedRoute) {}

  readCsvData () {
    this.http.get(this.csvUrl)
    .subscribe(
      data => this.extractData(data),
      err => this.handleError(err)
    );
  }

  private extractData(res: Response) {

    let csvData = res['_body'] || '';
    //console.log(csvData);
    let allTextLines = csvData.split(/\r\n|\n/);
    //console.log(allTextLines);
    let headers = allTextLines[0].split(',');
    let lines = [];


    for ( let i = 0; i < allTextLines.length; i++) {
        // split content based on comma
        let data = allTextLines[i].split(',');
        if (data.length == headers.length) {
            let tarr = [];
            for ( let j = 0; j < headers.length; j++) {
               
                tarr.push(data[j]);
                }
            lines.push(tarr);

        }
    }

    for (let a = 1; a < lines.length; a++){
        if(lines[a][0] == this.id){
          this.key = a;
          
        }
     }


     if(lines[this.key][1] == "Dark"){
       this.dark = true;
     }else{
       this.light = true;
     }
     //let option = lines[this.key][1];
     


    //console.log(csvData);
   //console.log(this.id);
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return errMsg;
  }

  ngOnInit(){

    this.route.queryParams.subscribe((params : Params) => {
      this.id = params.id;
      console.log(this.id);
    })


    this.readCsvData();
      
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}