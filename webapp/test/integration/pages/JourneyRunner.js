sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"com/sap/rapt004v4/test/integration/pages/SalesOrderDeliveryList.gen",
	"com/sap/rapt004v4/test/integration/pages/SalesOrderDeliveryObjectPage.gen"
], function (JourneyRunner, SalesOrderDeliveryListGenerated, SalesOrderDeliveryObjectPageGenerated) {
    'use strict';

    const runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('com/sap/rapt004v4') + '/test/flp.html#app-preview',
        pages: {
			onTheSalesOrderDeliveryListGenerated: SalesOrderDeliveryListGenerated,
			onTheSalesOrderDeliveryObjectPageGenerated: SalesOrderDeliveryObjectPageGenerated
        },
        async: true
    });

    return runner;
});

