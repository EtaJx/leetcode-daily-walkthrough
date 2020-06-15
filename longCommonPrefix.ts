/**
 * 最长公共前缀
 * long common prefix
 *
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 *
 * input: ["flower", "flow", "flight"]
 * output: "fl"
 *
 * @param strsArr
 */
const longCommonPrefix = (strsArr: string[]): string => {
  if (!Array.isArray(strsArr) || strsArr.length < 2) {
    return '';
  }
  // 取到传入数组的第一个元素 和 剩下的元素数组
  // get strsArr first element & rest elements
  const [ans, ...rest] = strsArr;
  let result = '';
  for (let i = 0; i < ans.length; i++) {
    // 将第一个元素的每个字符 与 剩余元素数组每个元素相同位置的字符 进行比较
    // compare every character of the first elemetn with the rest elemtns in the same index
    const flag = rest.every(item => item[i] === ans[i]);
    // 如果都相同，那么该字符为前缀的一部分
    // if they are alls the same, the character is the part of the common prefix.
    if (flag) {
      result += ans[i];
    } else {
      break;
    }
  }
  return result;
}
