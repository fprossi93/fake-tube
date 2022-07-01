import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CustomButtonComponent } from './custom-button/custom-button.component';


const COMPONENTS = [SharedComponent, NavbarComponent, FooterComponent, CustomButtonComponent]
@NgModule({
  declarations: [...COMPONENTS, CustomButtonComponent],
  imports: [
    CommonModule
  ],
  exports:[...COMPONENTS]
})
export class SharedModule { }
