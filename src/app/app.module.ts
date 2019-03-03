import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { SpinnerModule } from './core/spinner/spinner.module';
import { UserModule } from './shared/store/user/user.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopicModule } from './shared/store/topic/topic.module';
import { MessageModule } from './shared/store/message/message.module';
import { MatTabsModule, MatSidenavModule } from '@angular/material';
import { HomeComponent } from './features/home/home.component';
import { AuthService } from './auth.service';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    SpinnerModule,
    UserModule,
    TopicModule,
    MessageModule,
    MaterialModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({maxAge: 25}),
    BrowserAnimationsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
