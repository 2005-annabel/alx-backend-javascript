export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    if (this.constructor !== Building
        && typeof this.evacuationWarningMessage !== 'function') {
      throw Error('Class extending Building must '
        + 'override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }
}
