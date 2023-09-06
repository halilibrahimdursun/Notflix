import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { SafePipe } from 'src/app/moviedetails/safe.pipe';
import { Movie, MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css'],
})
export class MoviedetailsComponent implements OnInit {
  title = '';
  description = '';
  url = '';
  ratings: number[] = [2]; // Possible rating values

  constructor(
    private router: ActivatedRoute,
    private service: MovieService
  ) {}
  getMovieDetailResult: any;
  selectedRating: number | null = null;
  rating: number | null = null;

  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('id');
    const storedRating = localStorage.getItem('movieRating');
    this.selectedRating = storedRating !== null ? parseInt(storedRating, 10) : null;

    if (getParamId !== null) {
      // Check if getParamId is not null
      let numericId = parseInt(getParamId, 10); // The second argument is the base (10 for decimal)

      if (!isNaN(numericId)) {
        // Check if the conversion was successful
        this.getMovie(numericId);
        this.getRatingById(numericId).subscribe((rating: number | null) => {
          this.rating = rating;
          console.log(this.rating);
        });
      } else {
        // Handle the case where the conversion failed
        console.log('Invalid ID');
      }
    } else {
      // Handle the case where getParamId is null
      console.log('ID is null');
    }
    
  }

  getMovie(id: number) {
    this.service.getMovieById(id).subscribe(async result => {
      console.log(result, 'getmoviedetails#');
      this.getMovieDetailResult = await result;
      this.title = result?.title || '';
      this.description = result?.overview || '';
      this.url = result?.url || '';
    });
  }
  // Called when a star is clicked to rate the movie
  rateMovie(rating: number) {
    this.selectedRating = rating;

    // Save the rating to local storage
    localStorage.setItem('movieRating', rating.toString());
  }
  getStars(rating: number): string {
    return '★'.repeat(rating) + '☆'.repeat(9 - rating); // All stars are the same style
  }
  getRatingById(id: number): Observable<number | null> {
    return this.service.getMovieById(id).pipe(
      map((movie: Movie | undefined) => {
        if (movie) {
          return movie.rating;
        } else {
          return null;
        }
      })
    );
  }
}
