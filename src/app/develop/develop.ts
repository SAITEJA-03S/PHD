import { Component } from '@angular/core';
import { Header } from "../header/header";
import { Call } from "../call/call";
import { Footer } from "../footer/footer";

@Component({
  selector: 'app-develop',
  imports: [Header, Call, Footer],
  templateUrl: './develop.html',
  styleUrl: './develop.css',
})
export class Develop {

}
