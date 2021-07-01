import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatListModule } from '@angular/material/list';
import { MiniPlayerComponent } from './components/mini-player/mini-player.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        MatButtonModule,
        MatIconModule,
        ScrollingModule,
        MatListModule
    ],
    declarations: [
        HeaderComponent,
        MiniPlayerComponent
    ],
    exports: [
        HeaderComponent,
        MatButtonModule,
        MatIconModule,
        ScrollingModule,
        MatListModule,
        MiniPlayerComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }