import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
about2: any

constructor(private profileService:ProfileService) { }

  ngOnInit() {
    this.about2 =  this.profileService.about2
  }

}
