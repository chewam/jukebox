Ext.define('JB.controller.Map', {

    extend: 'Ext.app.Controller',

    config: {
        markers: [],
        mapPanel: null,
        views: ['Map', 'map.Details'],
        refs: {
            map: 'jb_map',
            detailsPanel: {
                autoCreate: true,
                xtype: 'jb_map_details',
                selector: 'viewport jb_map_details'
            }
        },
        control: {
            map: {
                activate: 'onPanelActivate'
            },
            'jb_map map': {
                maprender: 'onMapRender'
            },
            'jb_map button[action="back"]': {
                tap: 'onBackButtonTap'
            },
            'viewport jb_map_details button[action="close"]': {
                tap: 'onCloseButtonTap'
            },
            'viewport jb_map_details button[action="select"]': {
                tap: 'onSelectButtonTap'
            }
        },
        before: {

        },
        routes: {

        }
    },

    onPanelActivate: function(panel) {
        console.log('onPanelActivate map');
    },

    onBackButtonTap: function() {
        this.redirectTo('');
    },

    onMapRender: function(panel) {
        var geo = panel.getGeo();

        console.log('onMapRender', geo);
        geo.setAutoUpdate(false);
        this.setMapPanel(panel);
        // this.updateLocation();
        this.addUserMarker();
        this.loadSources();
    },

    loadSources: function() {
        var store = Ext.getStore('sources');

        store.load(function(records, operation, success) {
            console.log('store loaded', this, arguments);
            this.addSourcesMarkers();
        }, this);
    },

    addSourcesMarkers: function() {
        var position, lat, lng,
            store = Ext.getStore('sources');

        store.each(function(record) {
            lat = record.get('lat');
            lng = record.get('lng');
            position = this.createPosition(lat, lng);
            this.addSourceMarker(position, record);
        }, this);
    },

    addUserMarker: function() {
        var geo = this.getMapPanel().getGeo();
            lat = geo.getLatitude(),
            lng = geo.getLongitude(),
            position = this.createPosition(lat, lng);

        this.addMarker(position);
    },

    updateLocation: function() {
        var geo = this.getMapPanel().getGeo();

        console.log('updateLocation', geo);
        geo.updateLocation(function(coords) {
            var lat = coords.getLatitude(),
                lng = coords.getLongitude(),
                position = this.createPosition(lat, lng),
                boundsPosition = this.createBoundsPosition(position);

            console.log('updateLocation callback', coords, position);
            this.addMarker(position);
            this.setZoom(17);
        }, this);
    },

    addMarker: function(position) {
        var marker,
            mapPanel = this.getMapPanel();

        console.log('addMarker', mapPanel, position);
        marker = new google.maps.Marker({
            position: position,
            map: mapPanel.getMap()
        });

        this.getMarkers().push(marker);
    },

    addSourceMarker: function(position, record) {
        var marker,
            me = this,
            mapPanel = this.getMapPanel(),
            // infoWindow = this.getInfoWindow(),
            iconShadow = new google.maps.MarkerImage(
                'http://labs.google.com/ridefinder/images/mm_20_shadow.png',
                  new google.maps.Size(22, 20),
                  new google.maps.Point(0,0),
                  new google.maps.Point(6, 20)
            ),
            iconShape = {
                coord: [4,0,0,4,0,7,3,11,4,19,7,19,8,11,11,7,11,4,7,0],
                type: 'poly'
            },
            icon = new google.maps.MarkerImage(
                "http://labs.google.com/ridefinder/images/mm_20_blue.png",
                new google.maps.Size(12, 20),
                new google.maps.Point(0,0),
                new google.maps.Point(6, 20)
            );

        console.log('addSourceMarker', mapPanel, position);
        marker = new google.maps.Marker({
            icon: icon,
            title: name,
            shape: iconShape,
            position: position,
            shadow: iconShadow,
            map: mapPanel.getMap()
        });

        google.maps.event.addListener(marker, 'click', function() {
            me.showDetails(record);
            // infoWindow.setContent(name);
            // infoWindow.open(mapPanel.getMap(), marker);
        });

        this.getMarkers().push(marker);
    },

    createPosition: function(lat, lng) {
        console.log('createPosition', arguments);
        return new google.maps.LatLng(lat, lng);
    },

    createBoundsPosition: function(position) {
        console.log('createBoundsPosition', arguments);
        return new google.maps.LatLngBounds(position);
    },

    setZoom: function(zoom) {
        console.log('setZoom', zoom);
        var mapPanel = this.getMapPanel(),
            map = mapPanel.getMap();

        map.setZoom(zoom);
    },

    // getInfoWindow: function() {
    //     if (!this.infoWindow) {
    //         this.infoWindow = new google.maps.InfoWindow({
    //             size: new google.maps.Size(150,50)
    //         });
    //     }
    //     return this.infoWindow;
    // },

    showDetails: function(record) {
        var detailsPanel = this.getDetailsPanel();

        // Ext.Viewport.add(detailsPanel);
        this.getMap().add(detailsPanel);
        detailsPanel.setRecord(record);
        detailsPanel.show();
    },

    onCloseButtonTap: function() {
        var detailsPanel = this.getDetailsPanel();

        detailsPanel.hide();
    },

    onSelectButtonTap: function() {
        var detailsPanel = this.getDetailsPanel(),
            record = detailsPanel.getRecord();

        JB.utils.Config.setSource(record);
        detailsPanel.hide();
        // Ext.defer(this.redirectTo, 500, this, ['search/track']);
        Ext.defer(this.redirectTo, 500, this, ['']);
    }

});
