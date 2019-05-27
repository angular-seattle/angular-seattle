import { SafePipe } from './safe-pipe.pipe';
import { DomSanitizer } from '@angular/platform-browser';

describe('SafePipe', () => {
  let pipe: SafePipe;
  let mockDomSanitizer: DomSanitizer;

  beforeEach(() => {
    mockDomSanitizer = jasmine.createSpyObj('DomSanitizer', [
      'Invalid safe type specified: invalid value',
      'bypassSecurityTrustHtml',
      'bypassSecurityTrustStyle',
      'bypassSecurityTrustScript',
      'bypassSecurityTrustUrl',
      'bypassSecurityTrustResourceUrl'
    ]);

    pipe = new SafePipe(mockDomSanitizer);
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  describe('transform', () => {
    it('should throw an error if there is an invalid type', () => {
      expect(() => pipe.transform('my value', 'invalid value')).toThrowError(
        `Invalid safe type specified: invalid value`
      );
    });

    it('should sanitize html', () => {
      pipe.transform('<p>this is some html</p>', 'html');
      expect(mockDomSanitizer.bypassSecurityTrustHtml).toHaveBeenCalled();
    });

    it('should sanitize styles', () => {
      const style = 'a { color: blue }';
      pipe.transform(style, 'style');
      expect(mockDomSanitizer.bypassSecurityTrustStyle).toHaveBeenCalled();
    });

    it('should sanitize scripts', () => {
      const js = `() => alert('This is a script!')`;
      pipe.transform(js, 'script');
      expect(mockDomSanitizer.bypassSecurityTrustScript).toHaveBeenCalled();
    });

    it('should sanitize urls', () => {
      const url = 'www.google.com';
      pipe.transform(url, 'url');
      expect(mockDomSanitizer.bypassSecurityTrustUrl).toHaveBeenCalled();
    });

    it('should sanitize resource urls', () => {
      const url = '/tmp/my-resource.txt';
      pipe.transform(url, 'resourceUrl');
      expect(mockDomSanitizer.bypassSecurityTrustResourceUrl).toHaveBeenCalled();
    });
  });
});
