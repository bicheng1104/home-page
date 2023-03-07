/**
 * 生成唯一标志符
 * @returns unique key
 */
export const genUuid = (): string => {
  let uuidValue = '',
    randomValue
  for (let k = 0; k < 32; k++) {
    randomValue = (Math.random() * 16) | 0

    if (k == 8 || k == 12 || k == 16 || k == 20) {
      uuidValue += '-'
    }
    uuidValue += (k == 12 ? 4 : k == 16 ? (randomValue & 3) | 8 : randomValue).toString(16)
  }
  return uuidValue
}
// test
