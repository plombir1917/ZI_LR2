module.exports = (block) => block.R.map((byte, index) => byte ^ block.L[index]);
