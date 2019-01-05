import { NgModule } from '@angular/core';
import {
  MatCheckboxModule,
  MatListModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatProgressSpinnerModule
} from '@angular/material';

/**
 * NgModule that includes all the Material modules used by the app.
 */
@NgModule({
  imports: [
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatProgressSpinnerModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatProgressSpinnerModule
  ]
})
export class MaterialModule {}
