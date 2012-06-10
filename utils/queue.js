var PlayerQueue = module.exports = function PlayerQueue(id) {
    var QueueMgr = require('./queueMgr');

    console.log('---> Create PlayerQueue');
    this.count = 0;
    this.items = {};
    QueueMgr.set(id, this);
};

PlayerQueue.prototype.get = function(id) {
    if (id) {
        return this.items[id];
    }
    return this.items;
};

PlayerQueue.prototype.set = function(id, data) {
    if (!this.items[id]) {
        this.count++;
    }
    this.items[id] = data;
};

PlayerQueue.prototype.remove = function(id) {
    if (this.items[id]) {
        this.count--;
    }
    delete this.items[id];
};

PlayerQueue.prototype.removeAll = function() {
    this.count = 0;
    this.items = {};
};

PlayerQueue.prototype.getCount = function() {
    return this.count;
};
