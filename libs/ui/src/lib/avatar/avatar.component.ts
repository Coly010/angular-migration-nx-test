import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'acme-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class AvatarComponent {}
