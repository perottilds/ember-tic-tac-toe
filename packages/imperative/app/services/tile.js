import Service, { inject as service } from '@ember/service';

export default class TileService extends Service {
  @service store;

  async create(board, dimensions) {
    const n = dimensions.reduce((a, b) => a * b, 1);

    const tiles = Array(n)
      .fill(null)
      .map(() => this.store.createRecord('tile'));

    await Promise.all(
      tiles.map((t) => {
        t.board = board;
        return t.save();
      })
    );

    return tiles;
  }
}
