import { Component } from '@angular/core';
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { Call } from "../call/call";

@Component({
  selector: 'app-query',
  imports: [Header, Footer, Call],
  templateUrl: './query.html',
  styleUrl: './query.css',
})
export class Query {

}
