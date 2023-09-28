import { identifyExtension } from '../src/url/identify-extension';

describe('Identify Extension', () => {
  it('should identify extension of a url with extension', () => {
    const url =
      'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';
    expect(identifyExtension(url)).toEqual('png');
  });

  it('should identify extension of a url without extension', () => {
    const url =
      'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp';
    expect(identifyExtension(url)).toEqual('');
  });
});
