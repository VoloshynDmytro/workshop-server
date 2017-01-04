import Promise from 'bluebird';
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';

/**
 * Order Schema
 */
const OrderItemSchema = new mongoose.Schema({
  product: {
    ref: 'Product',
    type: mongoose.Schema.Types.ObjectId
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
OrderItemSchema.method({
});

/**
 * Statics
 */
OrderItemSchema.statics = {
  /**
   * Get order_item
   * @param {ObjectId} id - The objectId of order.
   * @returns {Promise<OrderItem, APIError>}
   */
  get(id) {
    return this.findById(id)
      .exec()
      .then((orderItem) => {
        if (orderItem) {
          return orderItem;
        }
        const err = new APIError('No such order exists!', httpStatus.NOT_FOUND);
        return Promise.reject(err);
      });
  },

  /**
   * List order_items in descending order of 'createdAt' timestamp.
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
export default mongoose.model('OrderItem', OrderItemSchema);
