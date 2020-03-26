import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SlideComponent } from './slide/slide.component';
import { CategoryComponent } from './category/category.component';
import { HomeComponent } from './home/home.component';
import { ManagerComponent } from './manager/manager.component';
import { ProductService } from './product.service';
import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './details/details.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpClientModule,AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, SlideComponent, CategoryComponent, HomeComponent, ManagerComponent, DetailsComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ProductService]
})
export class AppModule { }
