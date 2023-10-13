import { dummyCoords } from "./data";

const window = global;

Object.defineProperty(window, "fetch", { value: require("node-fetch") });

const localStorageMock: Storage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
  key: jest.fn(),
  length: 0,
};

Object.defineProperty(window, "localStorage", { value: localStorageMock });

const clearWatchMock = jest.fn();
const getCurrentPositionMock = jest.fn().mockImplementationOnce((success) =>
  Promise.resolve(
    success({
      coords: dummyCoords,
    })
  )
);
const watchPositionMock = jest.fn();

const geolocation = {
  clearWatch: clearWatchMock,
  getCurrentPosition: getCurrentPositionMock,
  watchPosition: watchPositionMock,
};

export const mockGeolocation = () => {
  Object.defineProperty(global.navigator, "geolocation", {
    value: geolocation,
  });
};

global.URL.createObjectURL = jest.fn();
