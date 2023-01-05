import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModule } from "./heroes/heroes.module";
import { CounterModule } from './counter/counter.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        HeroesModule,
        CounterModule
    ]
})
export class AppModule { }
