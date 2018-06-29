import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ServiceService } from 'src/app/html5-test/service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-search-for-artist',
  templateUrl: './search-for-artist.component.html',
  styleUrls: ['./search-for-artist.component.css']
})
export class SearchForArtistComponent implements OnInit {


  

  searchCriteria:FormGroup;

  findArtist:boolean = true;
  findArtistForm:boolean = false;
  loadingBar:boolean = false;
  artistResult:boolean = false;
  artistName :string = '';

  userData:any;


  constructor(
    fb: FormBuilder,
    private _serviceService: ServiceService,
    private toastr: ToastrService
  ) { 
    this.searchCriteria = fb.group({
      artistName: ["", Validators.required],
      noOfTracks: ["", Validators.required]
    });
  }

  ngOnInit() {
  }

  searchBtn(){
    this.findArtist = false;
    this.findArtistForm = true;
  }
  closeSearch(){
    this.findArtist = true;
    this.findArtistForm = false;
    this.searchCriteria.reset();
  }

  submitCriteria(){
    //console.log(this.searchCriteria.value);
    let userName = this.searchCriteria.value.artistName;
    let count = this.searchCriteria.value.noOfTracks;

    this.artistName = userName;

    this.loadingBar = true;
    
    this._serviceService.getData(userName, count).subscribe(data=>{
      //console.log('data', data);
      this.userData = data.body;
      //console.log(this.userData);
      this.searchCriteria.reset();
      this.loadingBar = false;
      if(this.userData.resultCount !== 0){
        this.toastr.success('Found '+ this.artistName, 'Success', {
          timeOut:3000
        })
        this.findArtistForm = false;
        this.artistResult = true;
      }else{
        this.toastr.error('Not Found '+ this.artistName, this.artistName + ' is not available', {
          timeOut: 3000,
        });
      }
    })
    
  }

  clearTrack(){
    //console.log('yes clear this records');
    this.artistResult = false;
    this.findArtist = true;
  }

}
