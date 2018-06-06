import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Http } from '@angular/http';
import { SearchService } from '../_services/SearchService';

@Component({

    selector: 'search-music',
    templateUrl: './searchMusic.component.html',  
    styleUrls: ['./searchMusic.component.css']
})
export class searchMusicComponent {

/// f: FormGroup;
 private loading: boolean = false;

 constructor(private track: SearchService) {

    
 }

 doSearch(term: string) {
      
     this.track.search(term);
        
}

          
}