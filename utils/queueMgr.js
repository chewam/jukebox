function PlayerQueueManager() {
    this.items = {};
}

PlayerQueueManager.prototype.get = function(id) {
    return this.items[id];
};

PlayerQueueManager.prototype.set = function(id, data) {
    this.items[id] = data;
};

module.exports = new PlayerQueueManager();
