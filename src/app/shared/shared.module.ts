import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaterialModule } from '../material/material.module';
import { NotFoundComponent } from './components/not-found/not-found.component';


@NgModule({
  declarations: [ToolbarComponent, NotFoundComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ToolbarComponent
  ]
})
export class SharedModule { }
