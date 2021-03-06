import Model, { belongsTo, attr } from '@ember-data/model';

export default class TileModel extends Model {
  @attr('string') ticker;

  // Only one event because we do not support for retries4
  // Event is committed as soon as its validity is checked
  @belongsTo('player-event') event;
  @belongsTo('board') board;
}
