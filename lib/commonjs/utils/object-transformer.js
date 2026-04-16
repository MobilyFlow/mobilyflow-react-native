"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.objectTransformer = void 0;
/**
 * Transform object following the transformer.
 * Note: The function is safe, take care of the real type of each field and perform null checks.
 *
 * ```
 * // Example:
 * objectTransformer(
 *     {
 *       date_start: '2023-04-12',
 *       date_end: '2023-04-13',
 *       user_array: [
 *         { name: 'Greg', created_date: '2023-05-12' },
 *         { name: 'Antoine', created_date: '2023-06-12' },
 *       ],
 *       single_user: { name: 'Greg', created_date: '2023-05-12' },
 *     },
 *     {
 *       dates: ['date_start', 'date_end'],
 *       mapping: {
 *         user_array: parseUser,
 *         single_user: parseUser,
 *       },
 *     },
 *   );
 * // Return an object with parsed dates & mapped user.
 * ```
 * @param obj
 * @param tranformer
 */
const objectTransformer = (obj, tranformer) => {
  if (!obj) {
    return null;
  }
  const anyObj = obj;
  if (tranformer.dates) {
    for (const date of tranformer.dates) {
      if (anyObj[date] && (typeof anyObj[date] === 'string' || typeof anyObj[date] === 'number')) {
        anyObj[date] = new Date(anyObj[date]);
      }
    }
  }
  if (tranformer.mapping) {
    for (const mapKey of Object.keys(tranformer.mapping)) {
      if (anyObj[mapKey]) {
        if (Array.isArray(anyObj[mapKey])) {
          anyObj[mapKey] = anyObj[mapKey].map(tranformer.mapping[mapKey]);
        } else {
          anyObj[mapKey] = tranformer.mapping[mapKey](anyObj[mapKey]);
        }
      }
    }
  }
  if (tranformer.nullIfUndefined) {
    for (const key of tranformer.nullIfUndefined) {
      if (anyObj[key] && (anyObj[key] === undefined || Number.isNaN(anyObj[key]))) {
        anyObj[key] = null;
      }
    }
  }
  return anyObj;
};
exports.objectTransformer = objectTransformer;
//# sourceMappingURL=object-transformer.js.map