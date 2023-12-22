var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Administrasi_Desa_Dis_1 = new ol.format.GeoJSON();
var features_Administrasi_Desa_Dis_1 = format_Administrasi_Desa_Dis_1.readFeatures(json_Administrasi_Desa_Dis_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Administrasi_Desa_Dis_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Administrasi_Desa_Dis_1.addFeatures(features_Administrasi_Desa_Dis_1);
var lyr_Administrasi_Desa_Dis_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Administrasi_Desa_Dis_1, 
                style: style_Administrasi_Desa_Dis_1,
                interactive: true,
                title: '<img src="styles/legend/Administrasi_Desa_Dis_1.png" /> Administrasi_Desa_Dis'
            });
var format_Sarana_Pemerintahan_Plantungan_2 = new ol.format.GeoJSON();
var features_Sarana_Pemerintahan_Plantungan_2 = format_Sarana_Pemerintahan_Plantungan_2.readFeatures(json_Sarana_Pemerintahan_Plantungan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sarana_Pemerintahan_Plantungan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sarana_Pemerintahan_Plantungan_2.addFeatures(features_Sarana_Pemerintahan_Plantungan_2);
var lyr_Sarana_Pemerintahan_Plantungan_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sarana_Pemerintahan_Plantungan_2, 
                style: style_Sarana_Pemerintahan_Plantungan_2,
                interactive: true,
                title: '<img src="styles/legend/Sarana_Pemerintahan_Plantungan_2.png" /> Sarana_Pemerintahan_Plantungan'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Administrasi_Desa_Dis_1.setVisible(true);lyr_Sarana_Pemerintahan_Plantungan_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Administrasi_Desa_Dis_1,lyr_Sarana_Pemerintahan_Plantungan_2];
lyr_Administrasi_Desa_Dis_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'DESA': 'DESA', 'KECAMATAN': 'KECAMATAN', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Sarana_Pemerintahan_Plantungan_2.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'HasLabel': 'HasLabel', 'LabelID': 'LabelID', 'Jns_S_Peme': 'Jns_S_Peme', });
lyr_Administrasi_Desa_Dis_1.set('fieldImages', {'OBJECTID': '', 'DESA': '', 'KECAMATAN': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_Sarana_Pemerintahan_Plantungan_2.set('fieldImages', {'OID_': '', 'Name': '', 'FolderPath': '', 'SymbolID': '', 'AltMode': '', 'Base': '', 'Snippet': '', 'PopupInfo': '', 'HasLabel': '', 'LabelID': '', 'Jns_S_Peme': '', });
lyr_Administrasi_Desa_Dis_1.set('fieldLabels', {'OBJECTID': 'no label', 'DESA': 'no label', 'KECAMATAN': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Sarana_Pemerintahan_Plantungan_2.set('fieldLabels', {'OID_': 'no label', 'Name': 'no label', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'HasLabel': 'no label', 'LabelID': 'no label', 'Jns_S_Peme': 'no label', });
lyr_Sarana_Pemerintahan_Plantungan_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});