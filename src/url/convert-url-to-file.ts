import mime from 'mime-types';
import { identifyExtension } from './identify-extension';
import { identifyFilename } from './identify-filename';

export type PreviewFile = File & { preview: string };

/**
 * Converts a given URL to a File object asynchronously.
 *
 * @param {string} url - The URL to convert to a File object.
 * @return {Promise<PreviewFile | null>} A Promise that resolves to a File object if the conversion is successful, or null if there is an error.
 */
export const convertUrlToFile = async (
  url: string
): Promise<PreviewFile | null> => {
  const filename = identifyFilename(url);
  const extension = identifyExtension(url);

  try {
    const res = await fetch(url);
    const data = await res.blob();
    const file = new File([data], filename, {
      type: mime.lookup(extension) || 'application/octet-stream',
    });

    Object.assign(file, {
      preview: URL.createObjectURL(file),
    });

    return file as PreviewFile;
  } catch (error) {
    return null;
  }
};
