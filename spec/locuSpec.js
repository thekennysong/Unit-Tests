    describe('handlebars helper', function() {

        var html;
        var template;


        beforeEach(function() {
            html = '{{region}}';
            template = Handlebars.compile(html);
        });

        it('should return full region name', function() {
            var regionTemplate = template({
                region: 'California'
            });

            expect(regionTemplate).toEqual('California');

        });

});    

