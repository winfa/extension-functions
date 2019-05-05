class PersionExtension {
  constructor(extentionType) {
    this.extentionType = extentionType;
  }

  getNameWithPrefix(person) {
    return "pre_" + person.name;
  }
}

module.exports = PersionExtension;
