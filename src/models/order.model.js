import Promise from 'bluebird';
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';

/**
 * Order Schema
 */
const OrderSchema = new mongoose.Schema({
  table: {
    ref: 'Table',
    type: mongoose.Schema.Types.ObjectId
  },
  waiter: {
    ref: 'User',
    type: mongoose.Schema.Types.ObjectId
  },
  items: [{
    ref: 'OrderItem',
    type: mongoose.Schema.Types.ObjectId
  }],
  totalSum: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * Methods
 */
OrderSchema.method({
});

/**
 * Statics
 */
OrderSchema.statics = {
  /**
   * Get order
   * @param {ObjectId} id - The objectId of order.
   * @returns {Promise<Order, APIError>}
   */
  get(id) {
    return this.findById(id)
      .exec()
      .then((order) => {
        if (order) {
          return order;
        }
        const err = new APIError('No such order exists!', httpStatus.NOT_FOUND);
        return Promise.reject(err);
      });
  },

  /**
   * List orders in descending order of 'createdAt' timestamp.
   * @param {number} skip - Number of orders to be skipped.
   * @param {number} limit - Limit number of orders to be returned.
   * @returns {Promise<Order[]>}
   */
  list({ skip = 0, limit = 50 } = {}) {
    return this.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .exec();
  }
};

/**
 * @typedef Order
 */
export default mongoose.model('Order', OrderSchema);
