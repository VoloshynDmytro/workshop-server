import Table from '../models/table.model';

/**
 * Load user and append to req.
 */
function load(req, res, next, id) {
  Table.get(id)
    .then((table) => {
      req.table = table; // eslint-disable-line no-param-reassign
      return next();
    })
    .catch(e => next(e));
}

/**
 * Get user
 * @returns {User}
 */
function get(req, res) {
  return res.json(req.table);
}

/**
 * Get table list.
 * @property {number} req.query.skip - Number of tables to be skipped.
 * @property {number} req.query.limit - Limit number of tables to be returned.
 * @returns {Table[]}
 */
function list(req, res, next) {
  const { limit = 50, skip = 0 } = req.query;
  Table.list({ limit, skip })
    .then(tables => res.json(tables))
    .catch(e => next(e));
}

export default { load, get, list };
