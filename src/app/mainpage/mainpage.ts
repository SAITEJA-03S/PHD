import { Component } from '@angular/core';
import { Header } from "../header/header";
import { Home } from "../home/home";
import { Footer } from "../footer/footer";
import { Services } from "../services/services";
import { About } from "../about/about";
import { Work } from "../work/work";
import { Blog } from "../blog/blog";
import { Testinomial } from "../testinomial/testinomial";
import { Call } from "../call/call";


@Component({
  selector: 'app-mainpage',
  imports: [Header, Home, Footer, Services, About, Work, Blog, Testinomial, Call],
  templateUrl: './mainpage.html',
  styleUrl: './mainpage.css',
})
export class Mainpage {

}
