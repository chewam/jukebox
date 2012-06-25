Ext.define('JB.controller.Search', {

    extend: 'Ext.app.Controller',

    config: {
        query: '',
        searchType: 'track',
        views: ['Search', 'search.TypeList'],
        refs: {
            list: 'jb_search',
            searchField: 'jb_search searchfield',
            typeList: {
                autoCreate: true,
                xtype: 'jb_search_typelist',
                selector: 'jb_search jb_search_typelist'
            },
            searchTypeButton: 'jb_search button[action="searchtype"]'
        },
        control: {
            list: {
                itemtap: 'onListItemTap',
                activate: 'onListActivate'
            },
            searchField: {
                keyup: 'onSearchFieldKeyup'
            },
            searchTypeButton: {
                tap: 'onSearchTypeButtonTap'
            },
            'jb_search_typelist radiofield': {
                check: 'onTypeRadioFieldCheck'
            },
            'jb_search button[action="back"]': {
                tap: 'onBackButtonTap'
            }
        }
    },

    search: function() {
        var query = this.getQuery(),
            store = this.getList().getStore(),
            source = JB.utils.Config.getSource(),
            route = 'search/' + this.getSearchType();

        if (query || query.length) {
            route += '/' + query;
            store.load({
                params: {
                    query: query,
                    type: this.getSearchType(),
                    source: source.getId()
                },
                callback: function(records, operation, success) {
                    console.log('store load ' + success);
                }
            });
        } else {
            store.removeAll();
        }

        this.setRoute(route);
    },

    deferSearch: function() {
        this.timer = Ext.defer(this.search, 800, this);
    },

    clearTimer: function() {
        if (this.timer) {
            clearTimeout(this.timer);
        }
    },

    setRoute: function(route) {
        var action = new Ext.app.Action({url: route}),
            history = this.getApplication().getHistory();

        history.add(action, true);
    },

    onListActivate: function() {
        var route = 'search',
            button = this.getSearchTypeButton(),
            hash = document.location.hash.split('/'),
            l = hash.length;

        if (l > 1) this.setSearchType(hash[1]);
        if (l > 2) this.setQuery(hash[2]);
        if (l < 2) {
            this.setRoute('search/' + this.getSearchType());
        }
        if (this.getQuery()) {
            this.bindListModel();
            this.deferSearch();
            this.getSearchField().setValue(this.getQuery());
        }
        button.setIconCls(this.getSearchType());
    },

    onListItemTap: function(list, index, el, record) {
        this.redirectTo(record);
    },

    onSearchFieldKeyup: function(field) {
        this.setQuery(field.getValue());
        this.clearTimer();
        this.deferSearch();
    },

    onSearchTypeButtonTap: function(button) {
        var type = this.getSearchType(),
            typeList = this.getTypeList(),
            field = typeList.down('radiofield[action='+type+']');

        field.initialized = false;
        field.check();
        field.initialized = true;

        typeList.showBy(button);
    },

    onTypeRadioFieldCheck: function() {
        var typeList = this.getTypeList(),
            type = typeList.getValues().type,
            button = this.getSearchTypeButton();

        typeList.hide();
        button.setIconCls(type);
        this.setSearchType(type);
        this.bindListModel();
        this.search();
    },

    bindListModel: function() {
        var tpl, model,
            list = this.getList(),
            store = list.getStore(),
            type = this.getSearchType();

        type = Ext.String.capitalize(type);

        tpl = JB.utils.Templates['get' + type + 'ItemTpl']();
        list.setItemTpl(tpl);

        model = 'JB.model.' + type;
        store.setModel(model);
        // WTF: why store.setModel doesn't reset reader's model ?
        store.getProxy().getReader().setModel(model);
    },

    onBackButtonTap: function() {
        this.redirectTo('');
    }

});
