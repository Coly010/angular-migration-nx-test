import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { PopoverComponent } from './popover/popover.component';
import { AvatarComponent } from './avatar/avatar.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ButtonComponent,
    CardComponent,
    PopoverComponent,
    AvatarComponent,
  ],
  exports: [ButtonComponent, CardComponent, PopoverComponent, AvatarComponent]
})
export class UiModule { }
