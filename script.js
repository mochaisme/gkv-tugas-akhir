google.charts.load('current', {'packages':['geochart', 'corechart', 'bar']});
google.charts.setOnLoadCallback(drawCharts);

function drawCharts() {
  var data = [
    ['Province', 'Percentage Using Technology'],
    [{v: 'ID-AC', f: 'Aceh'}, (136159 / (136159 + 86720)) * 100],
    [{v: 'ID-SU', f: 'Sumatera Utara'}, (137969 / (137969 + 223845)) * 100],
    [{v: 'ID-SB', f: 'Sumatera Barat'}, (80664 / (80664 + 83172)) * 100],
    [{v: 'ID-RI', f: 'Riau'}, (67142 / (67142 + 119215)) * 100],
    [{v: 'ID-JA', f: 'Jambi'}, (47223 / (47223 + 108061)) * 100],
    [{v: 'ID-SS', f: 'Sumatera Selatan'}, (169266 / (169266 + 171170)) * 100],
    [{v: 'ID-BE', f: 'Bengkulu'}, (45578 / (45578 + 51061)) * 100],
    [{v: 'ID-LA', f: 'Lampung'}, (200129 / (200129 + 137358)) * 100],
    [{v: 'ID-BB', f: 'Bangka Belitung'}, (20688 / (20688 + 29455)) * 100],
    [{v: 'ID-KR', f: 'Kepulauan Riau'}, (4737 / (4737 + 13879)) * 100],
    [{v: 'ID-JK', f: 'DKI Jakarta'}, (796 / (796 + 1772)) * 100],
    [{v: 'ID-JB', f: 'Jawa Barat'}, (242390 / (242390 + 300654)) * 100],
    [{v: 'ID-JT', f: 'Jawa Tengah'}, (303823 / (303823 + 321984)) * 100],
    [{v: 'ID-YO', f: 'DI Yogyakarta'}, (16423 / (16423 + 20718)) * 100],
    [{v: 'ID-JI', f: 'Jawa Timur'}, (425861 / (425861 + 545241)) * 100],
    [{v: 'ID-BT', f: 'Banten'}, (46561 / (46561 + 63885)) * 100],
    [{v: 'ID-BA', f: 'Bali'}, (23162 / (23162 + 31746)) * 100],
    [{v: 'ID-NB', f: 'Nusa Tenggara Barat'}, (144457 / (144457 + 81026)) * 100],
    [{v: 'ID-NT', f: 'Nusa Tenggara Timur'}, (50879 / (50879 + 174306)) * 100],
    [{v: 'ID-KB', f: 'Kalimantan Barat'}, (41347 / (41347 + 162508)) * 100],
    [{v: 'ID-KT', f: 'Kalimantan Tengah'}, (21300 / (21300 + 61349)) * 100],
    [{v: 'ID-KS', f: 'Kalimantan Selatan'}, (44022 / (44022 + 72794)) * 100],
    [{v: 'ID-KI', f: 'Kalimantan Timur'}, (15941 / (15941 + 29626)) * 100],
    [{v: 'ID-KU', f: 'Kalimantan Utara'}, (5356 / (5356 + 10897)) * 100],
    [{v: 'ID-SA', f: 'Sulawesi Utara'}, (14111 / (14111 + 34576)) * 100],
    [{v: 'ID-ST', f: 'Sulawesi Tengah'}, (36236 / (36236 + 86778)) * 100],
    [{v: 'ID-SN', f: 'Sulawesi Selatan'}, (175732 / (175732 + 97085)) * 100],
    [{v: 'ID-SG', f: 'Sulawesi Tenggara'}, (27116 / (27116 + 65075)) * 100],
    [{v: 'ID-GO', f: 'Gorontalo'}, (22489 / (22489 + 19401)) * 100],
    [{v: 'ID-SR', f: 'Sulawesi Barat'}, (23575 / (23575 + 36065)) * 100],
    [{v: 'ID-MA', f: 'Maluku'}, (3807 / (3807 + 55207)) * 100],
    [{v: 'ID-MU', f: 'Maluku Utara'}, (2847 / (2847 + 38314)) * 100],
    [{v: 'ID-PB', f: 'Papua Barat'}, (602 / (602 + 19053)) * 100],
    [{v: 'ID-PG', f: 'Papua Barat Daya'}, (656 / (656 + 9434)) * 100],
    [{v: 'ID-PS', f: 'Papua Selatan'}, (1144 / (1144 + 9434)) * 100],
    [{v: 'ID-PA', f: 'Papua'}, (3010 / (3010 + 21585)) * 100],
    [{v: 'ID-PT', f: 'Central Papua'}, (407 / (407 + 24520)) * 100],
    [{v: 'ID-PE', f: 'Papua Pegunungan'}, (4 / (4 + 83693)) * 100],
  ];

  var geoData = google.visualization.arrayToDataTable(data);

  var geoOptions = { 
    region: 'ID',
    displayMode: 'regions',
    resolution: 'provinces',
    colorAxis: {minValue: 0, maxValue: 100, colors: ['#73adf0', '#1e4187']},
    datalessRegionColor: '#f5f5f5',
    tooltip: {isHtml: true, trigger: 'focus'}
  };

  var geoChart = new google.visualization.GeoChart(document.getElementById('geo_chart_div'));
  geoChart.draw(geoData, geoOptions);

  var pieData = google.visualization.arrayToDataTable([
    ['Status', 'Jumlah'],
    ['Sudah menggunakan teknologi', 2603609],
    ['Belum menggunakan teknologi', 3579400]
  ]);

  var pieOptions = {
    pieHole: 0.4,
  };

  var pieChart = new google.visualization.PieChart(document.getElementById('piechart'));
  pieChart.draw(pieData, pieOptions);

  var columnData = google.visualization.arrayToDataTable([
    ['Provinsi', 'Sudah menggunakan teknologi', 'Belum menggunakan teknologi'],
    ['Aceh', 136159, 86720],
    ['Sumatera Utara', 137969, 223845],
    ['Sumatera Barat', 80664, 83172],
    ['Riau', 67142, 119215],
    ['Jambi', 47223, 108061],
    ['Sumatera Selatan', 169266, 171170],
    ['Bengkulu', 45578, 51061],
    ['Lampung', 200129, 137358],
    ['Kep. Bangka Belitung', 20688, 29455],
    ['Kep. Riau', 4737, 13879],
    ['DKI Jakarta', 796, 1772],
    ['Jawa Barat', 242390, 300654],
    ['Jawa Tengah', 303823, 321984],
    ['DI Yogyakarta', 16423, 20718],
    ['Jawa Timur', 425861, 545241],
    ['Banten', 46561, 63885],
    ['Bali', 23162, 31746],
    ['NTB', 144457, 81026],
    ['NTT', 50879, 174306],
    ['Kalimantan Barat', 41347, 162508],   
    ['Kalimantan Tengah', 21300, 61349],  
    ['Kalimantan Selatan', 44022, 72794],  
    ['Kalimantan Timur', 15941, 29626],        
    ['Kalimantan Utara', 5356, 10897],  
    ['Sulawesi Utara', 14111, 34576],  
    ['Sulawesi Tengah', 36236, 86778],  
    ['Sulawesi Selatan', 175732, 97085],  
    ['Sulawesi Tenggara', 27116, 65075], 
    ['Sulawesi Barat', 23575, 36065],   
    ['Gorontalo', 22489, 19401],  
    ['Maluku', 3807, 55207],
    ['Maluku Utara', 2847, 38314], 
    ['Papua Barat', 602, 19053],   
    ['Papua Barat Daya', 656, 9434], 
    ['Papua', 1144, 21585],
    ['Papua Selatan', 3010, 24520],    
    ['Papua Tengah', 407, 82693], 
    ['Papua Pegunungan', 4, 87172],         
  ]);

  var columnOptions = {
    colors: ['#1e4187', '#73adf0'],
    hAxis: {
      title: 'Provinsi',
      textStyle: {
        fontSize: 15,
      }
    },
    vAxis: {
      title: 'Jumlah (orang)',
      textStyle: {
        fontSize: 20,
      }
    }
  };

  var columnChart = new google.visualization.ColumnChart(document.getElementById('columnchart_material'));
  columnChart.draw(columnData, columnOptions);

  AOS.init({
    duration: 1000,
  });
}
