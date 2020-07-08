//based from https://developers.google.com/public-data/docs/canonical/countries_csv; edited certain countries
const countries = {
   'Andorra': {
      'lat': 42.546246,
      'lon': 1.601554,
      'abbr': 'AD'
   },
   'United Arab Emirates': {
      'lat': 23.424076,
      'lon': 53.847816,
      'abbr': 'AE'
   },
   'Afghanistan': {
      'lat': 33.93911,
      'lon': 67.70995,
      'abbr': 'AF'
   },
   'Antigua and Barbuda': {
      'lat': 17.060816,
      'lon': -61.79643,
      'abbr': 'AG'
   },
   'Albania': {
      'lat': 41.15333,
      'lon': 20.168331,
      'abbr': 'AL'
   },
   'Armenia': {
      'lat': 40.0691,
      'lon': 45.03819,
      'abbr': 'AM'
   },
   'Angola': {
      'lat': -11.202692,
      'lon': 17.873886,
      'abbr': 'AO'
   },
   'Argentina': {
      'lat': -38.416096,
      'lon': -63.616673,
      'abbr': 'AR'
   },
   'Austria': {
      'lat': 47.51623,
      'lon': 14.550072,
      'abbr': 'AT'
   },
   'Australia': {
      'lat': -25.274399,
      'lon': 133.77513,
      'abbr': 'AU'
   },
   'Azerbaijan': {
      'lat': 40.143105,
      'lon': 47.576927,
      'abbr': 'AZ'
   },
   'Bosnia and Herzegovina': {
      'lat': 43.915886,
      'lon': 17.679075,
      'abbr': 'BA'
   },
   'Barbados': {
      'lat': 13.193887,
      'lon': -59.543198,
      'abbr': 'BB'
   },
   'Bangladesh': {
      'lat': 23.684994,
      'lon': 90.35633,
      'abbr': 'BD'
   },
   'Belgium': {
      'lat': 50.503887,
      'lon': 4.469936,
      'abbr': 'BE'
   },
   'Burkina Faso': {
      'lat': 12.238333,
      'lon': -1.561593,
      'abbr': 'BF'
   },
   'Bulgaria': {
      'lat': 42.733883,
      'lon': 25.48583,
      'abbr': 'BG'
   },
   'Bahrain': {
      'lat': 25.930414,
      'lon': 50.63777,
      'abbr': 'BH'
   },
   'Burundi': {
      'lat': -3.373056,
      'lon': 29.918886,
      'abbr': 'BI'
   },
   'Benin': {
      'lat': 9.30769,
      'lon': 2.315834,
      'abbr': 'BJ'
   },
   'Brunei': {
      'lat': 4.535277,
      'lon': 114.72767,
      'abbr': 'BN'
   },
   'Bolivia': {
      'lat': -16.290154,
      'lon': -63.588654,
      'abbr': 'BO'
   },
   'Brazil': {
      'lat': -14.235004,
      'lon': -51.92528,
      'abbr': 'BR'
   },
   'Bahamas': {
      'lat': 25.03428,
      'lon': -77.39628,
      'abbr': 'BS'
   },
   'Bhutan': {
      'lat': 27.514162,
      'lon': 90.4336,
      'abbr': 'BT'
   },
   'Botswana': {
      'lat': -22.328474,
      'lon': 24.684866,
      'abbr': 'BW'
   },
   'Belarus': {
      'lat': 53.70981,
      'lon': 27.953388,
      'abbr': 'BY'
   },
   'Belize': {
      'lat': 17.189877,
      'lon': -88.49765,
      'abbr': 'BZ'
   },
   'Canada': {
      'lat': 56.130367,
      'lon': -106.34677,
      'abbr': 'CA'
   },
   'Democratic Republic of the Congo': {
      'lat': -4.038333,
      'lon': 21.758663,
      'abbr': 'CD'
   },
   'Central African Republic': {
      'lat': 6.611111,
      'lon': 20.939444,
      'abbr': 'CF'
   },
   'Republic of the Congo': {
      'lat': -0.228021,
      'lon': 15.827659,
      'abbr': 'CG'
   },
   'Switzerland': {
      'lat': 46.818188,
      'lon': 8.227512,
      'abbr': 'CH'
   },
   'Ivory Coast': {
      'lat': 7.539989,
      'lon': -5.54708,
      'abbr': 'CI'
   },
   'Chile': {
      'lat': -35.675148,
      'lon': -71.54297,
      'abbr': 'CL'
   },
   'Cameroon': {
      'lat': 7.369722,
      'lon': 12.354722,
      'abbr': 'CM'
   },
   'China': {
      'lat': 35.86166,
      'lon': 104.1954,
      'abbr': 'CN'
   },
   'Colombia': {
      'lat': 4.570868,
      'lon': -74.29733,
      'abbr': 'CO'
   },
   'Costa Rica': {
      'lat': 9.748917,
      'lon': -83.753426,
      'abbr': 'CR'
   },
   'Cuba': {
      'lat': 21.521757,
      'lon': -77.781166,
      'abbr': 'CU'
   },
   'Cape Verde': {
      'lat': 16.002083,
      'lon': -24.013197,
      'abbr': 'CV'
   },
   'Cyprus': {
      'lat': 35.12641,
      'lon': 33.42986,
      'abbr': 'CY'
   },
   'Czech Republic': {
      'lat': 49.817493,
      'lon': 15.472962,
      'abbr': 'CZ'
   },
   'Germany': {
      'lat': 51.16569,
      'lon': 10.451526,
      'abbr': 'DE'
   },
   'Djibouti': {
      'lat': 11.825138,
      'lon': 42.590275,
      'abbr': 'DJ'
   },
   'Denmark': {
      'lat': 56.26392,
      'lon': 9.501785,
      'abbr': 'DK'
   },
   'Dominica': {
      'lat': 15.414999,
      'lon': -61.370975,
      'abbr': 'DM'
   },
   'Dominican Republic': {
      'lat': 18.735693,
      'lon': -70.16265,
      'abbr': 'DO'
   },
   'Algeria': {
      'lat': 28.033886,
      'lon': 1.659626,
      'abbr': 'DZ'
   },
   'Ecuador': {
      'lat': -1.831239,
      'lon': -78.1834,
      'abbr': 'EC'
   },
   'Estonia': {
      'lat': 58.595272,
      'lon': 25.013607,
      'abbr': 'EE'
   },
   'Egypt': {
      'lat': 26.820553,
      'lon': 30.802498,
      'abbr': 'EG'
   },
   'Eritrea': {
      'lat': 15.179384,
      'lon': 39.782333,
      'abbr': 'ER'
   },
   'Spain': {
      'lat': 40.46367,
      'lon': -3.74922,
      'abbr': 'ES'
   },
   'Ethiopia': {
      'lat': 9.145,
      'lon': 40.489674,
      'abbr': 'ET'
   },
   'Finland': {
      'lat': 61.92411,
      'lon': 25.748152,
      'abbr': 'FI'
   },
   'Fiji': {
      'lat': -16.578194,
      'lon': 179.41441,
      'abbr': 'FJ'
   },
   'Falkland Islands': {
      'lat': -51.796253,
      'lon': -59.523613,
      'abbr': 'FK'
   },
   'Micronesia': {
      'lat': 7.425554,
      'lon': 150.55081,
      'abbr': 'FM'
   },
   'France': {
      'lat': 46.22764,
      'lon': 2.213749,
      'abbr': 'FR'
   },
   'Gabon': {
      'lat': -0.803689,
      'lon': 11.609444,
      'abbr': 'GA'
   },
   'United Kingdom': {
      'lat': 55.37805,
      'lon': -3.435973,
      'abbr': 'GB'
   },
   'Grenada': {
      'lat': 12.262776,
      'lon': -61.60417,
      'abbr': 'GD'
   },
   'Georgia': {
      'lat': 42.315407,
      'lon': 43.35689,
      'abbr': 'GE'
   },
   'Ghana': {
      'lat': 7.946527,
      'lon': -1.023194,
      'abbr': 'GH'
   },
   'Greenland': {
      'lat': 71.70694,
      'lon': -42.6043,
      'abbr': 'GL'
   },
   'Gambia': {
      'lat': 13.443182,
      'lon': -15.310139,
      'abbr': 'GM'
   },
   'Guinea': {
      'lat': 9.945587,
      'lon': -9.696645,
      'abbr': 'GN'
   },
   'Equatorial Guinea': {
      'lat': 1.650801,
      'lon': 10.267895,
      'abbr': 'GQ'
   },
   'Greece': {
      'lat': 39.074207,
      'lon': 21.824312,
      'abbr': 'GR'
   },
   'Guatemala': {
      'lat': 15.783471,
      'lon': -90.23076,
      'abbr': 'GT'
   },
   'Guinea-Bissau': {
      'lat': 11.803749,
      'lon': -15.180413,
      'abbr': 'GW'
   },
   'Guyana': {
      'lat': 4.860416,
      'lon': -58.93018,
      'abbr': 'GY'
   },
   'Honduras': {
      'lat': 15.199999,
      'lon': -86.241905,
      'abbr': 'HN'
   },
   'Croatia': {
      'lat': 45.1,
      'lon': 15.2,
      'abbr': 'HR'
   },
   'Haiti': {
      'lat': 18.971188,
      'lon': -72.28522,
      'abbr': 'HT'
   },
   'Hungary': {
      'lat': 47.162495,
      'lon': 19.503304,
      'abbr': 'HU'
   },
   'Indonesia': {
      'lat': -0.789275,
      'lon': 113.921326,
      'abbr': 'ID'
   },
   'Ireland': {
      'lat': 53.41291,
      'lon': -8.24389,
      'abbr': 'IE'
   },
   'Israel': {
      'lat': 31.046051,
      'lon': 34.851612,
      'abbr': 'IL'
   },
   'India': {
      'lat': 20.593683,
      'lon': 78.96288,
      'abbr': 'IN'
   },
   'Iraq': {
      'lat': 33.22319,
      'lon': 43.67929,
      'abbr': 'IQ'
   },
   'Iran': {
      'lat': 32.42791,
      'lon': 53.688046,
      'abbr': 'IR'
   },
   'Iceland': {
      'lat': 64.96305,
      'lon': -19.020836,
      'abbr': 'IS'
   },
   'Italy': {
      'lat': 41.87194,
      'lon': 12.56738,
      'abbr': 'IT'
   },
   'Jamaica': {
      'lat': 18.109581,
      'lon': -77.29751,
      'abbr': 'JM'
   },
   'Jordan': {
      'lat': 30.585163,
      'lon': 36.238415,
      'abbr': 'JO'
   },
   'Japan': {
      'lat': 36.204823,
      'lon': 138.25293,
      'abbr': 'JP'
   },
   'Kenya': {
      'lat': -0.023559,
      'lon': 37.906193,
      'abbr': 'KE'
   },
   'Kyrgyzstan': {
      'lat': 41.20438,
      'lon': 74.7661,
      'abbr': 'KG'
   },
   'Cambodia': {
      'lat': 12.565679,
      'lon': 104.99097,
      'abbr': 'KH'
   },
   'Kiribati': {
      'lat': -3.370417,
      'lon': -168.73404,
      'abbr': 'KI'
   },
   'Comoros': {
      'lat': -11.875001,
      'lon': 43.87222,
      'abbr': 'KM'
   },
   'Saint Kitts and Nevis': {
      'lat': 17.357822,
      'lon': -62.782997,
      'abbr': 'KN'
   },
   'North Korea': {
      'lat': 40.33985,
      'lon': 127.51009,
      'abbr': 'KP'
   },
   'South Korea': {
      'lat': 35.907757,
      'lon': 127.76692,
      'abbr': 'KR'
   },
   'Kuwait': {
      'lat': 29.31166,
      'lon': 47.481766,
      'abbr': 'KW'
   },
   'Kazakhstan': {
      'lat': 48.019573,
      'lon': 66.92368,
      'abbr': 'KZ'
   },
   'Laos': {
      'lat': 19.85627,
      'lon': 102.4955,
      'abbr': 'LA'
   },
   'Lebanon': {
      'lat': 33.85472,
      'lon': 35.862286,
      'abbr': 'LB'
   },
   'Saint Lucia': {
      'lat': 13.909444,
      'lon': -60.978893,
      'abbr': 'LC'
   },
   'Liechtenstein': {
      'lat': 47.166,
      'lon': 9.555373,
      'abbr': 'LI'
   },
   'Sri Lanka': {
      'lat': 7.873054,
      'lon': 80.7718,
      'abbr': 'LK'
   },
   'Liberia': {
      'lat': 6.428055,
      'lon': -9.429499,
      'abbr': 'LR'
   },
   'Lesotho': {
      'lat': -29.609987,
      'lon': 28.233608,
      'abbr': 'LS'
   },
   'Lithuania': {
      'lat': 55.169437,
      'lon': 23.881275,
      'abbr': 'LT'
   },
   'Luxembourg': {
      'lat': 49.815273,
      'lon': 6.129583,
      'abbr': 'LU'
   },
   'Latvia': {
      'lat': 56.879635,
      'lon': 24.60319,
      'abbr': 'LV'
   },
   'Libya': {
      'lat': 26.3351,
      'lon': 17.22833,
      'abbr': 'LY'
   },
   'Morocco': {
      'lat': 31.791702,
      'lon': -7.09262,
      'abbr': 'MA'
   },
   'Monaco': {
      'lat': 43.750298,
      'lon': 7.412841,
      'abbr': 'MC'
   },
   'Moldova': {
      'lat': 47.411633,
      'lon': 28.369884,
      'abbr': 'MD'
   },
   'Montenegro': {
      'lat': 42.70868,
      'lon': 19.37439,
      'abbr': 'ME'
   },
   'Madagascar': {
      'lat': -18.766947,
      'lon': 46.869106,
      'abbr': 'MG'
   },
   'Marshall Islands': {
      'lat': 7.131474,
      'lon': 171.18448,
      'abbr': 'MH'
   },
   'North Macedonia': {
      'lat': 41.608635,
      'lon': 21.745275,
      'abbr': 'MK'
   },
   'Mali': {
      'lat': 17.570692,
      'lon': -3.996166,
      'abbr': 'ML'
   },
   'Myanmar': {
      'lat': 21.913965,
      'lon': 95.95622,
      'abbr': 'MM'
   },
   'Mongolia': {
      'lat': 46.862495,
      'lon': 103.84666,
      'abbr': 'MN'
   },
   'Mauritania': {
      'lat': 21.00789,
      'lon': -10.940835,
      'abbr': 'MR'
   },
   'Malta': {
      'lat': 35.937496,
      'lon': 14.375416,
      'abbr': 'MT'
   },
   'Mauritius': {
      'lat': -20.348404,
      'lon': 57.55215,
      'abbr': 'MU'
   },
   'Maldives': {
      'lat': 3.202778,
      'lon': 73.22068,
      'abbr': 'MV'
   },
   'Malawi': {
      'lat': -13.254308,
      'lon': 34.301525,
      'abbr': 'MW'
   },
   'Mexico': {
      'lat': 23.6345,
      'lon': -102.55279,
      'abbr': 'MX'
   },
   'Malaysia': {
      'lat': 4.210484,
      'lon': 101.97577,
      'abbr': 'MY'
   },
   'Mozambique': {
      'lat': -18.665695,
      'lon': 35.529564,
      'abbr': 'MZ'
   },
   'Namibia': {
      'lat': -22.95764,
      'lon': 18.49041,
      'abbr': 'NA'
   },
   'New Caledonia': {
      'lat': -20.904305,
      'lon': 165.61804,
      'abbr': 'NC'
   },
   'Niger': {
      'lat': 17.607788,
      'lon': 8.081666,
      'abbr': 'NE'
   },
   'Nigeria': {
      'lat': 9.081999,
      'lon': 8.675277,
      'abbr': 'NG'
   },
   'Nicaragua': {
      'lat': 12.865416,
      'lon': -85.20723,
      'abbr': 'NI'
   },
   'Netherlands': {
      'lat': 52.132633,
      'lon': 5.291266,
      'abbr': 'NL'
   },
   'Norway': {
      'lat': 60.472023,
      'lon': 8.468946,
      'abbr': 'NO'
   },
   'Nepal': {
      'lat': 28.394857,
      'lon': 84.12401,
      'abbr': 'NP'
   },
   'Nauru': {
      'lat': -0.522778,
      'lon': 166.9315,
      'abbr': 'NR'
   },
   'New Zealand': {
      'lat': -40.90056,
      'lon': 174.88597,
      'abbr': 'NZ'
   },
   'Oman': {
      'lat': 21.512583,
      'lon': 55.923256,
      'abbr': 'OM'
   },
   'Panama': {
      'lat': 8.537981,
      'lon': -80.78213,
      'abbr': 'PA'
   },
   'Peru': {
      'lat': -9.189967,
      'lon': -75.01515,
      'abbr': 'PE'
   },
   'Papua New Guinea': {
      'lat': -6.314993,
      'lon': 143.95555,
      'abbr': 'PG'
   },
   'Philippines': {
      'lat': 12.879721,
      'lon': 121.77402,
      'abbr': 'PH'
   },
   'Pakistan': {
      'lat': 30.37532,
      'lon': 69.345116,
      'abbr': 'PK'
   },
   'Poland': {
      'lat': 51.919437,
      'lon': 19.145136,
      'abbr': 'PL'
   },
   'Puerto Rico': {
      'lat': 18.220833,
      'lon': -66.59015,
      'abbr': 'PR'
   },
   'Palestine': {
      'lat': 31.952162,
      'lon': 35.233154,
      'abbr': 'PS'
   },
   'Portugal': {
      'lat': 39.39987,
      'lon': -8.224454,
      'abbr': 'PT'
   },
   'Palau': {
      'lat': 7.51498,
      'lon': 134.58252,
      'abbr': 'PW'
   },
   'Paraguay': {
      'lat': -23.442503,
      'lon': -58.443832,
      'abbr': 'PY'
   },
   'Qatar': {
      'lat': 25.354826,
      'lon': 51.183884,
      'abbr': 'QA'
   },
   'Romania': {
      'lat': 45.94316,
      'lon': 24.96676,
      'abbr': 'RO'
   },
   'Serbia': {
      'lat': 44.01652,
      'lon': 21.00586,
      'abbr': 'RS'
   },
   'Russia': {
      'lat': 61.52401,
      'lon': 105.318756,
      'abbr': 'RU'
   },
   'Rwanda': {
      'lat': -1.940278,
      'lon': 29.873888,
      'abbr': 'RW'
   },
   'Saudi Arabia': {
      'lat': 23.885942,
      'lon': 45.079163,
      'abbr': 'SA'
   },
   'Solomon Islands': {
      'lat': -9.64571,
      'lon': 160.15619,
      'abbr': 'SB'
   },
   'Seychelles': {
      'lat': -4.679574,
      'lon': 55.491978,
      'abbr': 'SC'
   },
   'Sudan': {
      'lat': 12.862807,
      'lon': 30.217636,
      'abbr': 'SD'
   },
   'South Sudan': {
      'lat': 7.7660983,
      'lon': 20.6491937,
      'abbr': 'SD'
   },
   'Sweden': {
      'lat': 60.128162,
      'lon': 18.643501,
      'abbr': 'SE'
   },
   'Singapore': {
      'lat': 1.352083,
      'lon': 103.81984,
      'abbr': 'SG'
   },
   'Slovenia': {
      'lat': 46.15124,
      'lon': 14.995463,
      'abbr': 'SI'
   },
   'Slovakia': {
      'lat': 48.669025,
      'lon': 19.699024,
      'abbr': 'SK'
   },
   'Sierra Leone': {
      'lat': 8.460555,
      'lon': -11.779889,
      'abbr': 'SL'
   },
   'San Marino': {
      'lat': 43.94236,
      'lon': 12.457777,
      'abbr': 'SM'
   },
   'Senegal': {
      'lat': 14.497401,
      'lon': -14.452362,
      'abbr': 'SN'
   },
   'Somalia': {
      'lat': 5.152149,
      'lon': 46.199615,
      'abbr': 'SO'
   },
   'Suriname': {
      'lat': 3.919305,
      'lon': -56.027782,
      'abbr': 'SR'
   },
   'Sao Tome and Príncipe': {
      'lat': 0.18636,
      'lon': 6.613081,
      'abbr': 'ST'
   },
   'El Salvador': {
      'lat': 13.794185,
      'lon': -88.89653,
      'abbr': 'SV'
   },
   'Syria': {
      'lat': 34.802074,
      'lon': 38.996815,
      'abbr': 'SY'
   },
   'Swaziland': {
      'lat': -26.522503,
      'lon': 31.465866,
      'abbr': 'SZ'
   },
   'Chad': {
      'lat': 15.454166,
      'lon': 18.732206,
      'abbr': 'TD'
   },
   'Togo': {
      'lat': 8.619543,
      'lon': 0.824782,
      'abbr': 'TG'
   },
   'Thailand': {
      'lat': 15.870032,
      'lon': 100.99254,
      'abbr': 'TH'
   },
   'Tajikistan': {
      'lat': 38.861034,
      'lon': 71.27609,
      'abbr': 'TJ'
   },
   'Timor-Leste': {
      'lat': -8.874217,
      'lon': 125.72754,
      'abbr': 'TL'
   },
   'Turkmenistan': {
      'lat': 38.96972,
      'lon': 59.55628,
      'abbr': 'TM'
   },
   'Tunisia': {
      'lat': 33.886917,
      'lon': 9.537499,
      'abbr': 'TN'
   },
   'Tonga': {
      'lat': -21.178986,
      'lon': -175.19824,
      'abbr': 'TO'
   },
   'Turkey': {
      'lat': 38.963745,
      'lon': 35.24332,
      'abbr': 'TR'
   },
   'Trinidad and Tobago': {
      'lat': 10.691803,
      'lon': -61.222504,
      'abbr': 'TT'
   },
   'Tuvalu': {
      'lat': -7.109535,
      'lon': 177.64932,
      'abbr': 'TV'
   },
   'Taiwan': {
      'lat': 23.69781,
      'lon': 120.96052,
      'abbr': 'TW'
   },
   'Tanzania': {
      'lat': -6.369028,
      'lon': 34.88882,
      'abbr': 'TZ'
   },
   'Ukraine': {
      'lat': 48.379433,
      'lon': 31.16558,
      'abbr': 'UA'
   },
   'Uganda': {
      'lat': 1.373333,
      'lon': 32.290276,
      'abbr': 'UG'
   },
   'United States': {
      'lat': 37.09024,
      'lon': -95.71289,
      'abbr': 'US'
   },
   'Uruguay': {
      'lat': -32.522778,
      'lon': -55.765835,
      'abbr': 'UY'
   },
   'Uzbekistan': {
      'lat': 41.37749,
      'lon': 64.58526,
      'abbr': 'UZ'
   },
   'Holy See': {
      'lat': 41.902916,
      'lon': 12.453389,
      'abbr': 'VA'
   },
   'Saint Vincent and the Grenadines': {
      'lat': 12.984305,
      'lon': -61.287228,
      'abbr': 'VC'
   },
   'Venezuela': {
      'lat': 6.42375,
      'lon': -66.58973,
      'abbr': 'VE'
   },
   'Vietnam': {
      'lat': 14.058324,
      'lon': 108.2772,
      'abbr': 'VN'
   },
   'Vanuatu': {
      'lat': -15.376706,
      'lon': 166.95915,
      'abbr': 'VU'
   },
   'Samoa': {
      'lat': -13.759029,
      'lon': -172.10463,
      'abbr': 'WS'
   },
   'Kosovo': {
      'lat': 42.602634,
      'lon': 20.902977,
      'abbr': 'XK'
   },
   'Yemen': {
      'lat': 15.552727,
      'lon': 48.516388,
      'abbr': 'YE'
   },
   'South Africa': {
      'lat': -30.559483,
      'lon': 22.937506,
      'abbr': 'ZA'
   },
   'Zambia': {
      'lat': -13.133897,
      'lon': 27.849333,
      'abbr': 'ZM'
   },
   'Zimbabwe': {
      'lat': -19.015438,
      'lon': 29.154858,
      'abbr': 'ZW'
   }
};
let country_guesses = [];
let countries_count = Object.keys(countries).length;
let country_keys = Object.keys(countries);
let map;
let count = 0;
let country_markers = [];
let total_time = 600000; //10 minute timer
let timer_count = total_time;
let timer;
let game_timer;
//see if the user input matches with any the countries, as user's typing; non case-sensitive
function checkIfCountry(){
  let guess_input = document.getElementById('guess').value;
  let keys_check = [];
  for(let i = 0; i < country_keys.length; i++){
    keys_check.push(country_keys[i].trim().split(" ").join("").toLowerCase());
  }
  let guess_string = guess_input.trim().split(" ").join("").toLowerCase();
  if(keys_check.includes(guess_string) === true && !country_guesses.includes(guess_string)){ 
    country_guesses.push(guess_string);
    let country_pos = keys_check.indexOf(guess_string);
    let country_name = country_keys[country_pos];
    var marker = new google.maps.Marker({
      position: {lat: countries[country_name]['lat'], lng: countries[country_name]['lon']},
      map: map,
      title: country_name
    });
    country_markers.push(marker);
    document.getElementById('guess').value = '';
    count++;
    if(count === countries_count){
      clearTimeout(game_timer);
      endGame();
    }else{
      document.getElementById('guess_score').innerHTML = count + '/' + countries_count;
    }
  }
}
//show user time they have left
function updateTimer(){
  let time_text = formatTime(timer_count);
  document.getElementById('timer').innerHTML = time_text;
  timer_count -= 1000;
}
//convert milliseconds time to 00:00 string format
function formatTime(time){
  let minutes = Math.floor(time / 60000);
  let seconds = (time - (minutes * 60000)) / 1000;
  let time_text = "";
  if(minutes === 0){
    time_text = seconds + "s";
  }else{
    if(minutes < 10){
      minutes = "0" + minutes;
    }
    if(seconds < 10){
      seconds = "0" + seconds;
    }
    time_text = minutes + ":" + seconds;
  }
  return time_text;
}
//called once 10 min elapsed or all countries named, tell them their score and ask them if they want to restart
function endGame(){
  clearInterval(timer);
  let time_to_complete = total_time - timer_count;  
  document.getElementById('timer').style.display = 'none';
  document.getElementById('start_button').style.display = 'block';
  document.getElementById('end_button').style.display = 'none';
  document.getElementById('instruct_text').style.display = 'block';
  let country_score = country_markers.length;
  let instruct_text = document.getElementById('instruct_text');
  if(country_score === countries_count){
    instruct_text.innerHTML = 'Congrats!!! You named all ' + countries_count 
    + ' countries in ' + formatTime(time_to_complete) + '! ';
  }
  if(country_score > 0){
    instruct_text.innerHTML = 'Not bad! you got ' + country_score + '/' + countries_count + 
    ' in ' + formatTime(time_to_complete) + '. ';
  }
  if(country_score === 0){
    instruct_text.innerHTML = 'I think you may have been on another tab. ';
  }
  instruct_text.innerHTML = instruct_text.innerHTML + " Do you wish to play another round?";
  document.getElementById('game_text').style.display = 'none';
  document.getElementById('guess').style.display = 'none';
  document.getElementById('guess_score').style.display = 'none';
  clearAllMarkers();
  document.getElementById('map').style.display = 'none';
}
//prevent map markers from appearing should user restarts
function clearAllMarkers(){
  for(let i = 0; i < country_markers.length; i++){
    country_markers[i].setMap(null);
  }
  country_markers = [];
}
//set up ui for user to start typing countries
function startGame(){
  count = 0;
  timer_count = total_time;
  document.getElementById('timer').style.display = 'block';
  game_timer = setTimeout(endGame, total_time); 
  timer = setInterval(updateTimer, 1000);
  document.getElementById('start_button').style.display = 'none';
  document.getElementById('end_button').style.display = 'block';
  document.getElementById('instruct_text').style.display = 'none';
  document.getElementById('game_text').style.display = 'block';
  document.getElementById('guess').style.display = 'block';
  document.getElementById('guess_score').style.display = 'block';
  document.getElementById('map').style.display = 'block';
  document.getElementById('guess_score').innerHTML = '0/' + countries_count;
  document.getElementById('guess').addEventListener('keyup', checkIfCountry);
}
//create the google maps, removing labels and streetview to prevent answers
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 0, lng: 0},
    zoom: 1,
    streetViewControl: false,
    styles: [
      {
        featureType: 'all',
        elementType: 'labels',
        stylers: [{visibility: 'off'}]
      }
    ]
  });
}
