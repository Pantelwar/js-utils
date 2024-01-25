/**
 * Returns a promise that resolves with an array containing either a GeolocationPositionError or GeolocationCoordinates.
 *
 * @return {Promise<[GeolocationPositionError | null, GeolocationCoordinates | null]>} A Promise that resolves with an array containing either a GeolocationPositionError or GeolocationCoordinates.
 *
 * @example
 * ```
 * const [error, coords] = await getGeolocation();
 * if (error) // handle error
 * console.log(coords.latitude, coords.longitude)
 * ```
 */

export const getGeolocation = (): Promise<
  [GeolocationPositionError | null, GeolocationCoordinates | null]
> => {
  return new Promise((resolve) => {
    if (
      typeof window === "undefined" ||
      (!("navigator" in window) && !("geolocation" in navigator))
    ) {
      resolve([null, null]);
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve([null, position.coords]);
        },
        (error) => {
          resolve([error, null]);
        }
      );
    }
  });
};
