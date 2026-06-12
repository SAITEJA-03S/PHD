import { Component } from '@angular/core';
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { Call } from "../call/call";
import { Testinomial } from "../testinomial/testinomial";

@Component({
  selector: 'app-portfolio',
  imports: [Header, Footer, Call, Testinomial],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio {

}
