(function (env) {
    "use strict";
    env.ddg_spice_how_to_intl_call = function(api_result){

        if (api_result.error) {
            return Spice.failed('how_to_intl_call');
        }

        Spice.add({
            id: "how_to_intl_call",
            name: "Answer",
            data: api_result,
            meta: {
                sourceName: "TimeAndDate.com",
                sourceUrl: 'http://www.timeanddate.com/worldclock/dialing.html'
            },
            templates: {
                group: 'base',
                options:{
                    content: Spice.how_to_intl_call.content,
                    moreAt: true
                }
            }
        });
    };
}(this));