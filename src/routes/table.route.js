import express from 'express';
import validate from 'express-validation';
import paramValidation from '../../config/param-validation';
import tableCtrl from '../controllers/table.controller';

console.log(tableCtrl);
const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  /** GET /api/tables - Get list of tables */
  .get(tableCtrl.list)

router.route('/:tableId')
  /** GET /api/tables/:tableId - Get table */
  .get(tableCtrl.get)

/** Load table when API with tableId route parameter is hit */
router.param('tableId', tableCtrl.load);

export default router;
