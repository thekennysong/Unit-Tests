describe('Oasis', function() {
    describe('Rounding to the minute if messy decimal', function() {
        var number;
        var rounded;

        beforeEach(function() {
            number = 125;
            rounded = 2;
        });

        it('should be rounded to the minute. What I do in Uber.js.', function() {
            var roundNumber = function(number) {
                number = Math.round(number / 60);
                return number;
            };
            expect(roundNumber(number)).toEqual(rounded);
        });
    });
    describe('Rounding to the tenth of minute if clean', function() {
        var number;
        var rounded;

        beforeEach(function() {
            number = 150;
            rounded = 2.5;
        });

        it('should be rounded to the tenth of a minute.', function() {
            if (Math.round(number * 10/60) / 10 == (number/60)) {
                var roundNumber = function(number) {
                    number = Math.round(number * 10/60) / 10;
                    return number;
                };
            }
            expect(roundNumber(number)).toEqual(rounded);
        });
    });

    describe('Populate the Spa Name array', function() {
        var spaName = [];

        it('Making sure the spaName array is properly being appended in locu.js', function() {
            var add = function(spaName) {
                spaName.push({
                    name: "Kenny Spa"
                });
                return spaName.length;
            };
            expect(add(spaName)).toEqual(1);
        });
    });

    describe('Populate the spaLatLong Array', function() {
        var spaLatLong = [];
        var lat = [];
        var long = [];


        beforeEach(function() {
            for (var i = 0; i < 3; i++) {
                lat[i] = 123 + i;
                long[i] = 50 + i;
            }
        });

        it('Making sure the spaName array is properly being appended in locu.js', function() {
            var addLocation = function(spaName) {
                for (var i = 0; i < 3; i++) {
                    spaLatLong.push({
                        latitude: lat[i],
                        longitude: long[i]
                    });
                }
                return spaLatLong.length;
            };
            expect(addLocation(spaLatLong)).toEqual(3);
        });
    });
});