(function (env) {
    "use strict";
    env.ddg_spice_how_to_intl_call = function(api_result){

        if (api_result.error) {
            return Spice.failed('how_to_intl_call');
        }

        Spice.add({
            id: "how_to_intl_call",
            name: "NPM",
            data: api_result,
            meta: {
                sourceName: "npmjs.org",
                sourceUrl: 'http://npmjs.org/package/' + api_result.name
            },
            templates: {
                group: 'base',
                options:{
                    content: Spice.npm.content,
                    moreAt: true
                }
            }
        });
    };
}(this));