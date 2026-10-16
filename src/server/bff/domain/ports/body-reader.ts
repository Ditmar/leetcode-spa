/** Reads the incoming body. Throws BodyTooLargeError when it is over the limit. */
export interface BodyReader {
  read(request: Request): Promise<ArrayBuffer | undefined>;
}
