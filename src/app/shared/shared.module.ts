import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CustomButtonComponent } from './custom-button/custom-button.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { RouterModule } from '@angular/router';


const COMPONENTS = [SharedComponent, NavbarComponent, FooterComponent, CustomButtonComponent];
const PIPES = [TruncatePipe];
const MODULE = [CommonModule, RouterModule];
@NgModule({
  declarations: [...COMPONENTS, ...PIPES],
  imports: [
    ...MODULE
  ],
  exports:[...COMPONENTS, ...PIPES]
})
export class SharedModule { }
