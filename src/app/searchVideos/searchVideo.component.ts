import { Component } from '@angular/core';
import { SearchVideo } from '../_services/SearchVideo.Service';

@Component({

    selector: 'search-video',
    templateUrl: './searchVideo.component.html',  
    styleUrls: ['./searchVideo.component.css']
})

export class searchVideoComponent {
    

        private loading: boolean = false;

        constructor(private video: SearchVideo) { }

    
 

 doSearch(query: string) {
      
     this.video.search(query);
        
}

          
}