export const getGeolocation = (): Promise<
  [GeolocationPositionError | null, GeolocationCoordinates | null]
> => {
  return new Promise((resolve) => {
    if (
      typeof window === "undefined" &&
      !("navigator" in window) &&
      !("geolocation" in navigator)
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
