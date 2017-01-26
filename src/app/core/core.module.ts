import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { LoggerService } from './logger.service';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [NavComponent, HeaderComponent],
    declarations: [NavComponent, HeaderComponent],
    providers: [LoggerService]
})

export class CoreModule { }
