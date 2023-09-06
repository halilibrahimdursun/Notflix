import {
  Component,
  OnInit,
  ElementRef,
  Renderer2,
  ViewChild,
  HostListener,
} from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  // isScrolled: boolean = false;
  constructor(
    private service: MovieService,
    private renderer: Renderer2
  ) {}
  @ViewChild('scienceFiction') scienceFiction!: ElementRef;
  @ViewChild('animation') animation!: ElementRef;
//   @HostListener("window:scroll", [])
// onWindowScroll() {
//   // Sayfa scroll edildiğinde bu fonksiyon çalışır.
//   this.isScrolled = window.scrollY > 0; // Sayfa scroll edildikçe isScrolled'ı güncelle.
// }

  scrollToSection(section: ElementRef) {
    section.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  selectedGenre: string | null = null;
  movies: any;
  ngOnInit(): void {
    this.service.getMovies().subscribe(result => {
      console.log(result);
      this.movies = result;
    });
  }
  selectGenre(genre: string) {
    this.selectedGenre = genre;
    this.service.setSelectedGenre(genre);
    console.log('Selected Genre:', this.selectedGenre);
  }
}
