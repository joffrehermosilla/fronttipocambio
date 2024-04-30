import { TestBed } from '@angular/core/testing';
import { HttpInterceptorFn } from '@angular/common/http';
import { ResourceInterceptor, resourceInterceptor } from './resource.interceptor';



describe('resourceInterceptor', () => {
  const interceptor: HttpInterceptorFn = (req, next) =>
    TestBed.runInInjectionContext(() => resourceInterceptor(req, next));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    const interceptor: ResourceInterceptor = TestBed.inject(ResourceInterceptor);
    expect(interceptor).toBeTruthy();
  });
});

