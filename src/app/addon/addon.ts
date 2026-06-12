import { Component } from '@angular/core';
import { Header } from "../header/header";
import { Call } from "../call/call";
import { Footer } from "../footer/footer";

@Component({
  selector: 'app-addon',
  imports: [Header, Call, Footer],
  templateUrl: './addon.html',
  styleUrl: './addon.css',
})
export class Addon {

}
