import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';
import { MemberService } from './../../_services/member.service';

@Component({
  selector: 'app-members-detail',
  templateUrl: './members-detail.component.html',
  styleUrls: ['./members-detail.component.css']
})
export class MembersDetailComponent implements OnInit {

  member: any;
  galleryOptions: NgxGalleryOptions[] = [];
  galleryImages: NgxGalleryImage[] = [];

  constructor(private memberService: MemberService , private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadMember();
    
    this.galleryOptions = [
      {
        width: '600px',
        height: '450px',
        thumbnailsColumns: 5,
        imagePercent: 100,
        preview: false,
        imageAnimation: NgxGalleryAnimation.Slide
      }];

  }

  getImages(): NgxGalleryImage[] {
    const imagesUrl = [];
    for (const img of this.member.photos) {
      imagesUrl.push({
        small: img?.url,
        medium: img?.url,
        big: img?.url
      });
    }
    return imagesUrl;
  }

  loadMember(){
    this.memberService.getMember(this.route.snapshot.paramMap.get('username')!)
      .subscribe(response => {
        this.member = response;
        this.galleryImages = this.getImages();
      });
  }

}
