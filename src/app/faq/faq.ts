import { Component } from '@angular/core';
import { Header } from "../header/header";
import { Call } from "../call/call";
import { Footer } from "../footer/footer";

@Component({
  selector: 'app-faq',
  imports: [Header, Call, Footer],
  templateUrl: './faq.html',
  styleUrl: './faq.css',
})
export class Faq {

}
