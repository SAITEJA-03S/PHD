import { Component } from '@angular/core';
import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { Call } from "../call/call";
import { About } from "../about/about";

@Component({
  selector: 'app-aboutus',
  imports: [Footer, Header, Call, About],
  templateUrl: './aboutus.html',
  styleUrl: './aboutus.css',
})
export class Aboutus {

}
