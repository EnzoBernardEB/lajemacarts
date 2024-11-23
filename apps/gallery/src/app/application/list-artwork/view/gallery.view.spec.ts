import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { GalleryView } from './gallery.view';
import { GalleryUsecaseImpl } from '../gallery-usecase.impl';
import { ArtworkModele } from '../../../domain/entities/artwork.modele';
import { MaterialModele } from '../../../domain/entities/artwork-material';


describe('GalleryComponent', () => {
  let component: GalleryView;
  let fixture: ComponentFixture<GalleryView>;
  let galleryUsecaseMock: Partial<GalleryUsecaseImpl>;

  beforeEach(async () => {
    galleryUsecaseMock = {
      listArtwork: jest.fn().mockReturnValue(of([
        new ArtworkModele('1', 'Beautiful Sculpture', 'A beautiful sculpture made from resin.', '/assets/images/sculpture.jpg', [new MaterialModele('Resin')]),
        new ArtworkModele('2', 'Wooden Carving', 'An intricate wooden carving.', '/assets/images/wooden_carving.jpg', [new MaterialModele('Wood')])
      ]))
    };
    await TestBed.configureTestingModule({
      imports: [GalleryView],
      providers: [{ provide: GalleryUsecaseImpl, useValue: galleryUsecaseMock }]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryView);
    component = fixture.componentInstance;
  });

  it('should load artworks on init', () => {
    fixture.detectChanges();

    expect(component.artworks.length).toBe(2);
    expect(component.artworks[0].title).toBe('Beautiful Sculpture');
    expect(component.artworks[1].title).toBe('Wooden Carving');
  });
});
