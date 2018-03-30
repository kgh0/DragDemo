import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DragTestPage } from './drag-test';

@NgModule({
  declarations: [
    DragTestPage,
  ],
  imports: [
    IonicPageModule.forChild(DragTestPage),
  ],
})
export class DragTestPageModule {}
