import { Routes } from '@angular/router';
import { Header } from './header/header';
import { Home } from './home/home';
import { Mainpage } from './mainpage/mainpage';
import { Services } from './services/services';
import { About } from './about/about';
import { Work } from './work/work';
import { Blog } from './blog/blog';
import { Testinomial } from './testinomial/testinomial';
import { Call } from './call/call';
import { Contact } from './contact/contact';
import { News } from './news/news';
import { Aboutus } from './aboutus/aboutus';
import { Portfolio } from './portfolio/portfolio';
import { Phd } from './phd/phd';
import { Master } from './master/master';
import { Develop } from './develop/develop';
import { Addon } from './addon/addon';
import { Faq } from './faq/faq';
import { Query } from './query/query';

export const routes: Routes = [
    {path:'',redirectTo:'main',pathMatch:'full'},
     {path:'main',component:Mainpage},
      {path:'header',component:Header},
      {path:'home',component:Home},
      {path:'services',component:Services},
      {path:'about',component:About},
      {path:'work',component:Work},
      {path:'blog',component:Blog},
      {path:'testinomial',component:Testinomial},
      {path:'call', component:Call},
      {path:'contact',component:Contact},
      {path:'news',component:News},
      {path:'aboutus',component:Aboutus},
      {path:'port',component:Portfolio},
      {path:'phd',component:Phd},
      {path:'master',component:Master},
      {path:'development',component:Develop},
      {path:'addon',component:Addon},
      {path:'faq',component:Faq},
      {path:'queries',component:Query}
];
