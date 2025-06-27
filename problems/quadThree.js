/**
 *
 * @param {number} val
 */

class QuadThree {
  constructor(val, isLeaf, tl, tr, bl, br) {
    this.val = val;
    this.isLeaf = isLeaf;
    this.tl = tl;
    this.tr = tr;
    this.bl = bl;
    this.br = br;
  }
}

/**
 *
 * @param {number[][]} input
 * @returns {number[][]}
 */

const buildQuadThree = (input) => {
  if (input.every((x) => x.every((y) => y === input[0][0]))) {
    return new QuadThree(input[0][0], true);
  }

  const len = input.length;
  const tl = input.slice(0, len / 2).map((x) => x.slice(0, len / 2));
  const tr = input.slice(0, len / 2).map((x) => x.slice(len / 2, len));
  const bl = input.slice(len / 2, len).map((x) => x.slice(0, len / 2));
  const br = input.slice(len / 2, len).map((x) => x.slice(len / 2, len));

  return new QuadThree(
    undefined,
    false,
    buildQuadThree(tl),
    buildQuadThree(tr),
    buildQuadThree(bl),
    buildQuadThree(br),
  );
};

module.exports = {
  QuadThree,
  buildQuadThree,
};
