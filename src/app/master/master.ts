import { Component } from '@angular/core';
import { Header } from "../header/header";
import { Call } from "../call/call";
import { Footer } from "../footer/footer";

@Component({
  selector: 'app-master',
  imports: [Header, Call, Footer],
  templateUrl: './master.html',
  styleUrl: './master.css',
})
export class Master {

}
