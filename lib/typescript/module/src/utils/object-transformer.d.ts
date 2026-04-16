export type ObjectTransformer = {
    dates?: string[];
    mapping?: {
        [key in string]: (obj: any) => any;
    };
    nullIfUndefined?: string[];
};
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
export declare const objectTransformer: <T extends unknown>(obj: T, tranformer: ObjectTransformer) => T;
//# sourceMappingURL=object-transformer.d.ts.map