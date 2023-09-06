import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
export interface Movie {
  id: number;
  backdrop_path: string;
  genres: string[];
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  runtime: number;
  title: string;
  rating: number;
  url: string;
}
@Injectable({
  providedIn: 'root',
})
export class MovieService {
  movies: Movie[] = [
    {
      id: 1,
      backdrop_path: 'assets/inception-poster.jpg',
      genres: ['Science Fiction'],
      original_title: 'Inception',
      overview:
      'Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: "inception", the implantation of',
      poster_path: 'assets/inception.jpg',
      release_date: '2010-07-22',
      runtime: 148,
      title: 'Inception',
      rating: 8.4,
      url: 'https://www.youtube.com/embed/YoHD9XEInc0',
    },
    {
      id: 3,
      backdrop_path: 'assets/dune-poster.jpg',
      genres: ['Science Fiction'],
      original_title: 'Dune',
      overview:
        "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence-a commodity capable of unlocking humanity's greatest potential-only those who can conquer their fear will survive.",
      poster_path: 'assets/dune.webp',
      release_date: '2021-09-15',
      runtime: 155,
      title: 'Dune',
      rating: 6.7,
      url: 'https://www.youtube.com/embed/n9xhJrPXop4',
    },
    {
      id: 4,
      backdrop_path: 'assets/interstellar-poster.jpg',
      genres: ['Science Fiction'],
      original_title: 'Interstellar',
      overview:
        'The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.',
      poster_path: 'assets/interstellar.jpg',
      release_date: '2014-11-05',
      runtime: 169,
      title: 'Interstellar',
      rating: 7.8,
      url: 'https://www.youtube.com/embed/zSWdZVtXT7E',
    },
    {
      id: 5,
      backdrop_path: 'assets/spiritedaway-poster.jpg',
      genres: ['Animation'],
      original_title: '千と千尋の神隠し',
      overview:
        'A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.',
      poster_path: 'assets/spiritedaway.jpg',
      release_date: '2001-07-20',
      runtime: 125,
      title: 'Spirited Away',
      rating: 5.4,
      url: 'https://www.youtube.com/embed/ByXuk9QqQkk',
    },
    {
      id: 6,
      backdrop_path: 'assets/spiderman-poster.jpg',
      genres: ['Animation', 'Science Fiction'],
      original_title: 'Spider-Man: Across the Spider-Verse',
      overview:
        'After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse’s very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set out on his own to save those he loves most.',
      poster_path: 'assets/spiderman.jpg',
      release_date: '2023-05-31',
      runtime: 140,
      title: 'Spider-Man: Across the Spider-Verse',
      rating: 8.4,
      url: 'https://www.youtube.com/embed/bgqGdIoa52s',
    },
    {
      id: 7,
      backdrop_path: 'assets/wall-e-poster.jpg',
      genres: ['Animation', 'Science Fiction'],
      original_title: 'WALL·E',
      overview:
        "WALL·E is the last robot left on an Earth that has been overrun with garbage and all humans have fled to outer space. For 700 years he has continued to try and clean up the mess, but has developed some rather interesting human-like qualities. When a ship arrives with a sleek new type of robot, WALL·E thinks he's finally found a friend and stows away on the ship when it leaves.",
      poster_path: 'assets/wall-e.jpg',
      release_date: '2008-06-22',
      runtime: 98,
      title: 'WALL·E',
      rating: 8.0,
      url: 'https://www.youtube.com/embed/CZ1CATNbXg0',
    },
    {
      id: 8,
      backdrop_path: 'assets/soul-poster.jpg',
      genres: ['Animation'],
      original_title: 'Soul',
      overview:
        'Joe Gardner is a middle school teacher with a love for jazz music. After a successful audition at the Half Note Club, he suddenly gets into an accident that separates his soul from his body and is transported to the You Seminar, a center in which souls develop and gain passions before being transported to a newborn child. Joe must enlist help from the other souls-in-training, like 22, a soul who has spent eons in the You Seminar, in order to get back to Earth.',
      poster_path: 'assets/soul.jpg',
      release_date: '2020-12-25',
      runtime: 101,
      title: 'Soul',
      rating: 8.1,
      url: 'https://www.youtube.com/embed/xOsLIiBStEs',
    },
    {
      id: 9,
      backdrop_path: 'assets/toy-story-poster.jpg',
      genres: ['Animation'],
      original_title: 'Toy Story',
      overview:
        "Led by Woody, Andy's toys live happily in his room until Andy's birthday brings Buzz Lightyear onto the scene. Afraid of losing his place in Andy's heart, Woody plots against Buzz. But when circumstances separate Buzz and Woody from their owner, the duo eventually learns to put aside their differences.",
      poster_path: 'assets/toy-story.jpg',
      release_date: '1995-10-30',
      runtime: 81,
      title: 'Toy Story',
      rating: 7.9,
      url: 'https://www.youtube.com/embed/v-PjgYDrg70',
    },
    {
      id: 10,
      backdrop_path: 'assets/lionking-poster.jpg',
      genres: ['Animation'],
      original_title: 'The Lion King',
      overview:
        'A young lion prince is cast out of his pride by his cruel uncle, who claims he killed his father. While the uncle rules with an iron paw, the prince grows up beyond the Savannah, living by a philosophy: No worries for the rest of your days. But when his past comes to haunt him, the young prince must decide his fate: Will he remain an outcast or face his demons and become what he needs to be?',
      poster_path: 'assets/lionking.jpg',
      release_date: '1994-06-24',
      runtime: 89,
      title: 'The Lion King',
      rating: 8.2,
      url: 'https://www.youtube.com/embed/7TavVZMewpY',
    },
    {
      id: 11,
      backdrop_path: 'assets/missionimpossible-poster.jpg',
      genres: ['Action'],
      original_title: 'Mission: Impossible - Fallout',
      overview:
        'When an IMF mission ends badly, the world is faced with dire consequences. As Ethan Hunt takes it upon himself to fulfill his original briefing, the CIA begin to question his loyalty and his motives. The IMF team find themselves in a race against time, hunted by assassins while trying to prevent a global catastrophe.',
      poster_path: 'assets/missionimpossible.jpg',
      release_date: '2018-07-13',
      runtime: 147,
      title: 'Mission: Impossible - Fallout',
      rating: 7.4,
      url: 'https://www.youtube.com/embed/wb49-oV0F78',
    },
    {
      id: 12,
      backdrop_path: 'assets/johnwick-poster.jpg',
      genres: ['Action'],
      original_title: 'John Wick',
      overview:
        'An ex-hitman comes out of retirement to track down the gangsters who killed his dog and stole his car.',
      poster_path: 'assets/johnwick.jpg',
      release_date: '2015-04-29',
      runtime: 101,
      title: 'John Wick',
      rating: 7.7,
      url: 'https://www.youtube.com/embed/v_lYz3LKKgM',
    },
    {
      id: 13,
      backdrop_path: 'assets/karamurat-poster.jpg',
      genres: ['Action'],
      original_title: 'Kara Murat',
      overview:
      'Byzantine Prince kills Kara Murat father and kidnaps his brother to raise him as the Black Knight to fight against Turks. Years later, Kara Murat has to face the notorious enemy in a mission to save abducted Karaca Pasha of Rume',
      poster_path: 'assets/karamurat.jpg',
      release_date: '1975-12-231',
      runtime: 77,
      title: 'Kara Murat',
      rating: 5.6,
      url: 'https://www.youtube.com/embed/gYmfyZBSS40',
    },
    {
      id: 14,
      backdrop_path: 'assets/gbu-poster.jpg',
      genres: ['Action'],
      original_title: 'The Good, the Bad and the Ugly',
      overview:
        'While the Civil War rages on between the Union and the Confederacy, three men – a quiet loner, a ruthless hitman, and a Mexican bandit – comb the American Southwest in search of a strongbox containing $200,000 in stolen gold.',
      poster_path: 'assets/goodbadugly.jpg',
      release_date: '1968-02-08',
      runtime: 161,
      title: 'The Good, the Bad and the Ugly',
      rating: 8.5,
      url: 'https://www.youtube.com/embed/WCN5JJY_wiA',
    },
    {
      id: 15,
      backdrop_path: 'assets/rambo-poster.jpg',
      genres: ['Action'],
      original_title: 'Rambo',
      overview:
        'When governments fail to act on behalf of captive missionaries, ex-Green Beret John James Rambo sets aside his peaceful existence along the Salween River in a war-torn region of Thailand to take action. Although he is still ...',
      poster_path: 'assets/rambo.jpg',
      release_date: '1982-06-24',
      runtime: 92,
      title: 'Rambo',
      rating: 6.7,
      url: 'https://www.youtube.com/embed/MIKcO4u5YmQ',
    },
    {
      id: 16,
      backdrop_path: 'assets/fastandfurious-poster.png',
      genres: ['Action'],
      original_title: 'Fast & Furious',
      overview:
      'When a crime brings them back to L.A., fugitive ex-con Dom Toretto reignites his feud with agent Brian O Conner. But as they are forced to confront a shared enemy, Dom and Brian must give in to an uncertain new trust if they hope to',
      poster_path: 'assets/fastandfurious.jpg',
      release_date: '2000-05-24',
      runtime: 107,
      title: 'Fast & Furious',
      rating: 7.7,
      url: 'https://www.youtube.com/embed/2j5hfDD1szc',
    },
    {
      id: 17,
      backdrop_path: 'assets/plane-poster.jpg',
      genres: ['Action'],
      original_title: 'Plane',
      overview:
        'After a heroic job of successfully landing his storm-damaged aircraft in a war zone, a fearless pilot finds himself between the agendas of multiple militias planning to take the plane and its passengers hostage.',
      poster_path: 'assets/plane.jpg',
      release_date: '2023-01-27',
      runtime: 107,
      title: 'Plane',
      rating: 7.0,
      url: 'https://www.youtube.com/embed/iyzCEy1SK_g',
    },
  ];
  private selectedGenre: string | null = '';

  setSelectedGenre(genre: string) {
    this.selectedGenre = genre;
    console.log(this.selectedGenre);
  }

  getSelectedGenre(): Observable<any> {
    return of(this.selectedGenre);
  }
  getMovies(): Observable<any> {
    return of(this.movies);
  }
  getMovieById(id: number): Observable<Movie | undefined> {
    const movie = this.movies.find(movie => movie.id === id);
    return of(movie);
  }
  generateNewId(): number {
    const maxId = this.movies.reduce(
      (max, movie) => (movie.id > max ? movie.id : max),
      0
    );
    return maxId + 1;
  }
  // private moviesSubject = new BehaviorSubject<any[]>(this.movies);
  // movies$: Observable<any[]> = this.moviesSubject.asObservable();

  addMovie(movie: any) {
    const newMovie = { ...movie, id: this.generateNewId() };
    this.movies.push(newMovie);
    console.log(this.movies);
    // this.moviesSubject.next(this.movies);
    return of(this.movies);
  }
}