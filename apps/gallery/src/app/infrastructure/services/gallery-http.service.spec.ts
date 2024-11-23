import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { GalleryHttpService } from './gallery-http.service';
import { ArtworkModele } from '../../domain/entities/artwork.modele';



describe('GalleryService', () => {
  let service: GalleryHttpService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GalleryHttpService]
    });
    service = TestBed.inject(GalleryHttpService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  // it('should fetch artworks', (done) => {
  //   const mockArtworks: ArtworkModele[] = [
  //     new ArtworkModele('1', 'Beautiful Sculpture', 'A beautiful sculpture made from resin.', '/assets/images/sculpture.jpg', 100, [new MaterialModele('Resin')]),
  //     new ArtworkModele('2', 'Wooden Carving', 'An intricate wooden carving.', '/assets/images/wooden_carving.jpg', 150, [new MaterialModele('Wood')])
  //   ];

  //   service.getArtworks().subscribe(artworks => {
  //     expect(artworks.length).toBe(2);
  //     expect(artworks).toEqual(mockArtworks);
  //     done();
  //   });

  //   const req = httpMock.expectOne('api/artworks');
  //   expect(req.request.method).toBe('GET');
  //   req.flush(mockArtworks);
  // });
});
