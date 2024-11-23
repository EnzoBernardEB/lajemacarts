export class ArtworkFilter {
  constructor(
    public readonly id: string,
    public readonly types: Array<string>,
    public readonly materials: Array<string>
  ) {
  }
}
