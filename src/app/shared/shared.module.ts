import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CustomButtonComponent } from './custom-button/custom-button.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const COMPONENTS = [SharedComponent, NavbarComponent, FooterComponent, CustomButtonComponent];

const MODULES = [CommonModule, RouterModule];

const PIPES = [TruncatePipe];

@NgModule({
  declarations: [...COMPONENTS, ...PIPES, NotFoundComponent],
  imports: [...MODULES],
  exports: [...COMPONENTS, ...PIPES],
})
export class SharedModule {}
