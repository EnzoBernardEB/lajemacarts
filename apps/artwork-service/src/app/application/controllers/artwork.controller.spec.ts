import { Test, TestingModule } from '@nestjs/testing';
import { ArtworkController } from './artwork.controller';
import { ArtworkRepository } from '../repositories/artwork.repository';
describe('ArtworkController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [ArtworkController],
      providers: []
    }).compile();
  });

  describe('getAllArtworks', () => {
    it('should return an array of artworks', () => {
      const artworkController = app.get<ArtworkController>(ArtworkController);
      expect(artworkController.findAll()).toEqual([]);
    });
  });
});
