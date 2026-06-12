import { Component } from '@angular/core';
import { Header } from "../header/header";
import { Call } from "../call/call";
import { Footer } from "../footer/footer";

@Component({
  selector: 'app-phd',
  imports: [Header, Call, Footer],
  templateUrl: './phd.html',
  styleUrl: './phd.css',
})
export class Phd {

}
