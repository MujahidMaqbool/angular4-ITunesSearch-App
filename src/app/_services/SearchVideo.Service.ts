import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { map } from "rxjs/operators";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
 import { searchVideoModel } from '../searchVideos/searchVideo.Model';


@Injectable()
export class SearchVideo  {

    apiRoot: string = "https://www.googleapis.com/youtube/v3/search";
    apiKey: string = "AIzaSyBCrFD_I_F0-CNUVKcZ4q1QngRXvTICOls";
    result: object[];
    loading: boolean;
    apiURL: string = "";
    params: string = "";

    constructor(private http: Http ) {
        this.result = [];
        this.loading = false; 
    }

    search(query: string)  {
        let promise = new Promise((resolve, reject) => {
            this.params = [ `q=${query}`, `key=${this.apiKey}`, `part=snippet`, `type=video`, `maxResults=10`].join("&"); 
            this.apiURL = `${this.apiRoot}?${this.params}`;
           this.http.get(this.apiURL).toPromise().then(
            res => { //success
                this.result = res.json().results;
            //     return (res.json()).items.map(item => { 
            //         console.log("raw item", item); 

            //   }),
                resolve();
            },
            msg => { //error
                reject(msg);
            }    

        );

            })
       
        return promise;
      // console.log(myData);
       
    }



}