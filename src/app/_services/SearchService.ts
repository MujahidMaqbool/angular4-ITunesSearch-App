import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class SearchService {

    apiRoot: string = "https://itunes.apple.com/search";
    result: object[];
    loading: boolean;

    constructor(private http: Http ) {
        this.result = [];
        this.loading = false; 
    }

    search(term: string) {
        let promise = new Promise((resolve, reject) => {

            let apiURL: string = `${this.apiRoot}?term=${term}&media=music&limit=25&sort=recent`;
            this.http.get(apiURL).toPromise().then(
                res => { //success
                    this.result = res.json().results;
                    resolve();
                },
                msg => { //error
                    reject(msg);
                }

            );
        });
        return promise;
        
    }



}