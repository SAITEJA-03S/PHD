import { Component } from '@angular/core';
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { Call } from "../call/call";

@Component({
  selector: 'app-news',
  imports: [Header, Footer, Call],
  templateUrl: './news.html',
  styleUrl: './news.css',
})
export class News {

}
