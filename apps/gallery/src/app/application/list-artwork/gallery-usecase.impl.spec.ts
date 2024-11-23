import { of } from 'rxjs';
import { GalleryUsecaseImpl } from './gallery-usecase.impl';
import { GalleryHttpService } from '../../infrastructure/stubs/services/gallery-http.service';
import { ArtworkModele } from '../../domain/entities/artwork.modele';
import { MaterialModele } from '../../domain/entities/artwork-material';
import { fakeAsync, flush, TestBed, tick } from '@angular/core/testing';

describe('GalleryUseCaseImpl', () => {
  let galleryUseCase: GalleryUsecaseImpl;
  let galleryHttpServiceMock: jest.Mocked<GalleryHttpService>;

  beforeEach(() => {
    const spy = {
      getArtworks: jest.fn()
    };

    TestBed.configureTestingModule({
      providers: [
        GalleryUsecaseImpl,
        { provide: GalleryHttpService, useValue: spy }
      ]
    });
    galleryUseCase = TestBed.inject(GalleryUsecaseImpl);
    galleryHttpServiceMock = TestBed.inject(GalleryHttpService) as jest.Mocked<GalleryHttpService>;
  });

  it('should return expected artworks', fakeAsync(() => {
    const expectedArtworks: ArtworkModele[] = [
      new ArtworkModele('1', 'Beautiful Sculpture', 'A beautiful sculpture made from resin.', '/assets/images/sculpture.jpg', [new MaterialModele('Resin')]),
      new ArtworkModele('2', 'Wooden Carving', 'An intricate wooden carving.', '/assets/images/wooden_carving.jpg', [new MaterialModele('Wood')])
    ];

    galleryHttpServiceMock.getArtworks.mockReturnValue(of(expectedArtworks));
    tick();

    galleryUseCase.listArtwork().subscribe(artworks => {
      expect(artworks).toEqual(expectedArtworks);
    });
    flush();
  }));
});
