import { TestBed } from '@angular/core/testing';

import { ProjectSendService } from './project-send.service';

describe('ProjectSendService', () => {
  let service: ProjectSendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectSendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
