const browserStorage = {
  getStorage() {
    return window.localStorage;
  },

  getKey() {
    return '_AIG_IRM_';
  },

  save(value: Object) {
    this.getStorage().setItem(this.getKey(), JSON.stringify(value));
  },

  getAll() {
    let keyPresent = this.getStorage().getItem(this.getKey());
    if (keyPresent && Object.keys(keyPresent).length) {
      return JSON.parse(keyPresent);
    }
    return keyPresent || {};
  },

  get(key: string) {
    // FIXME - Rajan.Lamichhane@aig.com - what does this mean?
    return this.getAll() && this.getAll()[key];
  }
};

export default browserStorage;
