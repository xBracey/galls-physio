import { config } from "config";

interface IImageFormat {
  url: string;
}

interface IImage {
  url: string;
  large?: IImageFormat;
  medium?: IImageFormat;
  small?: IImageFormat;
  thumbnail?: IImageFormat;
}

export const formatImage = (image: IImage, format: string) => {
  if (image[format]) {
    return config.api + image[format].url;
  }

  return config.api + image.url;
};
