import React from 'react';

/**
 *检查是否是合理的ReactElement
 *
 * @export
 * @param {React.ReactElement} elem
 * @return {*}  {boolean}
 */
export function isValidReactElement(elem: React.ReactElement): boolean {
  return React.isValidElement(elem);
}
