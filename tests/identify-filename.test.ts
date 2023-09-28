import { identifyFilename } from '../src/url/identify-filename';

describe('Identify Filename', () => {
  it('should identify filename of a url with extension', () => {
    const url =
      'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';
    expect(identifyFilename(url)).toEqual('googlelogo_color_272x92dp.png');
  });

  it('should identify filename of a url without extension', () => {
    const url =
      'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp';
    expect(identifyFilename(url)).toEqual('googlelogo_color_272x92dp');
  });
});
