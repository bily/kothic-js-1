
(function(MapCSS) {
    function restyle(tags, zoom, type, selector) {
        var style = {};
        style["default"] = {};

        if ((selector == 'canvas')) {
            style['default']['fill-color'] = '#C4D4F5';
        }

        if (((selector == 'area' && tags['natural'] == 'coastline'))) {
            style['default']['fill-color'] = '#fcf8e4';
        }

        if (((selector == 'area' && tags['natural'] == 'glacier') && zoom >= 3)) {
            style['default']['fill-color'] = '#fcfeff';
            style['default']['fill-image'] = 'glacier.png';
        }

        if (((selector == 'area' && tags['place'] == 'city') && zoom >= 10)
            || ((selector == 'area' && tags['place'] == 'town') && zoom >= 10)) {
            style['default']['fill-color'] = '#FAF7F7';
            style['default']['fill-opacity'] = 0.6;
            style['default']['z-index'] = 1;
        }

        if (((selector == 'area' && tags['place'] == 'hamlet') && zoom >= 10)
            || ((selector == 'area' && tags['place'] == 'village') && zoom >= 10)
            || ((selector == 'area' && tags['place'] == 'locality') && zoom >= 10)) {
            style['default']['fill-color'] = '#f3eceb';
            style['default']['fill-opacity'] = 0.6;
            style['default']['z-index'] = 1;
        }

        if (((selector == 'area' && tags['landuse'] == 'residential') && zoom >= 10)
            || ((selector == 'area' && tags['residential'] == 'urban') && zoom >= 10)) {
            style['default']['fill-color'] = '#F7EFEB';
            style['default']['z-index'] = 2;
        }

        if (((selector == 'area' && tags['residential'] == 'rural') && zoom >= 10)) {
            style['default']['fill-color'] = '#f4d7c7';
            style['default']['z-index'] = 2;
        }

        if (((selector == 'area' && tags['landuse'] == 'residential') && zoom >= 16)) {
            style['default']['width'] = 0.3;
            style['default']['color'] = '#cb8904';
            style['default']['z-index'] = 2;
        }

        if (((selector == 'area' && tags['landuse'] == 'allotments') && zoom >= 10)
            || ((selector == 'area' && tags['leisure'] == 'garden') && zoom >= 10 && zoom <= 15)
            || ((selector == 'area' && tags['landuse'] == 'orchard') && zoom >= 10 && zoom <= 15)) {
            style['default']['fill-color'] = '#edf2c1';
            style['default']['z-index'] = 3;
        }

        if (((selector == 'area' && tags['leisure'] == 'park') && zoom >= 10)) {
            style['default']['fill-color'] = '#c4e9a4';
            style['default']['z-index'] = 3;
            style['default']['fill-image'] = 'parks2.png';
        }

        if (((selector == 'area' && tags['leisure'] == 'garden') && zoom >= 16)
            || ((selector == 'area' && tags['landuse'] == 'orchard') && zoom >= 16)) {
            style['default']['fill-image'] = 'sady10.png';
            style['default']['z-index'] = 3;
        }

        if (((selector == 'area' && tags['natural'] == 'scrub') && zoom >= 12)) {
            style['default']['fill-color'] = '#e5f5dc';
            style['default']['fill-image'] = 'kust1.png';
            style['default']['z-index'] = 3;
        }

        if (((selector == 'area' && tags['natural'] == 'heath') && zoom >= 12)) {
            style['default']['fill-color'] = '#ecffe5';
            style['default']['z-index'] = 3;
        }

        if (((selector == 'area' && tags['landuse'] == 'industrial') && zoom >= 10)
            || ((selector == 'area' && tags['landuse'] == 'military') && zoom >= 10)) {
            style['default']['fill-color'] = '#ddd8da';
            style['default']['z-index'] = 3;
        }

        if (((selector == 'area' && tags['amenity'] == 'parking') && zoom >= 15)) {
            style['default']['fill-color'] = '#ecedf4';
            style['default']['z-index'] = 3;
        }

        if (((selector == 'area' && tags['natural'] == 'desert') && zoom >= 4)) {
            style['default']['fill-image'] = 'desert22.png';
        }

        if (((selector == 'area' && tags['natural'] == 'forest') && zoom >= 4)
            || ((selector == 'area' && tags['natural'] == 'wood') && zoom >= 4)
            || ((selector == 'area' && tags['landuse'] == 'forest') && zoom >= 4)
            || ((selector == 'area' && tags['landuse'] == 'wood') && zoom >= 4)) {
            style['default']['fill-color'] = '#d6f4c6';
            style['default']['z-index'] = 3;
        }

        if (((selector == 'area' && tags['landuse'] == 'garages') && zoom >= 10)) {
            style['default']['fill-color'] = '#ddd8da';
            style['default']['z-index'] = 3;
        }

        if (((selector == 'area' && tags['natural'] == 'forest') && zoom >= 10)
            || ((selector == 'area' && tags['natural'] == 'wood') && zoom >= 10)
            || ((selector == 'area' && tags['landuse'] == 'forest') && zoom >= 10)
            || ((selector == 'area' && tags['landuse'] == 'wood') && zoom >= 10)) {
            style['default']['text'] = tags['name'];
            style['default']['text-offset'] = 0;
            style['default']['font-size'] = '10';
            style['default']['font-family'] = 'DejaVu Serif Italic';
            style['default']['text-color'] = 'green';
            style['default']['text-allow-overlap'] = 'false';
            style['default']['text-halo-radius'] = 1;
            style['default']['text-halo-color'] = '#ffffff';
            style['default']['-x-mapnik-min-distance'] = '0 ';
        }

        if (((selector == 'area' && tags['landuse'] == 'grass') && zoom >= 12)
            || ((selector == 'area' && tags['natural'] == 'grass') && zoom >= 12)
            || ((selector == 'area' && tags['natural'] == 'meadow') && zoom >= 12)
            || ((selector == 'area' && tags['landuse'] == 'meadow') && zoom >= 12)
            || ((selector == 'area' && tags['landuse'] == 'recreation_ground') && zoom >= 12)) {
            style['default']['fill-color'] = '#f4ffe5';
            style['default']['z-index'] = 4;
        }

        if (((selector == 'area' && tags['natural'] == 'wetland') && zoom >= 10)) {
            style['default']['fill-image'] = 'swamp_world2.png';
            style['default']['z-index'] = 4;
        }

        if (((selector == 'area' && tags['landuse'] == 'farmland') && zoom >= 10)
            || ((selector == 'area' && tags['landuse'] == 'farm') && zoom >= 10)
            || ((selector == 'area' && tags['landuse'] == 'field') && zoom >= 10)) {
            style['default']['fill-color'] = '#fff5c4';
            style['default']['z-index'] = 5;
        }

        if (((selector == 'area' && tags['place'] == 'city') && zoom >= 6 && zoom <= 9)
            || ((selector == 'area' && tags['place'] == 'town') && zoom >= 6 && zoom <= 9)) {
            style['default']['fill-color'] = '#ffe1d0';
            style['default']['fill-opacity'] = 0.6;
            style['default']['z-index'] = 5;
        }

        if (((selector == 'area' && tags['landuse'] == 'cemetery') && zoom >= 10)) {
            style['default']['fill-color'] = '#e5f5dc';
            style['default']['z-index'] = 5;
            style['default']['fill-image'] = 'cemetry7_2.png';
        }

        if (((selector == 'area' && tags['aeroway'] == 'aerodrome') && zoom >= 13)) {
            style['default']['color'] = '#008ac6';
            style['default']['width'] = 0.8;
            style['default']['z-index'] = 5;
            style['default']['fill-image'] = 'bull2.png';
        }

        if (((selector == 'area' && tags['leisure'] == 'stadium') && zoom >= 12)
            || ((selector == 'area' && tags['leisure'] == 'pitch') && zoom >= 12)) {
            style['default']['fill-color'] = '#e3deb1';
            style['default']['z-index'] = 5;
        }

        if (((type == 'way' && tags['waterway'] == 'river') && zoom >= 7 && zoom <= 10)) {
            style['default']['color'] = '#C4D4F5';
            style['default']['width'] = .6;
            style['default']['z-index'] = 9;
        }

        if (((type == 'way' && tags['waterway'] == 'stream') && zoom >= 9 && zoom <= 10)) {
            style['default']['color'] = '#C4D4F5';
            style['default']['width'] = .3;
            style['default']['z-index'] = 9;
        }

        if (((type == 'way' && tags['waterway'] == 'river') && zoom >= 10 && zoom <= 14)) {
            style['default']['color'] = '#C4D4F5';
            style['default']['width'] = .7;
            style['default']['z-index'] = 9;
        }

        if (((type == 'way' && tags['waterway'] == 'river') && zoom >= 15)) {
            style['default']['color'] = '#C4D4F5';
            style['default']['width'] = .9;
            style['default']['z-index'] = 9;
        }

        if (((type == 'way' && tags['waterway'] == 'stream') && zoom >= 10)) {
            style['default']['color'] = '#C4D4F5';
            style['default']['width'] = .5;
            style['default']['z-index'] = 9;
        }

        if (((type == 'way' && tags['waterway'] == 'canal') && zoom >= 10)) {
            style['default']['color'] = '#abc4f5';
            style['default']['width'] = .6;
            style['default']['z-index'] = 9;
        }

        if (((selector == 'area' && tags['waterway'] == 'riverbank') && zoom >= 5)
            || ((selector == 'area' && tags['natural'] == 'water') && zoom >= 5)
            || ((selector == 'area' && tags['landuse'] == 'reservoir') && zoom >= 10)) {
            style['default']['fill-color'] = '#C4D4F5';
            style['default']['color'] = '#C4D4F5';
            style['default']['width'] = .1;
            style['default']['z-index'] = 9;
        }

        if (((selector == 'area' && tags['natural'] == 'water') && zoom >= 9)) {
            style['default']['text'] = tags['name'];
            style['default']['text-offset'] = 1;
            style['default']['font-size'] = '10';
            style['default']['font-family'] = 'DejaVu Serif Italic';
            style['default']['text-color'] = '#285fd1';
            style['default']['text-allow-overlap'] = 'false';
            style['default']['text-halo-radius'] = 1;
            style['default']['text-halo-color'] = '#ffffff';
        }

        if (((type == 'way' && tags['highway'] == 'construction') && zoom >= 15 && zoom <= 16)) {
            style['default']['text'] = tags['name'];
            style['default']['text-position'] = 'line';
            style['default']['text-color'] = '#404040';
            style['default']['font-family'] = 'DejaVu Sans Book';
            style['default']['font-size'] = '9';
            style['default']['text-halo-radius'] = 1;
            style['default']['text-halo-color'] = '#ffffff';
            style['default']['text-halo-radius'] = 1;
            style['default']['text-halo-color'] = '#ffffff';
            style['default']['casing-width'] = 0.5;
            style['default']['casing-color'] = '#996703';
            style['default']['width'] = 2;
            style['default']['color'] = '#ffffff';
            style['default']['z-index'] = 10;
            style['default']['dashes'] = [9,9];
        }

        if (((type == 'way' && tags['highway'] == 'construction') && zoom >= 17)) {
            style['default']['text'] = tags['name'];
            style['default']['text-position'] = 'line';
            style['default']['text-color'] = '#404040';
            style['default']['font-family'] = 'DejaVu Sans Book';
            style['default']['font-size'] = '9';
            style['default']['text-halo-radius'] = 1;
            style['default']['text-halo-color'] = '#ffffff';
            style['default']['text-halo-radius'] = 1;
            style['default']['text-halo-color'] = '#ffffff';
            style['default']['casing-width'] = 0.5;
            style['default']['casing-color'] = '#996703';
            style['default']['width'] = 3;
            style['default']['color'] = '#ffffff';
            style['default']['z-index'] = 10;
            style['default']['dashes'] = [9,9];
        }

        if (((type == 'way' && tags['highway'] == 'footway') && zoom >= 15)
            || ((type == 'way' && tags['highway'] == 'path') && zoom >= 15)
            || ((type == 'way' && tags['highway'] == 'cycleway') && zoom >= 15)
            || ((type == 'way' && tags['highway'] == 'pedestrian') && zoom >= 15)) {
            style['default']['text'] = tags['name'];
            style['default']['text-position'] = 'line';
            style['default']['text-color'] = '#404040';
            style['default']['font-family'] = 'DejaVu Sans Book';
            style['default']['font-size'] = '9';
            style['default']['text-halo-radius'] = 1;
            style['default']['text-halo-color'] = '#ffffff';
            style['default']['text-halo-radius'] = 1;
            style['default']['text-halo-color'] = '#ffffff';
            style['default']['casing-width'] = .3;
            style['default']['casing-color'] = '#bf96ce';
            style['default']['width'] = .2;
            style['default']['color'] = '#ffffff';
            style['default']['z-index'] = 10;
            style['default']['dashes'] = [2,2];
        }

        if (((type == 'way' && tags['highway'] == 'steps') && zoom >= 15)) {
            style['default']['text'] = tags['name'];
            style['default']['text-position'] = 'line';
            style['default']['text-color'] = '#404040';
            style['default']['font-family'] = 'DejaVu Sans Book';
            style['default']['font-size'] = '9';
            style['default']['text-halo-radius'] = 1;
            style['default']['text-halo-color'] = '#ffffff';
            style['default']['text-halo-radius'] = 1;
            style['default']['text-halo-color'] = '#ffffff';
            style['default']['casing-width'] = .3;
            style['default']['casing-color'] = '#ffffff';
            style['default']['width'] = 3;
            style['default']['color'] = '#bf96ce';
            style['default']['z-index'] = 10;
            style['default']['dashes'] = [1,1];
            style['default']['linecap'] = 'butt';
        }

        if (((type == 'way' && tags['highway'] == 'road') && zoom >= 12 && zoom <= 13)
            || ((type == 'way' && tags['highway'] == 'track') && zoom >= 12 && zoom <= 13)
            || ((type == 'way' && tags['highway'] == 'residential') && zoom >= 12 && zoom <= 13)
            || ((type == 'way' && tags['highway'] == 'secondary') && zoom >= 9 && zoom <= 10)
            || ((type == 'way' && tags['highway'] == 'tertiary') && zoom >= 9 && zoom <= 10)
            || ((type == 'way' && tags['highway'] == 'service' && (tags['living_street'] == '-1' || tags['living_street'] == 'false' || tags['living_street'] == 'no') && tags['service'] !== 'parking_aisle') && zoom >= 14 && zoom <= 15)) {
            style['default']['width'] = 0.3;
            style['default']['opacity'] = 0.6;
            style['default']['color'] = '#996703';
            style['default']['z-index'] = 10;
            style['default']['-x-mapnik-layer'] = 'bottom';
        }

        if (((type == 'way' && tags['highway'] == 'road') && zoom >= 13 && zoom <= 14)
            || ((type == 'way' && tags['highway'] == 'track') && zoom >= 13 && zoom <= 14)) {
            style['default']['text'] = tags['name'];
            style['default']['text-position'] = 'line';
            style['default']['text-color'] = '#404040';
            style['default']['font-family'] = 'DejaVu Sans Book';
            style['default']['font-size'] = '9';
            style['default']['text-halo-radius'] = 1;
            style['default']['text-halo-color'] = '#ffffff';
            style['default']['width'] = 0.6;
            style['default']['opacity'] = 0.5;
            style['default']['color'] = '#996703';
            style['default']['z-index'] = 10;
            style['default']['-x-mapnik-layer'] = 'bottom';
        }

        if (((type == 'way' && tags['highway'] == 'road') && zoom >= 14 && zoom <= 16)
            || ((type == 'way' && tags['highway'] == 'track') && zoom >= 14 && zoom <= 16)) {
            style['default']['text'] = tags['name'];
            style['default']['text-position'] = 'line';
            style['default']['text-color'] = '#404040';
            style['default']['font-family'] = 'DejaVu Sans Book';
            style['default']['font-size'] = '9';
            style['default']['text-halo-radius'] = 1;
            style['default']['text-halo-color'] = '#ffffff';
            style['default']['width'] = 1.5;
            style['default']['color'] = '#ffffff';
            style['default']['casing-width'] = 0.5;
            style['default']['casing-color'] = '#996703';
            style['default']['z-index'] = 9;
        }

        if (((type == 'way' && tags['highway'] == 'road') && zoom >= 16)
            || ((type == 'way' && tags['highway'] == 'track') && zoom >= 16)) {
            style['default']['text'] = tags['name'];
            style['default']['text-position'] = 'line';
            style['default']['text-color'] = '#404040';
            style['default']['font-family'] = 'DejaVu Sans Book';
            style['default']['font-size'] = '9';
            style['default']['text-halo-radius'] = 1;
            style['default']['text-halo-color'] = '#ffffff';
            style['default']['width'] = 2.5;
            style['default']['color'] = '#ffffff';
            style['default']['casing-width'] = 0.5;
            style['default']['casing-color'] = '#996703';
            style['default']['z-index'] = 9;
        }

        if (((type == 'way' && tags['highway'] == 'residential') && zoom >= 13 && zoom <= 14)) {
            style['default']['text'] = tags['name'];
            style['default']['text-position'] = 'line';
            style['default']['text-color'] = '#404040';
            style['default']['font-family'] = 'DejaVu Sans Book';
            style['default']['font-size'] = '9';
            style['default']['text-halo-radius'] = 1;
            style['default']['text-halo-color'] = '#ffffff';
            style['default']['width'] = 1.2;
            style['default']['color'] = '#ffffff';
            style['default']['casing-width'] = 0.3;
            style['default']['casing-color'] = '#996703';
            style['default']['z-index'] = 10;
        }

        if (((type == 'way' && tags['highway'] == 'service' && (tags['living_street'] == '1' || tags['living_street'] == 'true' || tags['living_street'] == 'yes')) && zoom >= 15 && zoom <= 16)
            || ((type == 'way' && tags['highway'] == 'service' && tags['service'] == 'parking_aisle') && zoom >= 15 && zoom <= 16)) {
            style['default']['width'] = 0.2;
            style['default']['opacity'] = 0.5;
            style['default']['color'] = '#996703';
            style['default']['z-index'] = 10;
        }

        if (((type == 'way' && tags['highway'] == 'service' && (tags['living_street'] == '1' || tags['living_street'] == 'true' || tags['living_street'] == 'yes')) && zoom >= 16)
            || ((type == 'way' && tags['highway'] == 'service' && tags['service'] == 'parking_aisle') && zoom >= 16)) {
            style['default']['text'] = tags['name'];
            style['default']['text-position'] = 'line';
            style['default']['text-color'] = '#404040';
            style['default']['font-family'] = 'DejaVu Sans Book';
            style['default']['font-size'] = '9';
            style['default']['text-halo-radius'] = 1;
            style['default']['text-halo-color'] = '#ffffff';
            style['default']['width'] = 1.2;
            style['default']['color'] = '#ffffff';
            style['default']['casing-width'] = 0.3;
            style['default']['casing-color'] = '#996703';
            style['default']['z-index'] = 10;
        }

        if (((type == 'way' && tags['highway'] == 'residential') && zoom >= 14 && zoom <= 15)
            || ((type == 'way' && tags['highway'] == 'unclassified') && zoom >= 14 && zoom <= 15)
            || ((type == 'way' && tags['highway'] == 'service' && (tags['living_street'] == '-1' || tags['living_street'] == 'false' || tags['living_street'] == 'no') && tags['service'] !== 'parking_aisle') && zoom >= 15 && zoom <= 16)) {
            style['default']['text'] = tags['name'];
            style['default']['text-position'] = 'line';
            style['default']['text-color'] = '#404040';
            style['default']['font-family'] = 'DejaVu Sans Book';
            style['default']['font-size'] = '9';
            style['default']['text-halo-radius'] = 1;
            style['default']['text-halo-color'] = '#ffffff';
            style['default']['width'] = 2.5;
            style['default']['color'] = '#ffffff';
            style['default']['casing-width'] = 0.5;
            style['default']['casing-color'] = '#996703';
            style['default']['z-index'] = 10;
        }

        if (((type == 'way' && tags['highway'] == 'residential') && zoom >= 16 && zoom <= 17)
            || ((type == 'way' && tags['highway'] == 'unclassified') && zoom >= 16 && zoom <= 17)
            || ((type == 'way' && tags['highway'] == 'living_street') && zoom >= 16 && zoom <= 17)
            || ((type == 'way' && tags['highway'] == 'service' && (tags['living_street'] == '-1' || tags['living_street'] == 'false' || tags['living_street'] == 'no') && tags['service'] !== 'parking_aisle') && zoom >= 16 && zoom <= 17)) {
            style['default']['text'] = tags['name'];
            style['default']['text-position'] = 'line';
            style['default']['text-color'] = '#404040';
            style['default']['font-family'] = 'DejaVu Sans Book';
            style['default']['font-size'] = '9';
            style['default']['text-halo-radius'] = 1;
            style['default']['text-halo-color'] = '#ffffff';
            style['default']['width'] = 3.5;
            style['default']['color'] = '#ffffff';
            style['default']['casing-width'] = 0.5;
            style['default']['casing-color'] = '#996703';
            style['default']['z-index'] = 10;
        }

        if (((type == 'way' && tags['highway'] == 'residential') && zoom >= 17)
            || ((type == 'way' && tags['highway'] == 'unclassified') && zoom >= 17)
            || ((type == 'way' && tags['highway'] == 'living_street') && zoom >= 17)
            || ((type == 'way' && tags['highway'] == 'service' && (tags['living_street'] == '-1' || tags['living_street'] == 'false' || tags['living_street'] == 'no') && tags['service'] !== 'parking_aisle') && zoom >= 17)) {
            style['default']['text'] = tags['name'];
            style['default']['text-position'] = 'line';
            style['default']['text-color'] = '#404040';
            style['default']['font-family'] = 'DejaVu Sans Book';
            style['default']['font-size'] = '9';
            style['default']['text-halo-radius'] = 1;
            style['default']['text-halo-color'] = '#ffffff';
            style['default']['width'] = 4.5;
            style['default']['color'] = '#ffffff';
            style['default']['casing-width'] = 0.5;
            style['default']['casing-color'] = '#996703';
            style['default']['z-index'] = 10;
        }

        if (((type == 'way' && tags['highway'] == 'secondary') && zoom >= 10 && zoom <= 11)) {
            style['default']['text'] = tags['name'];
            style['default']['text-position'] = 'line';
            style['default']['width'] = 1.2;
            style['default']['color'] = '#fcffd1';
            style['default']['casing-width'] = 0.35;
            style['default']['casing-color'] = '#996703';
            style['default']['z-index'] = 11;
        }

        if (((type == 'way' && tags['highway'] == 'secondary') && zoom >= 11 && zoom <= 12)
            || ((type == 'way' && tags['highway'] == 'tertiary') && zoom >= 11 && zoom <= 12)) {
            style['default']['text'] = tags['name'];
            style['default']['text-position'] = 'line';
            style['default']['text-color'] = '#404040';
            style['default']['font-family'] = 'DejaVu Sans Book';
            style['default']['font-size'] = '9';
            style['default']['text-halo-radius'] = 1;
            style['default']['text-halo-color'] = '#ffffff';
            style['default']['text-halo-radius'] = 1;
            style['default']['text-halo-color'] = '#ffffff';
            style['default']['width'] = 1.4;
            style['default']['color'] = '#fcffd1';
            style['default']['casing-width'] = 0.35;
            style['default']['casing-color'] = '#996703';
            style['default']['z-index'] = 11;
        }

        if (((type == 'way' && tags['highway'] == 'secondary') && zoom >= 12 && zoom <= 13)
            || ((type == 'way' && tags['highway'] == 'secondary_link') && zoom >= 12 && zoom <= 13)
            || ((type == 'way' && tags['highway'] == 'tertiary') && zoom >= 12 && zoom <= 13)
            || ((type == 'way' && tags['highway'] == 'tertiary_link') && zoom >= 12 && zoom <= 13)) {
            style['default']['text'] = tags['name'];
            style['default']['text-position'] = 'line';
            style['default']['text-color'] = '#404040';
            style['default']['font-family'] = 'DejaVu Sans Book';
            style['default']['font-size'] = '9';
            style['default']['text-halo-radius'] = 1;
            style['default']['text-halo-color'] = '#ffffff';
            style['default']['text-halo-radius'] = 1;
            style['default']['text-halo-color'] = '#ffffff';
            style['default']['width'] = 3;
            style['default']['color'] = '#fcffd1';
            style['default']['casing-width'] = 0.35;
            style['default']['casing-color'] = '#996703';
            style['default']['z-index'] = 11;
        }

        if (((type == 'way' && tags['highway'] == 'secondary') && zoom >= 13 && zoom <= 14)
            || ((type == 'way' && tags['highway'] == 'secondary_link') && zoom >= 13 && zoom <= 14)
            || ((type == 'way' && tags['highway'] == 'tertiary') && zoom >= 13 && zoom <= 14)
            || ((type == 'way' && tags['highway'] == 'tertiary_link') && zoom >= 13 && zoom <= 14)) {
            style['default']['text'] = tags['name'];
            style['default']['text-position'] = 'line';
            style['default']['text-color'] = '#404040';
            style['default']['font-family'] = 'DejaVu Sans Book';
            style['default']['font-size'] = '9';
            style['default']['text-halo-radius'] = 1;
            style['default']['text-halo-color'] = '#ffffff';
            style['default']['width'] = 4;
            style['default']['color'] = '#fcffd1';
            style['default']['casing-width'] = 0.35;
            style['default']['casing-color'] = '#996703';
            style['default']['z-index'] = 11;
        }

        if (((type == 'way' && tags['highway'] == 'secondary') && zoom >= 14 && zoom <= 15)
            || ((type == 'way' && tags['highway'] == 'secondary_link') && zoom >= 14 && zoom <= 15)
            || ((type == 'way' && tags['highway'] == 'tertiary') && zoom >= 14 && zoom <= 15)
            || ((type == 'way' && tags['highway'] == 'tertiary_link') && zoom >= 14 && zoom <= 15)) {
            style['default']['text'] = tags['name'];
            style['default']['text-position'] = 'line';
            style['default']['text-color'] = '#404040';
            style['default']['font-family'] = 'DejaVu Sans Bold';
            style['default']['font-size'] = '9';
            style['default']['text-halo-radius'] = 1;
            style['default']['text-halo-color'] = '#ffffff';
            style['default']['width'] = 5;
            style['default']['color'] = '#fcffd1';
            style['default']['casing-width'] = 0.5;
            style['default']['casing-color'] = '#996703';
            style['default']['z-index'] = 11;
        }

        if (((type == 'way' && tags['highway'] == 'secondary') && zoom >= 15 && zoom <= 16)
            || ((type == 'way' && tags['highway'] == 'secondary_link') && zoom >= 15 && zoom <= 16)
            || ((type == 'way' && tags['highway'] == 'tertiary') && zoom >= 15 && zoom <= 16)
            || ((type == 'way' && tags['highway'] == 'tertiary_link') && zoom >= 15 && zoom <= 16)) {
            style['default']['text'] = tags['name'];
            style['default']['text-position'] = 'line';
            style['default']['text-color'] = '#404040';
            style['default']['font-family'] = 'DejaVu Sans Bold';
            style['default']['font-size'] = '9';
            style['default']['text-halo-radius'] = 1;
            style['default']['text-halo-color'] = '#ffffff';
            style['default']['width'] = 6;
            style['default']['color'] = '#fcffd1';
            style['default']['casing-width'] = 0.5;
            style['default']['casing-color'] = '#996703';
            style['default']['z-index'] = 11;
        }

        if (((type == 'way' && tags['highway'] == 'secondary') && zoom >= 16 && zoom <= 17)
            || ((type == 'way' && tags['highway'] == 'secondary_link') && zoom >= 16 && zoom <= 17)
            || ((type == 'way' && tags['highway'] == 'tertiary') && zoom >= 16 && zoom <= 17)
            || ((type == 'way' && tags['highway'] == 'tertiary_link') && zoom >= 16 && zoom <= 17)) {
            style['default']['text'] = tags['name'];
            style['default']['text-position'] = 'line';
            style['default']['text-color'] = '#404040';
            style['default']['font-family'] = 'DejaVu Sans Bold';
            style['default']['font-size'] = '9';
            style['default']['text-halo-radius'] = 1;
            style['default']['text-halo-color'] = '#ffffff';
            style['default']['width'] = 7;
            style['default']['color'] = '#fcffd1';
            style['default']['casing-width'] = 0.5;
            style['default']['casing-color'] = '#996703';
            style['default']['z-index'] = 11;
        }

        if (((type == 'way' && tags['highway'] == 'secondary') && zoom >= 17 && zoom <= 18)
            || ((type == 'way' && tags['highway'] == 'secondary_link') && zoom >= 17 && zoom <= 18)
            || ((type == 'way' && tags['highway'] == 'tertiary') && zoom >= 17 && zoom <= 18)
            || ((type == 'way' && tags['highway'] == 'tertiary_link') && zoom >= 17 && zoom <= 18)) {
            style['default']['text'] = tags['name'];
            style['default']['text-position'] = 'line';
            style['default']['text-color'] = '#404040';
            style['default']['font-family'] = 'DejaVu Sans Bold';
            style['default']['font-size'] = '9';
            style['default']['text-halo-radius'] = 1;
            style['default']['text-halo-color'] = '#ffffff';
            style['default']['width'] = 8;
            style['default']['color'] = '#fcffd1';
            style['default']['casing-width'] = 0.5;
            style['default']['casing-color'] = '#996703';
            style['default']['z-index'] = 11;
        }

        if (((type == 'way' && tags['highway'] == 'secondary') && zoom >= 18 && zoom <= 18)
            || ((type == 'way' && tags['highway'] == 'secondary_link') && zoom >= 18 && zoom <= 18)
            || ((type == 'way' && tags['highway'] == 'tertiary') && zoom >= 18 && zoom <= 18)
            || ((type == 'way' && tags['highway'] == 'tertiary_link') && zoom >= 18 && zoom <= 18)) {
            style['default']['text'] = tags['name'];
            style['default']['text-position'] = 'line';
            style['default']['text-color'] = '#404040';
            style['default']['font-family'] = 'DejaVu Sans Bold';
            style['default']['font-size'] = '9';
            style['default']['text-halo-radius'] = 1;
            style['default']['text-halo-color'] = '#ffffff';
            style['default']['width'] = 9;
            style['default']['color'] = '#fcffd1';
            style['default']['casing-width'] = 0.5;
            style['default']['casing-color'] = '#996703';
            style['default']['z-index'] = 11;
        }

        if (((type == 'way' && tags['highway'] == 'primary') && zoom >= 7 && zoom <= 8)) {
            style['default']['width'] = 1;
            style['default']['color'] = '#fcea97';
            style['default']['z-index'] = 12;
        }

        if (((type == 'way' && tags['highway'] == 'primary') && zoom >= 8 && zoom <= 9)) {
            style['default']['width'] = 2;
            style['default']['color'] = '#fcea97';
            style['default']['z-index'] = 12;
        }

        if (((type == 'way' && tags['highway'] == 'primary') && zoom >= 9 && zoom <= 10)
            || ((type == 'way' && tags['highway'] == 'primary_link') && zoom >= 9 && zoom <= 10)) {
            style['default']['text'] = tags['name'];
            style['default']['text-position'] = 'line';
            style['default']['text-color'] = '#404040';
            style['default']['font-family'] = 'DejaVu Sans Bold';
            style['default']['font-size'] = '9';
            style['default']['text-halo-radius'] = 1;
            style['default']['text-halo-color'] = '#ffffff';
            style['default']['width'] = 2;
            style['default']['color'] = '#fcea97';
            style['default']['casing-width'] = .5;
            style['default']['casing-color'] = '#996703';
            style['default']['z-index'] = 12;
        }

        if (((type == 'way' && tags['highway'] == 'primary') && zoom >= 10 && zoom <= 11)
            || ((type == 'way' && tags['highway'] == 'primary_link') && zoom >= 10 && zoom <= 11)) {
            style['default']['text'] = tags['name'];
            style['default']['text-position'] = 'line';
            style['default']['text-color'] = '#404040';
            style['default']['font-family'] = 'DejaVu Sans Bold';
            style['default']['font-size'] = '9';
            style['default']['text-halo-radius'] = 1;
            style['default']['text-halo-color'] = '#ffffff';
            style['default']['width'] = 3;
            style['default']['color'] = '#fcea97';
            style['default']['casing-width'] = .5;
            style['default']['casing-color'] = '#996703';
            style['default']['z-index'] = 12;
        }

        if (((type == 'way' && tags['highway'] == 'primary') && zoom >= 11 && zoom <= 12)
            || ((type == 'way' && tags['highway'] == 'primary_link') && zoom >= 11 && zoom <= 12)) {
            style['default']['text'] = tags['name'];
            style['default']['text-position'] = 'line';
            style['default']['text-color'] = '#404040';
            style['default']['font-family'] = 'DejaVu Sans Bold';
            style['default']['font-size'] = '9';
            style['default']['text-halo-radius'] = 1;
            style['default']['text-halo-color'] = '#ffffff';
            style['default']['width'] = 4;
            style['default']['color'] = '#fcea97';
            style['default']['casing-width'] = .5;
            style['default']['casing-color'] = '#996703';
            style['default']['z-index'] = 12;
        }

        if (((type == 'way' && tags['highway'] == 'primary') && zoom >= 12 && zoom <= 13)
            || ((type == 'way' && tags['highway'] == 'primary_link') && zoom >= 12 && zoom <= 13)) {
            style['default']['text'] = tags['name'];
            style['default']['text-position'] = 'line';
            style['default']['text-color'] = '#404040';
            style['default']['font-family'] = 'DejaVu Sans Bold';
            style['default']['font-size'] = '9';
            style['default']['text-halo-radius'] = 1;
            style['default']['text-halo-color'] = '#ffffff';
            style['default']['width'] = 5;
            style['default']['color'] = '#fcea97';
            style['default']['casing-width'] = .5;
            style['default']['casing-color'] = '#996703';
            style['default']['z-index'] = 12;
        }

        if (((type == 'way' && tags['highway'] == 'primary') && zoom >= 13 && zoom <= 14)
            || ((type == 'way' && tags['highway'] == 'primary_link') && zoom >= 13 && zoom <= 14)) {
            style['default']['text'] = tags['name'];
            style['default']['text-position'] = 'line';
            style['default']['text-color'] = '#404040';
            style['default']['font-family'] = 'DejaVu Sans Bold';
            style['default']['font-size'] = '9';
            style['default']['text-halo-radius'] = 1;
            style['default']['text-halo-color'] = '#ffffff';
            style['default']['width'] = 6;
            style['default']['color'] = '#fcea97';
            style['default']['casing-width'] = .5;
            style['default']['casing-color'] = '#996703';
            style['default']['z-index'] = 12;
        }

        if (((type == 'way' && tags['highway'] == 'primary') && zoom >= 14 && zoom <= 15)
            || ((type == 'way' && tags['highway'] == 'primary_link') && zoom >= 14 && zoom <= 15)) {
            style['default']['text'] = tags['name'];
            style['default']['text-position'] = 'line';
            style['default']['text-color'] = '#404040';
            style['default']['font-family'] = 'DejaVu Sans Bold';
            style['default']['font-size'] = '9';
            style['default']['text-halo-radius'] = 1;
            style['default']['text-halo-color'] = '#ffffff';
            style['default']['width'] = 7;
            style['default']['color'] = '#fcea97';
            style['default']['casing-width'] = .5;
            style['default']['casing-color'] = '#996703';
            style['default']['z-index'] = 12;
        }

        if (((type == 'way' && tags['highway'] == 'primary') && zoom >= 15 && zoom <= 16)
            || ((type == 'way' && tags['highway'] == 'primary_link') && zoom >= 15 && zoom <= 16)) {
            style['default']['text'] = tags['name'];
            style['default']['text-position'] = 'line';
            style['default']['text-color'] = '#404040';
            style['default']['font-family'] = 'DejaVu Sans Bold';
            style['default']['font-size'] = '9';
            style['default']['text-halo-radius'] = 1;
            style['default']['text-halo-color'] = '#ffffff';
            style['default']['width'] = 8;
            style['default']['color'] = '#fcea97';
            style['default']['casing-width'] = .5;
            style['default']['casing-color'] = '#996703';
            style['default']['z-index'] = 12;
        }

        if (((type == 'way' && tags['highway'] == 'primary') && zoom >= 16 && zoom <= 17)
            || ((type == 'way' && tags['highway'] == 'primary_link') && zoom >= 16 && zoom <= 17)) {
            style['default']['text'] = tags['name'];
            style['default']['text-position'] = 'line';
            style['default']['text-color'] = '#404040';
            style['default']['font-family'] = 'DejaVu Sans Bold';
            style['default']['font-size'] = '9';
            style['default']['text-halo-radius'] = 1;
            style['default']['text-halo-color'] = '#ffffff';
            style['default']['width'] = 9;
            style['default']['color'] = '#fcea97';
            style['default']['casing-width'] = .5;
            style['default']['casing-color'] = '#996703';
            style['default']['z-index'] = 12;
        }

        if (((type == 'way' && tags['highway'] == 'primary') && zoom >= 17 && zoom <= 18)
            || ((type == 'way' && tags['highway'] == 'primary_link') && zoom >= 17 && zoom <= 18)) {
            style['default']['text'] = tags['name'];
            style['default']['text-position'] = 'line';
            style['default']['text-color'] = '#404040';
            style['default']['font-family'] = 'DejaVu Sans Bold';
            style['default']['font-size'] = '9';
            style['default']['text-halo-radius'] = 1;
            style['default']['text-halo-color'] = '#ffffff';
            style['default']['width'] = 10;
            style['default']['color'] = '#fcea97';
            style['default']['casing-width'] = .5;
            style['default']['casing-color'] = '#996703';
            style['default']['z-index'] = 12;
        }

        if (((type == 'way' && tags['highway'] == 'primary') && zoom >= 18 && zoom <= 18)
            || ((type == 'way' && tags['highway'] == 'primary_link') && zoom >= 18 && zoom <= 18)) {
            style['default']['text'] = tags['name'];
            style['default']['text-position'] = 'line';
            style['default']['text-color'] = '#404040';
            style['default']['font-family'] = 'DejaVu Sans Bold';
            style['default']['font-size'] = '9';
            style['default']['text-halo-radius'] = 1;
            style['default']['text-halo-color'] = '#ffffff';
            style['default']['width'] = 11;
            style['default']['color'] = '#fcea97';
            style['default']['casing-width'] = .5;
            style['default']['casing-color'] = '#996703';
            style['default']['z-index'] = 12;
        }

        if (((type == 'way' && tags['highway'] == 'trunk') && zoom >= 6 && zoom <= 7)) {
            style['default']['width'] = 0.9;
            style['default']['color'] = '#fbcd40';
            style['default']['z-index'] = 13;
        }

        if (((type == 'way' && tags['highway'] == 'motorway') && zoom >= 6 && zoom <= 7)) {
            style['default']['width'] = 1;
            style['default']['color'] = '#fc9265';
            style['default']['z-index'] = 13;
        }

        if (((type == 'way' && tags['highway'] == 'trunk') && zoom >= 7 && zoom <= 8)) {
            style['default']['width'] = 1;
            style['default']['color'] = '#fbcd40';
            style['default']['z-index'] = 13;
        }

        if (((type == 'way' && tags['highway'] == 'motorway') && zoom >= 7 && zoom <= 8)) {
            style['default']['width'] = 1.2;
            style['default']['color'] = '#fc9265';
            style['default']['z-index'] = 13;
        }

        if (((type == 'way' && tags['highway'] == 'trunk') && zoom >= 8 && zoom <= 9)) {
            style['default']['width'] = 2;
            style['default']['color'] = '#fbcd40';
            style['default']['z-index'] = 13;
        }

        if (((type == 'way' && tags['highway'] == 'motorway') && zoom >= 8 && zoom <= 9)) {
            style['default']['width'] = 2;
            style['default']['color'] = '#fc9265';
            style['default']['z-index'] = 13;
        }

        if (((type == 'way' && tags['highway'] == 'trunk') && zoom >= 9 && zoom <= 10)
            || ((type == 'way' && tags['highway'] == 'motorway') && zoom >= 9 && zoom <= 10)) {
            style['default']['text'] = tags['name'];
            style['default']['text-position'] = 'line';
            style['default']['text-color'] = '#404040';
            style['default']['font-family'] = 'DejaVu Sans Bold';
            style['default']['font-size'] = '9';
            style['default']['text-halo-radius'] = 1;
            style['default']['text-halo-color'] = '#ffffff';
            style['default']['width'] = 3;
            style['default']['color'] = '#ffd780';
            style['default']['casing-width'] = 1;
            style['default']['casing-color'] = '#996703';
            style['default']['z-index'] = 13;
        }

        if (((type == 'way' && tags['highway'] == 'trunk') && zoom >= 10 && zoom <= 11)
            || ((type == 'way' && tags['highway'] == 'motorway') && zoom >= 10 && zoom <= 11)) {
            style['default']['text'] = tags['name'];
            style['default']['text-position'] = 'line';
            style['default']['text-color'] = '#404040';
            style['default']['font-family'] = 'DejaVu Sans Bold';
            style['default']['font-size'] = '9';
            style['default']['text-halo-radius'] = 1;
            style['default']['text-halo-color'] = '#ffffff';
            style['default']['width'] = 4;
            style['default']['color'] = '#ffd780';
            style['default']['casing-width'] = 1;
            style['default']['casing-color'] = '#996703';
            style['default']['z-index'] = 13;
        }

        if (((type == 'way' && tags['highway'] == 'trunk') && zoom >= 11 && zoom <= 12)
            || ((type == 'way' && tags['highway'] == 'motorway') && zoom >= 11 && zoom <= 12)) {
            style['default']['text'] = tags['name'];
            style['default']['text-position'] = 'line';
            style['default']['text-color'] = '#404040';
            style['default']['font-family'] = 'DejaVu Sans Bold';
            style['default']['font-size'] = '9';
            style['default']['text-halo-radius'] = 1;
            style['default']['text-halo-color'] = '#ffffff';
            style['default']['width'] = 5;
            style['default']['color'] = '#ffd780';
            style['default']['casing-width'] = 1;
            style['default']['casing-color'] = '#996703';
            style['default']['z-index'] = 13;
        }

        if (((type == 'way' && tags['highway'] == 'trunk') && zoom >= 12 && zoom <= 13)
            || ((type == 'way' && tags['highway'] == 'motorway') && zoom >= 12 && zoom <= 13)) {
            style['default']['text'] = tags['name'];
            style['default']['text-position'] = 'line';
            style['default']['text-color'] = '#404040';
            style['default']['font-family'] = 'DejaVu Sans Bold';
            style['default']['font-size'] = '9';
            style['default']['text-halo-radius'] = 1;
            style['default']['text-halo-color'] = '#ffffff';
            style['default']['width'] = 7;
            style['default']['color'] = '#ffd780';
            style['default']['casing-width'] = 1;
            style['default']['casing-color'] = '#996703';
            style['default']['z-index'] = 13;
        }

        if (((type == 'way' && tags['highway'] == 'trunk') && zoom >= 13 && zoom <= 14)
            || ((type == 'way' && tags['highway'] == 'motorway') && zoom >= 13 && zoom <= 14)) {
            style['default']['text'] = tags['name'];
            style['default']['text-position'] = 'line';
            style['default']['text-color'] = '#404040';
            style['default']['font-family'] = 'DejaVu Sans Bold';
            style['default']['font-size'] = '9';
            style['default']['text-halo-radius'] = 1;
            style['default']['text-halo-color'] = '#ffffff';
            style['default']['width'] = 8;
            style['default']['color'] = '#ffd780';
            style['default']['casing-width'] = 1;
            style['default']['casing-color'] = '#996703';
            style['default']['z-index'] = 13;
        }

        if (((type == 'way' && tags['highway'] == 'trunk') && zoom >= 14 && zoom <= 15)
            || ((type == 'way' && tags['highway'] == 'trunk_link') && zoom >= 14 && zoom <= 15)
            || ((type == 'way' && tags['highway'] == 'motorway') && zoom >= 14 && zoom <= 15)
            || ((type == 'way' && tags['highway'] == 'motorway_link') && zoom >= 14 && zoom <= 15)) {
            style['default']['text'] = tags['name'];
            style['default']['text-position'] = 'line';
            style['default']['text-color'] = '#404040';
            style['default']['font-family'] = 'DejaVu Sans Bold';
            style['default']['font-size'] = '9';
            style['default']['text-halo-radius'] = 1;
            style['default']['text-halo-color'] = '#ffffff';
            style['default']['width'] = 9;
            style['default']['color'] = '#ffd780';
            style['default']['casing-width'] = 1;
            style['default']['casing-color'] = '#996703';
            style['default']['z-index'] = 13;
        }

        if (((type == 'way' && tags['highway'] == 'trunk') && zoom >= 15 && zoom <= 16)
            || ((type == 'way' && tags['highway'] == 'trunk_link') && zoom >= 15 && zoom <= 16)
            || ((type == 'way' && tags['highway'] == 'motorway') && zoom >= 15 && zoom <= 16)
            || ((type == 'way' && tags['highway'] == 'motorway_link') && zoom >= 15 && zoom <= 16)) {
            style['default']['text'] = tags['name'];
            style['default']['text-position'] = 'line';
            style['default']['text-color'] = '#404040';
            style['default']['font-family'] = 'DejaVu Sans Bold';
            style['default']['font-size'] = '9';
            style['default']['text-halo-radius'] = 1;
            style['default']['text-halo-color'] = '#ffffff';
            style['default']['width'] = 10;
            style['default']['color'] = '#ffd780';
            style['default']['casing-width'] = 1;
            style['default']['casing-color'] = '#996703';
            style['default']['z-index'] = 13;
        }

        if (((type == 'way' && tags['highway'] == 'trunk') && zoom >= 16 && zoom <= 17)
            || ((type == 'way' && tags['highway'] == 'trunk_link') && zoom >= 16 && zoom <= 17)
            || ((type == 'way' && tags['highway'] == 'motorway') && zoom >= 16 && zoom <= 17)
            || ((type == 'way' && tags['highway'] == 'motorway_link') && zoom >= 16 && zoom <= 17)) {
            style['default']['text'] = tags['name'];
            style['default']['text-position'] = 'line';
            style['default']['text-color'] = '#404040';
            style['default']['font-family'] = 'DejaVu Sans Bold';
            style['default']['font-size'] = '9';
            style['default']['text-halo-radius'] = 1;
            style['default']['text-halo-color'] = '#ffffff';
            style['default']['width'] = 11;
            style['default']['color'] = '#ffd780';
            style['default']['casing-width'] = 1;
            style['default']['casing-color'] = '#996703';
            style['default']['z-index'] = 13;
        }

        if (((type == 'way' && tags['highway'] == 'trunk') && zoom >= 17 && zoom <= 18)
            || ((type == 'way' && tags['highway'] == 'trunk_link') && zoom >= 17 && zoom <= 18)
            || ((type == 'way' && tags['highway'] == 'motorway') && zoom >= 17 && zoom <= 18)
            || ((type == 'way' && tags['highway'] == 'motorway_link') && zoom >= 17 && zoom <= 18)) {
            style['default']['text'] = tags['name'];
            style['default']['text-position'] = 'line';
            style['default']['text-color'] = '#404040';
            style['default']['font-family'] = 'DejaVu Sans Bold';
            style['default']['font-size'] = '9';
            style['default']['text-halo-radius'] = 1;
            style['default']['text-halo-color'] = '#ffffff';
            style['default']['width'] = 12;
            style['default']['color'] = '#ffd780';
            style['default']['casing-width'] = 1;
            style['default']['casing-color'] = '#996703';
            style['default']['z-index'] = 13;
        }

        if (((type == 'way' && tags['highway'] == 'trunk') && zoom >= 18 && zoom <= 18)
            || ((type == 'way' && tags['highway'] == 'trunk_link') && zoom >= 18 && zoom <= 18)
            || ((type == 'way' && tags['highway'] == 'motorway') && zoom >= 18 && zoom <= 18)
            || ((type == 'way' && tags['highway'] == 'motorway_link') && zoom >= 18 && zoom <= 18)) {
            style['default']['text'] = tags['name'];
            style['default']['text-position'] = 'line';
            style['default']['text-color'] = '#404040';
            style['default']['font-family'] = 'DejaVu Sans Bold';
            style['default']['font-size'] = '9';
            style['default']['text-halo-radius'] = 1;
            style['default']['text-halo-color'] = '#ffffff';
            style['default']['width'] = 13;
            style['default']['color'] = '#ffd780';
            style['default']['casing-width'] = 1;
            style['default']['casing-color'] = '#996703';
            style['default']['z-index'] = 13;
        }

        if (((type == 'way' && tags['highway'] == 'trunk') && zoom >= 9)
            || ((type == 'way' && tags['highway'] == 'trunk_link') && zoom >= 9)
            || ((type == 'way' && tags['highway'] == 'motorway') && zoom >= 9)
            || ((type == 'way' && tags['highway'] == 'motorway_link') && zoom >= 9)
            || ((type == 'way' && tags['highway'] == 'primary') && zoom >= 13)
            || ((type == 'way' && tags['highway'] == 'primary_link') && zoom >= 13)) {

        if (typeof(style['centerline']) === 'undefined') {
            style['centerline'] = {};
        }
            style['centerline']['width'] = .3;
            style['centerline']['color'] = '#fa6478';
            style['centerline']['z-index'] = 14;
            style['centerline']['-x-mapnik-layer'] = 'top';
        }

        if (((type == 'way' && (tags['oneway'] == '1' || tags['oneway'] == 'true' || tags['oneway'] == 'yes')) && zoom >= 17)) {
            style['default']['line-style'] = 'arrows';
            style['default']['z-index'] = 15;
            style['default']['-x-mapnik-layer'] = 'top';
        }

        if (((selector == 'line' && tags['railway'] == 'rail') && zoom >= 7 && zoom <= 8)) {
            style['default']['width'] = .5;
            style['default']['color'] = '#303030';
            style['default']['z-index'] = 15;
        }

        if (((selector == 'line' && tags['railway'] == 'rail') && zoom >= 7 && zoom <= 8)) {

        if (typeof(style['ticks']) === 'undefined') {
            style['ticks'] = {};
        }
            style['ticks']['width'] = .3;
            style['ticks']['color'] = '#ffffff';
            style['ticks']['dashes'] = [3,3];
            style['ticks']['z-index'] = 16;
        }

        if (((selector == 'line' && tags['railway'] == 'rail') && zoom >= 8 && zoom <= 9)) {
            style['default']['width'] = .6;
            style['default']['color'] = '#303030';
            style['default']['z-index'] = 15;
        }

        if (((selector == 'line' && tags['railway'] == 'rail') && zoom >= 8 && zoom <= 9)) {

        if (typeof(style['ticks']) === 'undefined') {
            style['ticks'] = {};
        }
            style['ticks']['width'] = .35;
            style['ticks']['color'] = '#ffffff';
            style['ticks']['dashes'] = [3,3];
            style['ticks']['z-index'] = 16;
        }

        if (((selector == 'line' && tags['railway'] == 'rail') && zoom >= 9)) {
            style['default']['width'] = 1.4;
            style['default']['color'] = '#606060';
            style['default']['z-index'] = 15;
        }

        if (((selector == 'line' && tags['railway'] == 'rail') && zoom >= 9)) {

        if (typeof(style['ticks']) === 'undefined') {
            style['ticks'] = {};
        }
            style['ticks']['width'] = 1;
            style['ticks']['color'] = '#ffffff';
            style['ticks']['dashes'] = [6,6];
            style['ticks']['z-index'] = 16;
        }

        if (((type == 'way' && tags['railway'] == 'subway') && zoom >= 12)) {
            style['default']['width'] = 3;
            style['default']['color'] = '#072889';
            style['default']['z-index'] = 15;
            style['default']['dashes'] = [3,3];
            style['default']['opacity'] = 0.3;
            style['default']['linecap'] = 'butt';
            style['default']['-x-mapnik-layer'] = 'top';
        }

        if (((type == 'way' && tags['barrier'] == 'fence') && zoom >= 16)) {
            style['default']['width'] = .3;
            style['default']['color'] = 'black';
            style['default']['z-index'] = 16;
            style['default']['-x-mapnik-layer'] = 'top';
        }

        if (((type == 'way' && tags['barrier'] == 'wall') && zoom >= 16)) {
            style['default']['width'] = .5;
            style['default']['color'] = 'black';
            style['default']['z-index'] = 16;
            style['default']['-x-mapnik-layer'] = 'top';
        }

        if (((type == 'way' && tags['marking'] == 'sport' && (!('colour' in tags)) && (!('color' in tags))) && zoom >= 15)) {
            style['default']['width'] = .5;
            style['default']['color'] = '#a0a0a0';
            style['default']['z-index'] = 16;
            style['default']['-x-mapnik-layer'] = 'top';
        }

        if (((type == 'way' && tags['marking'] == 'sport' && tags['colour'] == 'white') && zoom >= 15)
            || ((type == 'way' && tags['marking'] == 'sport' && tags['color'] == 'white') && zoom >= 15)) {
            style['default']['width'] = 1;
            style['default']['color'] = 'white';
            style['default']['z-index'] = 16;
            style['default']['-x-mapnik-layer'] = 'top';
        }

        if (((type == 'way' && tags['marking'] == 'sport' && tags['colour'] == 'red') && zoom >= 15)
            || ((type == 'way' && tags['marking'] == 'sport' && tags['color'] == 'red') && zoom >= 15)) {
            style['default']['width'] = 1;
            style['default']['color'] = '#c00000';
            style['default']['z-index'] = 16;
            style['default']['-x-mapnik-layer'] = 'top';
        }

        if (((type == 'way' && tags['marking'] == 'sport' && tags['colour'] == 'black') && zoom >= 15)
            || ((type == 'way' && tags['marking'] == 'sport' && tags['color'] == 'black') && zoom >= 15)) {
            style['default']['width'] = 1;
            style['default']['color'] = 'black';
            style['default']['z-index'] = 16;
            style['default']['-x-mapnik-layer'] = 'top';
        }

        if (((type == 'node' && tags['amenity'] == 'bus_station') && zoom >= 15)) {
            style['default']['icon-image'] = 'aut2_16x16_park.png';
        }

        if (((type == 'node' && tags['highway'] == 'bus_stop') && zoom >= 16)) {
            style['default']['icon-image'] = 'autobus_stop_14x10.png';
        }

        if (((type == 'node' && tags['railway'] == 'tram_stop') && zoom >= 16)) {
            style['default']['icon-image'] = 'tramway_14x13.png';
        }

        if (((type == 'node' && tags['amenity'] == 'fuel') && zoom >= 15)) {
            style['default']['icon-image'] = 'tankstelle1_10x11.png';
        }

        if (((type == 'node' && tags['amenity'] == 'pharmacy') && zoom >= 16)) {
            style['default']['icon-image'] = 'med1_11x14.png';
        }

        if (((type == 'node' && tags['amenity'] == 'cinema') && zoom >= 16)) {
            style['default']['icon-image'] = 'cinema_14x14.png';
        }

        if (((type == 'node' && tags['amenity'] == 'museum') && zoom >= 15)) {
            style['default']['icon-image'] = 'mus_13x12.png';
        }

        if (((type == 'node' && tags['tourism'] == 'zoo') && zoom >= 16)) {
            style['default']['icon-image'] = 'zoo4_14x14.png';
        }

        if (((type == 'node' && tags['amenity'] == 'courthouse') && zoom >= 16)) {
            style['default']['icon-image'] = 'sud_14x13.png';
        }

        if (((type == 'node' && tags['amenity'] == 'theatre') && zoom >= 16)) {
            style['default']['icon-image'] = 'teater_14x14.png';
        }

        if (((type == 'node' && tags['amenity'] == 'university') && zoom >= 16)) {
            style['default']['icon-image'] = 'univer_15x11.png';
        }

        if (((type == 'node' && tags['amenity'] == 'toilets') && zoom >= 16)) {
            style['default']['icon-image'] = 'wc-3_13x13.png';
        }

        if (((type == 'node' && tags['amenity'] == 'place_of_worship' && tags['religion'] == 'christian') && zoom >= 16)) {
            style['default']['icon-image'] = 'pravosl_kupol_11x15.png';
        }

        if (((selector == 'area' && tags['amenity'] == 'place_of_worship' && tags['religion'] == 'christian') && zoom >= 16)) {
            style['default']['icon-image'] = 'pravosl_kupol_11x15.png';
        }

        if (((type == 'node' && tags['amenity'] == 'place_of_worship') && zoom >= 14)) {
            style['default']['text'] = tags['name'];
            style['default']['text-color'] = '#623f00';
            style['default']['font-family'] = 'DejaVu Serif Italic';
            style['default']['font-size'] = '9';
            style['default']['text-halo-radius'] = 1;
            style['default']['text-halo-color'] = '#ffffff';
            style['default']['text-offset'] = 3;
            style['default']['max-width'] = 70;
        }

        if (((selector == 'area' && tags['amenity'] == 'place_of_worship') && zoom >= 14)) {
            style['default']['text'] = tags['name'];
            style['default']['text-color'] = '#623f00';
            style['default']['font-family'] = 'DejaVu Serif Italic';
            style['default']['font-size'] = '9';
            style['default']['text-halo-radius'] = 1;
            style['default']['text-halo-color'] = '#ffffff';
            style['default']['text-offset'] = 3;
            style['default']['max-width'] = 70;
            style['default']['z-index'] = 16;
            style['default']['width'] = 0.1;
            style['default']['color'] = '#111111';
            style['default']['text-opacity'] = '1';
            style['default']['fill-color'] = '#777777';
            style['default']['fill-opacity'] = 0.5;
        }

        if (((type == 'node' && tags['amenity'] == 'kindergarten') && zoom >= 17)) {
            style['default']['icon-image'] = 'kindergarten_14x14.png';
        }

        if (((type == 'node' && tags['amenity'] == 'school') && zoom >= 17)) {
            style['default']['icon-image'] = 'school_13x13.png';
        }

        if (((type == 'node' && tags['amenity'] == 'library') && zoom >= 17)) {
            style['default']['icon-image'] = 'lib_13x14.png';
        }

        if (((type == 'node' && tags['tourism'] == 'hotel') && zoom >= 17)) {
            style['default']['icon-image'] = 'hotell_14x14.png';
        }

        if (((type == 'node' && tags['amenity'] == 'post_office') && zoom >= 17)) {
            style['default']['icon-image'] = 'post_14x11.png';
        }

        if (((type == 'node' && tags['amenity'] == 'restaurant') && zoom >= 17)) {
            style['default']['icon-image'] = 'rest_14x14.png';
        }

        if (((type == 'node' && ('shop' in tags)) && zoom >= 17)) {
            style['default']['icon-image'] = 'superm_12x12.png';
        }

        if (((selector == 'area' && tags['boundary'] == 'administrative' && tags['admin_level'] == '2'))) {
            style['default']['width'] = 0.5;
            style['default']['color'] = '#202020';
            style['default']['dashes'] = [6,4];
            style['default']['opacity'] = 0.7;
            style['default']['z-index'] = 16;
        }

        if (((selector == 'area' && tags['boundary'] == 'administrative' && tags['admin_level'] == '3') && zoom >= 3 && zoom <= 4)) {
            style['default']['width'] = 0.4;
            style['default']['color'] = '#7e0156';
            style['default']['dashes'] = [3,3];
            style['default']['opacity'] = 0.5;
            style['default']['z-index'] = 16;
        }

        if (((selector == 'area' && tags['boundary'] == 'administrative' && tags['admin_level'] == '3') && zoom >= 4)) {
            style['default']['width'] = 1.3;
            style['default']['color'] = '#ff99cc';
            style['default']['opacity'] = 0.5;
            style['default']['z-index'] = 16;
        }

        if (((selector == 'area' && tags['boundary'] == 'administrative' && tags['admin_level'] == '6') && zoom >= 10)) {
            style['default']['width'] = 0.5;
            style['default']['color'] = '#101010';
            style['default']['dashes'] = [1,2];
            style['default']['opacity'] = 0.6;
            style['default']['z-index'] = 16.1;
        }

        if (((selector == 'area' && tags['boundary'] == 'administrative' && tags['admin_level'] == '4') && zoom >= 4 && zoom <= 5)) {
            style['default']['width'] = 0.3;
            style['default']['color'] = '#000000';
            style['default']['dashes'] = [1,2];
            style['default']['opacity'] = 0.8;
            style['default']['z-index'] = 16.3;
        }

        if (((selector == 'area' && tags['boundary'] == 'administrative' && tags['admin_level'] == '4') && zoom >= 6)) {
            style['default']['width'] = 0.7;
            style['default']['color'] = '#000000';
            style['default']['dashes'] = [1,2];
            style['default']['opacity'] = 0.8;
            style['default']['z-index'] = 16.3;
        }

        if (((type == 'way' && tags['railway'] == 'tram') && zoom >= 12)) {
            style['default']['line-style'] = 'rway44.png';
            style['default']['z-index'] = 17;
        }

        if (((type == 'node' && tags['railway'] == 'station' && tags['transport'] !== 'subway') && zoom >= 9)) {
            style['default']['icon-image'] = 'rw_stat_stanzii_2_blue.png';
            style['default']['text'] = tags['name'];
            style['default']['text-offset'] = 7;
            style['default']['font-size'] = '9';
            style['default']['font-family'] = 'DejaVu Sans Mono Book';
            style['default']['text-halo-radius'] = 1;
            style['default']['text-color'] = '#000d6c';
            style['default']['text-halo-color'] = '#ffffff';
            style['default']['text-allow-overlap'] = 'false';
            style['default']['-x-mapnik-min-distance'] = '0';
        }

        if (((type == 'node' && tags['railway'] == 'station' && tags['transport'] == 'subway') && zoom >= 12 && zoom <= 15)) {
            style['default']['icon-image'] = 'metro_others6.png';
            style['default']['z-index'] = 17;
        }

        if (((type == 'node' && tags['railway'] == 'station' && tags['transport'] == 'subway') && zoom >= 12 && zoom <= 15)) {

        if (typeof(style['label']) === 'undefined') {
            style['label'] = {};
        }
            style['label']['text'] = tags['name'];
            style['label']['text-offset'] = 11;
            style['label']['font-size'] = '9';
            style['label']['font-family'] = 'DejaVu Sans Book';
            style['label']['text-halo-radius'] = 2;
            style['label']['text-color'] = '#1300bb';
            style['label']['text-halo-color'] = '#ffffff';
            style['label']['text-allow-overlap'] = 'false';
            style['label']['-x-mapnik-min-distance'] = '0';
        }

        if (((type == 'node' && tags['railway'] == 'subway_entrance') && zoom >= 16)) {
            style['default']['icon-image'] = 'metro_others6.png';
            style['default']['z-index'] = 17;
        }

        if (((type == 'node' && tags['railway'] == 'subway_entrance' && ('name' in tags)) && zoom >= 16)) {
            style['default']['text'] = tags['name'];
            style['default']['text-offset'] = 11;
            style['default']['font-size'] = '9';
            style['default']['font-family'] = 'DejaVu Sans Book';
            style['default']['text-halo-radius'] = 2;
            style['default']['text-color'] = '#1300bb';
            style['default']['text-halo-color'] = '#ffffff';
            style['default']['text-allow-overlap'] = 'false';
            style['default']['-x-mapnik-min-distance'] = '0';
        }

        if (((type == 'node' && tags['aeroway'] == 'aerodrome') && zoom >= 10)) {
            style['default']['icon-image'] = 'airport_world.png';
            style['default']['text'] = tags['name'];
            style['default']['text-offset'] = 12;
            style['default']['font-size'] = '9';
            style['default']['font-family'] = 'DejaVu Sans Condensed Bold';
            style['default']['text-halo-radius'] = 1;
            style['default']['text-color'] = '#1e7ca5';
            style['default']['text-halo-color'] = '#ffffff';
            style['default']['text-allow-overlap'] = 'false';
            style['default']['z-index'] = 17;
        }

        if (((type == 'node' && (tags['capital'] == '1' || tags['capital'] == 'true' || tags['capital'] == 'yes') && tags['population'] > '5000000') && zoom >= 3 && zoom <= 6)) {
            style['default']['icon-image'] = 'adm_5.png';
            style['default']['allow-overlap'] = 'true';
        }

        if (((type == 'node' && (tags['capital'] == '1' || tags['capital'] == 'true' || tags['capital'] == 'yes') && tags['population'] > '5000000') && zoom >= 3 && zoom <= 4)) {
            style['default']['text-offset'] = 4;
            style['default']['text'] = tags['name'];
            style['default']['font-size'] = '8';
            style['default']['font-family'] = 'DejaVu Sans Bold';
            style['default']['text-halo-radius'] = 1;
            style['default']['text-color'] = '#505050';
            style['default']['text-halo-color'] = '#ffffff';
            style['default']['text-allow-overlap'] = 'false';
            style['default']['-x-mapnik-min-distance'] = '0';
            style['default']['text-align'] = 'left';
        }

        if (((type == 'node' && (tags['capital'] == '1' || tags['capital'] == 'true' || tags['capital'] == 'yes') && tags['population'] > '5000000') && zoom >= 4 && zoom <= 6)) {
            style['default']['text-offset'] = 6;
            style['default']['text'] = tags['name'];
            style['default']['font-size'] = '10';
            style['default']['font-family'] = 'DejaVu Sans Bold';
            style['default']['text-halo-radius'] = 1;
            style['default']['text-color'] = '#303030';
            style['default']['text-halo-color'] = '#ffffff';
            style['default']['text-allow-overlap'] = 'false';
            style['default']['-x-mapnik-min-distance'] = '0';
            style['default']['text-align'] = 'left';
        }

        if (((type == 'node' && ('place' in tags) && tags['population'] < '100000' && ('capital' in tags) && tags['admin_level'] < '5') && zoom >= 4 && zoom <= 5)) {
            style['default']['icon-image'] = 'adm_4.png';
            style['default']['text-offset'] = 5;
            style['default']['text'] = tags['name'];
            style['default']['font-size'] = '7';
            style['default']['font-family'] = 'DejaVu Sans Bold';
            style['default']['text-halo-radius'] = 1;
            style['default']['text-color'] = '#404040';
            style['default']['text-halo-color'] = '#ffffff';
            style['default']['text-allow-overlap'] = 'false';
            style['default']['-x-mapnik-min-distance'] = '0';
        }

        if (((type == 'node' && ('place' in tags) && tags['population'] >= '100000' && tags['population'] <= '5000000' && ('capital' in tags) && tags['admin_level'] < '5') && zoom >= 4 && zoom <= 5)) {
            style['default']['icon-image'] = 'adm_5.png';
            style['default']['text-offset'] = 5;
            style['default']['text'] = tags['name'];
            style['default']['font-size'] = '8';
            style['default']['font-family'] = 'DejaVu Sans Bold';
            style['default']['text-halo-radius'] = 1;
            style['default']['text-color'] = '#404040';
            style['default']['text-halo-color'] = '#ffffff';
            style['default']['text-allow-overlap'] = 'false';
            style['default']['-x-mapnik-min-distance'] = '0';
            style['default']['z-index'] = 1;
        }

        if (((type == 'node' && tags['place'] == 'town' && ('capital' in tags)) && zoom >= 5 && zoom <= 6)) {
            style['default']['icon-image'] = 'town_4.png';
        }

        if (((type == 'node' && tags['place'] == 'city' && tags['population'] < '100000') && zoom >= 6 && zoom <= 7)
            || ((type == 'node' && tags['place'] == 'town' && tags['population'] < '100000' && ('admin_level' in tags)) && zoom >= 6 && zoom <= 7)) {
            style['default']['icon-image'] = 'adm1_4_6.png';
            style['default']['text-offset'] = 5;
            style['default']['text'] = tags['name'];
            style['default']['font-size'] = '8';
            style['default']['font-family'] = 'DejaVu Sans Bold';
            style['default']['text-halo-radius'] = 1;
            style['default']['text-color'] = '#202020';
            style['default']['text-halo-color'] = '#ffffff';
            style['default']['text-allow-overlap'] = 'false';
            style['default']['-x-mapnik-min-distance'] = '0';
        }

        if (((type == 'node' && tags['place'] == 'city' && tags['population'] < '100000') && zoom >= 7 && zoom <= 8)
            || ((type == 'node' && tags['place'] == 'town' && tags['population'] < '100000') && zoom >= 7 && zoom <= 8)) {
            style['default']['icon-image'] = 'town_6.png';
            style['default']['text-offset'] = 5;
            style['default']['text'] = tags['name'];
            style['default']['font-size'] = '9';
            style['default']['font-family'] = 'DejaVu Sans Bold';
            style['default']['text-halo-radius'] = 1;
            style['default']['text-color'] = '#202020';
            style['default']['text-halo-color'] = '#ffffff';
            style['default']['text-allow-overlap'] = 'false';
            style['default']['-x-mapnik-min-distance'] = '0';
        }

        if (((type == 'node' && tags['place'] == 'town' && (!('population' in tags))) && zoom >= 7 && zoom <= 8)
            || ((type == 'node' && tags['place'] == 'city' && (!('population' in tags))) && zoom >= 7 && zoom <= 8)) {
            style['default']['icon-image'] = 'town_6.png';
            style['default']['text-offset'] = 5;
            style['default']['text'] = tags['name'];
            style['default']['font-size'] = '8';
            style['default']['font-family'] = 'DejaVu Sans Bold';
            style['default']['text-halo-radius'] = 1;
            style['default']['text-color'] = '#202020';
            style['default']['text-halo-color'] = '#ffffff';
            style['default']['text-allow-overlap'] = 'false';
            style['default']['-x-mapnik-min-distance'] = '0';
        }

        if (((type == 'node' && tags['place'] == 'town') && zoom >= 8 && zoom <= 9)) {
            style['default']['icon-image'] = 'town_6.png';
            style['default']['text-offset'] = 5;
            style['default']['text'] = tags['name'];
            style['default']['font-size'] = '8';
            style['default']['font-family'] = 'DejaVu Sans Bold';
            style['default']['text-halo-radius'] = 1;
            style['default']['text-color'] = '#202020';
            style['default']['text-halo-color'] = '#ffffff';
            style['default']['text-allow-overlap'] = 'false';
            style['default']['-x-mapnik-min-distance'] = '0';
        }

        if (((type == 'node' && tags['place'] == 'city' && tags['population'] >= '100000' && tags['population'] <= '1000000') && zoom >= 6 && zoom <= 8)
            || ((type == 'node' && tags['place'] == 'town' && tags['population'] >= '100000' && tags['population'] <= '1000000' && ('admin_level' in tags)) && zoom >= 6 && zoom <= 7)) {
            style['default']['icon-image'] = 'adm1_5.png';
            style['default']['text-offset'] = 5;
            style['default']['text'] = tags['name'];
            style['default']['font-size'] = '9';
            style['default']['font-family'] = 'DejaVu Sans Bold';
            style['default']['text-halo-radius'] = 1;
            style['default']['text-color'] = '#303030';
            style['default']['text-halo-color'] = '#ffffff';
            style['default']['text-allow-overlap'] = 'false';
            style['default']['-x-mapnik-min-distance'] = '0';
        }

        if (((type == 'node' && tags['place'] == 'city' && tags['population'] >= '100000' && tags['population'] <= '1000000') && zoom >= 7 && zoom <= 8)
            || ((type == 'node' && tags['place'] == 'town' && tags['population'] >= '100000' && tags['population'] <= '1000000') && zoom >= 7 && zoom <= 8)) {
            style['default']['icon-image'] = 'adm1_5.png';
            style['default']['text-offset'] = 5;
            style['default']['text'] = tags['name'];
            style['default']['font-size'] = '10';
            style['default']['font-family'] = 'DejaVu Sans Bold';
            style['default']['text-halo-radius'] = 1;
            style['default']['text-color'] = '#303030';
            style['default']['text-halo-color'] = '#ffffff';
            style['default']['text-allow-overlap'] = 'false';
            style['default']['-x-mapnik-min-distance'] = '0';
        }

        if (((type == 'node' && tags['place'] == 'city' && tags['population'] > '1000000') && zoom >= 6 && zoom <= 7)) {
            style['default']['icon-image'] = 'adm1_6_test2.png';
            style['default']['text-offset'] = 5;
            style['default']['text'] = tags['name'];
            style['default']['font-size'] = '10';
            style['default']['font-family'] = 'DejaVu Sans Bold';
            style['default']['text-halo-radius'] = 1;
            style['default']['text-color'] = '#404040';
            style['default']['text-halo-color'] = '#ffffff';
            style['default']['text-allow-overlap'] = 'false';
            style['default']['-x-mapnik-min-distance'] = '0';
            style['default']['z-index'] = 1;
        }

        if (((type == 'node' && tags['place'] == 'city' && tags['population'] > '1000000' && tags['population'] < '5000000') && zoom >= 7 && zoom <= 8)) {
            style['default']['icon-image'] = 'adm1_6_test2.png';
            style['default']['text-offset'] = 5;
            style['default']['text'] = tags['name'];
            style['default']['font-size'] = '11';
            style['default']['font-family'] = 'DejaVu Sans Bold';
            style['default']['text-halo-radius'] = 1;
            style['default']['text-color'] = '#404040';
            style['default']['text-halo-color'] = '#ffffff';
            style['default']['text-allow-overlap'] = 'false';
            style['default']['-x-mapnik-min-distance'] = '0';
            style['default']['z-index'] = 2;
        }

        if (((type == 'node' && tags['place'] == 'city' && tags['population'] >= '5000000') && zoom >= 7 && zoom <= 8)) {
            style['default']['icon-image'] = 'adm_6.png';
            style['default']['text-offset'] = 5;
            style['default']['text'] = tags['name'];
            style['default']['font-size'] = '12';
            style['default']['font-family'] = 'DejaVu Sans Bold';
            style['default']['text-halo-radius'] = 1;
            style['default']['text-color'] = '#404040';
            style['default']['text-halo-color'] = '#ffffff';
            style['default']['text-allow-overlap'] = 'false';
            style['default']['-x-mapnik-min-distance'] = '0';
            style['default']['z-index'] = 3;
        }

        if (((type == 'node' && tags['place'] == 'city' && (tags['capital'] == '1' || tags['capital'] == 'true' || tags['capital'] == 'yes')) && zoom >= 9 && zoom <= 11)) {
            style['default']['text'] = tags['name'];
            style['default']['text-offset'] = -20;
            style['default']['font-size'] = '14';
            style['default']['font-family'] = 'DejaVu Sans Bold';
            style['default']['text-halo-radius'] = 4;
            style['default']['text-color'] = '#101010';
            style['default']['text-halo-color'] = '#ffffff';
            style['default']['text-allow-overlap'] = 'false';
            style['default']['-x-mapnik-min-distance'] = '50';
            style['default']['z-index'] = 20;
        }

        if (((type == 'node' && tags['place'] == 'city' && (tags['capital'] == '-1' || tags['capital'] == 'false' || tags['capital'] == 'no')) && zoom >= 9 && zoom <= 11)) {
            style['default']['text'] = tags['name'];
            style['default']['text-offset'] = -20;
            style['default']['font-size'] = '14';
            style['default']['font-family'] = 'DejaVu Sans Bold';
            style['default']['text-halo-radius'] = 2;
            style['default']['text-color'] = '#101010';
            style['default']['text-halo-color'] = '#ffffff';
            style['default']['text-allow-overlap'] = 'false';
            style['default']['-x-mapnik-min-distance'] = '0';
            style['default']['z-index'] = 1;
        }

        if (((type == 'node' && tags['place'] == 'town') && zoom >= 11 && zoom <= 12)) {
            style['default']['text'] = tags['name'];
            style['default']['font-size'] = '12';
            style['default']['font-family'] = 'DejaVu Sans Book';
            style['default']['text-color'] = '#101010';
            style['default']['text-halo-radius'] = 1;
            style['default']['text-halo-color'] = '#ffffff';
            style['default']['z-index'] = 20;
        }

        if (((type == 'node' && tags['place'] == 'town') && zoom >= 12 && zoom <= 13)) {
            style['default']['text'] = tags['name'];
            style['default']['font-size'] = '20';
            style['default']['font-family'] = 'DejaVu Sans Book';
            style['default']['text-color'] = '#101010';
            style['default']['text-opacity'] = '0.2';
            style['default']['text-allow-overlap'] = 'true';
            style['default']['z-index'] = 20;
        }

        if (((type == 'node' && tags['place'] == 'city') && zoom >= 12 && zoom <= 13)) {
            style['default']['text'] = tags['name'];
            style['default']['font-size'] = '25';
            style['default']['font-family'] = 'DejaVu Sans Book';
            style['default']['text-color'] = '#101010';
            style['default']['text-opacity'] = '0.3';
            style['default']['text-allow-overlap'] = 'true';
            style['default']['z-index'] = 20;
        }

        if (((type == 'node' && tags['place'] == 'town') && zoom >= 13 && zoom <= 14)) {
            style['default']['text'] = tags['name'];
            style['default']['font-size'] = '40';
            style['default']['font-family'] = 'DejaVu Sans Book';
            style['default']['text-color'] = '#101010';
            style['default']['text-opacity'] = '0.2';
            style['default']['text-allow-overlap'] = 'true';
            style['default']['z-index'] = 20;
        }

        if (((type == 'node' && tags['place'] == 'city') && zoom >= 13 && zoom <= 14)) {
            style['default']['text'] = tags['name'];
            style['default']['font-size'] = '50';
            style['default']['font-family'] = 'DejaVu Sans Book';
            style['default']['text-color'] = '#101010';
            style['default']['text-opacity'] = '0.3';
            style['default']['text-allow-overlap'] = 'true';
            style['default']['z-index'] = 20;
        }

        if (((type == 'node' && tags['place'] == 'town') && zoom >= 14)) {
            style['default']['text'] = tags['name'];
            style['default']['font-size'] = '80';
            style['default']['font-family'] = 'DejaVu Sans Book';
            style['default']['text-color'] = '#101010';
            style['default']['text-opacity'] = '0.2';
            style['default']['text-allow-overlap'] = 'true';
            style['default']['z-index'] = 20;
        }

        if (((type == 'node' && tags['place'] == 'city') && zoom >= 14)) {
            style['default']['text'] = tags['name'];
            style['default']['font-size'] = '100';
            style['default']['font-family'] = 'DejaVu Sans Book';
            style['default']['text-color'] = '#101010';
            style['default']['text-opacity'] = '0.3';
            style['default']['text-allow-overlap'] = 'true';
            style['default']['z-index'] = 20;
        }

        if (((type == 'node' && tags['place'] == 'village') && zoom >= 9)) {
            style['default']['text'] = tags['name'];
            style['default']['text-offset'] = 1;
            style['default']['font-size'] = '9';
            style['default']['font-family'] = 'DejaVu Sans Book';
            style['default']['text-halo-radius'] = 1;
            style['default']['text-color'] = '#606060';
            style['default']['text-halo-color'] = '#ffffff';
            style['default']['text-allow-overlap'] = 'false';
        }

        if (((type == 'node' && tags['place'] == 'hamlet') && zoom >= 9)) {
            style['default']['text'] = tags['name'];
            style['default']['text-offset'] = 1;
            style['default']['font-size'] = '8';
            style['default']['font-family'] = 'DejaVu Sans Book';
            style['default']['text-halo-radius'] = 1;
            style['default']['text-color'] = '#505050';
            style['default']['text-halo-color'] = '#ffffff';
            style['default']['text-allow-overlap'] = 'false';
        }

        if (((selector == 'area' && tags['landuse'] == 'nature_reserve') && zoom >= 9)
            || ((selector == 'area' && tags['leisure'] == 'park') && zoom >= 11)) {
            style['default']['text'] = tags['name'];
            style['default']['text-offset'] = 1;
            style['default']['font-size'] = '10';
            style['default']['font-family'] = 'DejaVu Serif Italic';
            style['default']['text-halo-radius'] = 0;
            style['default']['text-color'] = '#3c8000';
            style['default']['text-halo-color'] = '#ffffff';
            style['default']['text-allow-overlap'] = 'false';
        }

        if (((type == 'way' && tags['waterway'] == 'stream') && zoom >= 10)
            || ((type == 'way' && tags['waterway'] == 'river') && zoom >= 9)
            || ((type == 'way' && tags['waterway'] == 'canal') && zoom >= 13)) {
            style['default']['text'] = tags['name'];
            style['default']['font-size'] = '9';
            style['default']['font-family'] = 'DejaVu Sans Oblique';
            style['default']['text-color'] = '#547bd1';
            style['default']['text-halo-radius'] = 1;
            style['default']['text-halo-color'] = '#ffffff';
            style['default']['text-position'] = 'line';
        }

        if (((type == 'node' && tags['place'] == 'continent') && zoom <= 3)) {
            style['default']['text'] = tags['name'];
            style['default']['text-offset'] = -10;
            style['default']['font-size'] = '10';
            style['default']['font-family'] = 'DejaVu Sans ExtraLight';
            style['default']['text-halo-radius'] = 1;
            style['default']['text-color'] = '#202020';
            style['default']['text-halo-color'] = '#ffffff';
            style['default']['z-index'] = -1;
            style['default']['-x-mapnik-min-distance'] = '0';
        }

        if (((type == 'node' && tags['place'] == 'continent') && zoom >= 2 && zoom <= 3)) {
            style['default']['text'] = tags['name'];
            style['default']['text-offset'] = -10;
            style['default']['font-size'] = '8';
            style['default']['font-family'] = 'DejaVu Sans ExtraLight';
            style['default']['text-halo-radius'] = 1;
            style['default']['text-color'] = '#202020';
            style['default']['text-halo-color'] = '#ffffff';
            style['default']['z-index'] = -1;
            style['default']['-x-mapnik-min-distance'] = '0';
        }

        if (((type == 'node' && tags['place'] == 'ocean') && zoom <= 6)) {
            style['default']['text'] = tags['name'];
            style['default']['text-offset'] = 0;
            style['default']['font-size'] = '8';
            style['default']['font-family'] = 'DejaVu Sans Oblique';
            style['default']['text-halo-radius'] = 1;
            style['default']['text-color'] = '#202020';
            style['default']['text-halo-color'] = '#ffffff';
            style['default']['z-index'] = -1;
            style['default']['-x-mapnik-min-distance'] = '0';
        }

        if (((type == 'node' && tags['place'] == 'ocean') && zoom >= 7)) {
            style['default']['text'] = tags['name'];
            style['default']['text-offset'] = 0;
            style['default']['font-size'] = '11';
            style['default']['font-family'] = 'DejaVu Sans Oblique';
            style['default']['text-halo-radius'] = 1;
            style['default']['text-color'] = '#202020';
            style['default']['text-halo-color'] = '#ffffff';
            style['default']['z-index'] = -1;
            style['default']['-x-mapnik-min-distance'] = '0';
        }

        if (((type == 'node' && tags['place'] == 'sea') && zoom <= 6)) {
            style['default']['text'] = tags['name'];
            style['default']['text-offset'] = 0;
            style['default']['font-size'] = '8';
            style['default']['font-family'] = 'DejaVu Sans Oblique';
            style['default']['text-halo-radius'] = 1;
            style['default']['text-color'] = '#4976d1';
            style['default']['text-halo-color'] = '#ffffff';
            style['default']['-x-mapnik-min-distance'] = '0';
        }

        if (((type == 'node' && tags['place'] == 'sea') && zoom >= 7)) {
            style['default']['text'] = tags['name'];
            style['default']['text-offset'] = 0;
            style['default']['font-size'] = '10';
            style['default']['font-family'] = 'DejaVu Sans Oblique';
            style['default']['text-halo-radius'] = 1;
            style['default']['text-color'] = '#4976d1';
            style['default']['text-halo-color'] = '#ffffff';
            style['default']['-x-mapnik-min-distance'] = '0';
        }

        if (((type == 'node' && tags['natural'] == 'peak' && tags['ele'] > '4500') && zoom >= 3 && zoom <= 4)) {
            style['default']['icon-image'] = 'mountain_peak6.png';
            style['default']['text'] = tags['ele'];
            style['default']['text-offset'] = 3;
            style['default']['font-size'] = '7';
            style['default']['font-family'] = 'DejaVu Sans Mono Book';
            style['default']['text-halo-radius'] = 0;
            style['default']['text-color'] = '#664229';
            style['default']['text-halo-color'] = '#ffffff';
            style['default']['-x-mapnik-min-distance'] = '0';
        }

        if (((type == 'node' && tags['natural'] == 'peak' && tags['ele'] > '3500') && zoom >= 5 && zoom <= 6)) {
            style['default']['icon-image'] = 'mountain_peak6.png';
            style['default']['text'] = tags['ele'];
            style['default']['text-offset'] = 3;
            style['default']['font-size'] = '7';
            style['default']['font-family'] = 'DejaVu Sans Mono Book';
            style['default']['text-halo-radius'] = 0;
            style['default']['text-color'] = '#664229';
            style['default']['text-halo-color'] = '#ffffff';
            style['default']['-x-mapnik-min-distance'] = '0';
        }

        if (((type == 'node' && tags['natural'] == 'peak' && tags['ele'] > '2500') && zoom >= 7 && zoom <= 12)) {
            style['default']['icon-image'] = 'mountain_peak6.png';
            style['default']['text'] = tags['ele'];
            style['default']['text-offset'] = 3;
            style['default']['font-size'] = '7';
            style['default']['font-family'] = 'DejaVu Sans Mono Book';
            style['default']['text-halo-radius'] = 0;
            style['default']['text-color'] = '#664229';
            style['default']['text-halo-color'] = '#ffffff';
            style['default']['-x-mapnik-min-distance'] = '0';
        }

        if (((type == 'node' && tags['natural'] == 'peak') && zoom >= 12)) {
            style['default']['icon-image'] = 'mountain_peak6.png';
            style['default']['text'] = tags['name'];
            style['default']['text-offset'] = 3;
            style['default']['font-size'] = '7';
            style['default']['font-family'] = 'DejaVu Sans Mono Book';
            style['default']['text-halo-radius'] = 0;
            style['default']['text-color'] = '#664229';
            style['default']['text-halo-color'] = '#ffffff';
            style['default']['-x-mapnik-min-distance'] = '0';
        }

        if (((type == 'node' && tags['place'] == 'country') && zoom >= 2 && zoom <= 3)) {
            style['default']['text'] = tags['name'];
            style['default']['text-offset'] = 0;
            style['default']['font-size'] = '10';
            style['default']['font-family'] = 'DejaVu Sans Book';
            style['default']['text-halo-radius'] = 1;
            style['default']['text-color'] = '#dd5875';
            style['default']['text-halo-color'] = '#ffffff';
            style['default']['z-index'] = 1;
            style['default']['-x-mapnik-min-distance'] = '0';
        }

        if (((type == 'node' && tags['place'] == 'country') && zoom >= 4 && zoom <= 8)) {
            style['default']['text'] = tags['name'];
            style['default']['text-offset'] = 0;
            style['default']['font-size'] = '13';
            style['default']['font-family'] = 'DejaVu Sans Book';
            style['default']['text-halo-radius'] = 1;
            style['default']['text-color'] = 'red';
            style['default']['text-halo-color'] = '#ffffff';
            style['default']['z-index'] = 1;
            style['default']['-x-mapnik-min-distance'] = '0';
        }

        if (((type == 'node' && tags['place'] == 'country') && zoom >= 8 && zoom <= 10)) {
            style['default']['text'] = tags['name'];
            style['default']['text-offset'] = 0;
            style['default']['font-size'] = '16';
            style['default']['font-family'] = 'DejaVu Sans Book';
            style['default']['text-halo-radius'] = 1;
            style['default']['text-color'] = 'red';
            style['default']['text-halo-color'] = '#ffffff';
            style['default']['z-index'] = 1;
            style['default']['-x-mapnik-min-distance'] = '0';
        }

        if (((selector == 'area' && tags['boundary'] == 'administrative' && tags['admin_level'] == '3') && zoom >= 3 && zoom <= 5)) {
            style['default']['text'] = tags['name'];
            style['default']['text-offset'] = -5;
            style['default']['font-size'] = '8';
            style['default']['font-family'] = 'DejaVu Sans ExtraLight';
            style['default']['text-halo-radius'] = 0;
            style['default']['text-color'] = '#101010';
            style['default']['text-halo-color'] = '#ffffff';
            style['default']['-x-mapnik-min-distance'] = '0';
            style['default']['max-width'] = 50;
        }

        if (((selector == 'area' && tags['boundary'] == 'administrative' && tags['admin_level'] == '4') && zoom >= 6 && zoom <= 10)) {
            style['default']['text'] = tags['name'];
            style['default']['text-offset'] = 17;
            style['default']['font-size'] = '14';
            style['default']['font-family'] = 'DejaVu Sans ExtraLight';
            style['default']['text-halo-radius'] = 1;
            style['default']['text-color'] = '#606060';
            style['default']['text-halo-color'] = '#ffffff';
            style['default']['-x-mapnik-min-distance'] = '0';
        }

        if (((selector == 'area' && tags['boundary'] == 'administrative' && tags['admin_level'] == '6') && zoom >= 10)) {
            style['default']['text'] = tags['name'];
            style['default']['text-offset'] = -10;
            style['default']['font-size'] = '12';
            style['default']['font-family'] = 'DejaVu Sans ExtraLight';
            style['default']['text-halo-radius'] = 1;
            style['default']['text-color'] = '#7848a0';
            style['default']['text-halo-color'] = '#ffffff';
        }

        if (((type == 'node' && tags['place'] == 'suburb') && zoom >= 12)) {
            style['default']['text'] = tags['name'];
            style['default']['font-size'] = '12';
            style['default']['font-family'] = 'DejaVu Sans ExtraLight';
            style['default']['text-color'] = '#7848a0';
            style['default']['z-index'] = 20;
        }

        if (((selector == 'area' && ('building' in tags)) && zoom >= 13)) {
            style['default']['width'] = .3;
            style['default']['color'] = '#cca352';
            style['default']['z-index'] = 17;
        }

        if (((selector == 'area' && (tags['building'] == '1' || tags['building'] == 'true' || tags['building'] == 'yes')) && zoom >= 15)) {
            style['default']['fill-color'] = '#E7CCB4';
            style['default']['z-index'] = 17;
        }

        if (((selector == 'area' && tags['building'] == 'public') && zoom >= 15)) {
            style['default']['fill-color'] = '#edc2ba';
            style['default']['z-index'] = 17;
        }

        if (((selector == 'area' && ('building' in tags) && (tags['building'] == '-1' || tags['building'] == 'false' || tags['building'] == 'no') && tags['building'] !== 'public') && zoom >= 15)) {
            style['default']['fill-color'] = '#D8D1D1';
            style['default']['z-index'] = 17;
        }

        if (((selector == 'area' && ('building' in tags)) && zoom >= 15 && zoom <= 16)) {
            style['default']['text'] = tags['addr:housenumber'];
            style['default']['text-halo-radius'] = 1;
            style['default']['text-position'] = 'center';
            style['default']['font-size'] = '7';
            style['default']['-x-mapnik-min-distance'] = '10';
            style['default']['opacity'] = 0.8;
        }

        if (((selector == 'area' && ('building' in tags)) && zoom >= 17)) {
            style['default']['text'] = tags['addr:housenumber'];
            style['default']['text-halo-radius'] = 1;
            style['default']['text-position'] = 'center';
            style['default']['font-size'] = '8';
            style['default']['-x-mapnik-min-distance'] = '10';
            style['default']['opacity'] = 0.8;
        }

        if (((type == 'node' && tags['highway'] == 'milestone' && ('pk' in tags)) && zoom >= 13)) {
            style['default']['text'] = tags['pk'];
            style['default']['font-size'] = '7';
            style['default']['text-halo-radius'] = 5;
            style['default']['-x-mapnik-min-distance'] = '0';
        }

        return style;
    }
    
    var sprite_images = {
        'adm1_4_6.png': {width: 4, height: 4, offset: 0},
        'adm1_5.png': {width: 5, height: 5, offset: 4},
        'adm1_6_test2.png': {width: 6, height: 6, offset: 9},
        'adm_4.png': {width: 4, height: 4, offset: 15},
        'adm_5.png': {width: 5, height: 5, offset: 19},
        'adm_6.png': {width: 6, height: 6, offset: 24},
        'airport_world.png': {width: 11, height: 14, offset: 30},
        'aut2_16x16_park.png': {width: 16, height: 16, offset: 44},
        'autobus_stop_14x10.png': {width: 14, height: 10, offset: 60},
        'bull2.png': {width: 12, height: 12, offset: 70},
        'cemetry7_2.png': {width: 14, height: 14, offset: 82},
        'cinema_14x14.png': {width: 14, height: 14, offset: 96},
        'desert22.png': {width: 16, height: 8, offset: 110},
        'glacier.png': {width: 10, height: 10, offset: 118},
        'hotell_14x14.png': {width: 14, height: 14, offset: 128},
        'kindergarten_14x14.png': {width: 14, height: 14, offset: 142},
        'kust1.png': {width: 14, height: 14, offset: 156},
        'lib_13x14.png': {width: 13, height: 12, offset: 170},
        'med1_11x14.png': {width: 11, height: 14, offset: 182},
        'metro_others6.png': {width: 16, height: 16, offset: 196},
        'mountain_peak6.png': {width: 3, height: 3, offset: 212},
        'mus_13x12.png': {width: 13, height: 12, offset: 215},
        'parks2.png': {width: 12, height: 12, offset: 227},
        'post_14x11.png': {width: 14, height: 11, offset: 239},
        'pravosl_kupol_11x15.png': {width: 11, height: 15, offset: 250},
        'rest_14x14.png': {width: 14, height: 14, offset: 265},
        'rw_stat_stanzii_2_blue.png': {width: 9, height: 5, offset: 279},
        'sady10.png': {width: 16, height: 16, offset: 284},
        'school_13x13.png': {width: 13, height: 13, offset: 300},
        'sud_14x13.png': {width: 14, height: 13, offset: 313},
        'superm_12x12.png': {width: 12, height: 12, offset: 326},
        'swamp_world2.png': {width: 23, height: 24, offset: 338},
        'tankstelle1_10x11.png': {width: 10, height: 11, offset: 362},
        'teater_14x14.png': {width: 14, height: 14, offset: 373},
        'town_4.png': {width: 4, height: 4, offset: 387},
        'town_6.png': {width: 6, height: 6, offset: 391},
        'tramway_14x13.png': {width: 14, height: 13, offset: 397},
        'univer_15x11.png': {width: 15, height: 11, offset: 410},
        'wc-3_13x13.png': {width: 13, height: 13, offset: 421},
        'zoo4_14x14.png': {width: 14, height: 14, offset: 434}};
    
    var external_images = [];
    
    MapCSS.loadStyle('osmosnimki-maps', restyle, sprite_images, external_images);
})(MapCSS);
