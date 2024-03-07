import { Request, Response } from 'express';
import { sectionsController } from '../../../src/controllers';
import { SectionsService } from '../../../src/services';
import sectionsService from '../../../src/services/sections.service';

describe('controller/sectionsController', () => {
  it('Should be frozen', () => {
    expect(Object.isFrozen(sectionsController)).toBe(true);
  });

  describe('getAll method', () => {
    const mockReq = jest.fn().mockReturnValueOnce({}) as unknown as Request;
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;
    SectionsService.getAll = jest.fn();

    beforeEach(() => {
      sectionsController.getAll(mockReq, mockRes);
    });

    it('should call the getAll method on sectionsService', () => {
      expect(SectionsService.getAll).toHaveBeenCalled();
    });

    it('Should return 200 result', () => {
      expect(mockRes.status).toHaveBeenCalledWith(200);
    });
  });
});
