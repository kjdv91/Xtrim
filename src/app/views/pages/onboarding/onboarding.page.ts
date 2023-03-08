import { AfterContentChecked, Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import SwiperCore, {Pagination, Autoplay, SwiperOptions} from 'swiper';
import { SwiperComponent } from 'swiper/angular';

SwiperCore.use([Autoplay,Pagination]);

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
  encapsulation : ViewEncapsulation.None

})
export class OnboardingPage implements OnInit,  AfterContentChecked{
  public onboardSlides:any =  [];

  @ViewChild('swiper' )
  swiper: SwiperComponent ;
  config: SwiperOptions = {

  };

  constructor() { }
  ngAfterContentChecked(): void {
    if(this.swiper){
      this.swiper.updateSwiper({});
      this.swiper.swiperRef.autoplay.start();
    }
  }


  ngOnInit() {

  }


  next(){
    this.swiper.swiperRef.slideNext(1000);


  }






}
