// Interactive Leaflet Map Script for AirNet India

// Legacy simple map (kept for backward compat)
function initAirNetMap(lat, lng, title, location) {
    const mapElement = document.getElementById('map');
    if (!mapElement) return;
    const latitude  = (lat  && !isNaN(lat)  && lat  !== 0) ? lat  : 15.4909;
    const longitude = (lng  && !isNaN(lng)  && lng  !== 0) ? lng  : 73.8278;
    const map = L.map('map').setView([latitude, longitude], 14);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    addPropertyPin(map, latitude, longitude, title, location);
}

// Full Map with Transit Proximity Markers
function initAirNetMapFull(lat, lng, title, location) {
    const mapElement = document.getElementById('map');
    if (!mapElement) return;

    const latitude  = (lat  && !isNaN(lat)  && lat  !== 0) ? lat  : 20.5937;
    const longitude = (lng  && !isNaN(lng)  && lng  !== 0) ? lng  : 78.9629;

    const map = L.map('map', {
        center: [latitude, longitude],
        zoom: 14,
        scrollWheelZoom: false,    // Prevent scroll hijack on show page
        zoomControl: true
    });

    // OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // ─── 1. PROPERTY MAIN PIN ───────────────────────────
    addPropertyPin(map, latitude, longitude, title, location);

    // ─── 2. TRANSIT PROXIMITY MARKERS ───────────────────
    // Simulated offsets to show transit options around property
    const transitPoints = [
        {
            offset: [0.029, -0.008],  // ~3.2 km south-west for railway
            color: '#16A34A',
            iconClass: 'fa-train',
            label: 'Railway Station',
            name: 'City Railway Station',
            distance: '~3.2 km · ~10 min by taxi',
            badgeColor: '#16A34A'
        },
        {
            offset: [0.007, 0.003],   // ~0.8 km north-east for bus stop
            color: '#D97706',
            iconClass: 'fa-bus',
            label: 'Bus Stop',
            name: 'Central Bus Stop',
            distance: '~0.8 km · ~5 min walk',
            badgeColor: '#D97706'
        },
        {
            offset: [0.12, 0.045],   // ~14.5 km north-east for airport
            color: '#2563EB',
            iconClass: 'fa-plane-up',
            label: 'Airport',
            name: 'International Airport',
            distance: '~14.5 km · ~25–35 min by taxi',
            badgeColor: '#2563EB'
        },
        {
            offset: [0.013, -0.003], // ~1.5 km north for metro
            color: '#0F172A',
            iconClass: 'fa-train-subway',
            label: 'Metro',
            name: 'Metro Station',
            distance: '~1.5 km · ~8 min by e-rickshaw',
            badgeColor: '#0F172A'
        }
    ];

    transitPoints.forEach(function (tp) {
        const tLat = latitude  + tp.offset[0];
        const tLng = longitude + tp.offset[1];

        const transitIcon = L.divIcon({
            className: '',
            html: `<div style="
                background: ${tp.color};
                color: white;
                padding: 6px 10px;
                border-radius: 20px;
                font-weight: 700;
                font-size: 11px;
                box-shadow: 0 3px 10px rgba(0,0,0,0.25);
                display: inline-flex;
                align-items: center;
                gap: 5px;
                border: 2px solid white;
                white-space: nowrap;
            ">
                <i class="fa-solid ${tp.iconClass}" style="font-size:12px;"></i> ${tp.label}
            </div>`,
            iconSize: [120, 30],
            iconAnchor: [60, 15]
        });

        const transitMarker = L.marker([tLat, tLng], { icon: transitIcon }).addTo(map);

        transitMarker.bindPopup(`
            <div style="font-family:'Plus Jakarta Sans',sans-serif; padding:4px; min-width:180px;">
                <span style="background:${tp.badgeColor}; color:white; font-size:9px; font-weight:700; padding:2px 8px; border-radius:12px; display:inline-block; margin-bottom:6px;">${tp.label.toUpperCase()}</span>
                <h6 style="margin:0 0 4px 0; font-weight:800; color:#0F172A; font-size:13px;">${tp.name}</h6>
                <p style="margin:0; font-size:12px; color:#64748B;">
                    <i class="fa-solid fa-route" style="color:${tp.badgeColor}; margin-right:4px;"></i>${tp.distance}
                </p>
            </div>
        `);

        // Draw a dashed line from property to transit point
        const polyline = L.polyline(
            [[latitude, longitude], [tLat, tLng]],
            {
                color: tp.color,
                weight: 2,
                opacity: 0.5,
                dashArray: '6, 6'
            }
        ).addTo(map);
    });

    // Fit map to show all markers with padding
    const allPoints = [[latitude, longitude], ...transitPoints.map(tp => [latitude + tp.offset[0], longitude + tp.offset[1]])];
    // Keep zoom reasonable: don't zoom out too much for airport (which is far)
    // Instead fit bounds but cap zoom
    const bounds = L.latLngBounds(allPoints.filter((p, i) => i !== 3)); // exclude airport from initial fit
    map.fitBounds(bounds, { padding: [30, 30], maxZoom: 15 });
}

// Shared helper: add property main marker
function addPropertyPin(map, latitude, longitude, title, location) {
    const customIcon = L.divIcon({
        className: '',
        html: `<div style="
            background: linear-gradient(135deg, #E11D48 0%, #BE123C 100%);
            color: white;
            padding: 8px 14px;
            border-radius: 24px;
            font-weight: 800;
            font-size: 12px;
            box-shadow: 0 4px 16px rgba(225,29,72,0.45);
            display: inline-flex;
            align-items: center;
            gap: 6px;
            border: 2.5px solid white;
            white-space: nowrap;
        ">
            <i class="fa-solid fa-hotel" style="font-size:13px;"></i>
            ${title ? (title.length > 22 ? title.substring(0, 22) + '…' : title) : 'AirNet Stay'}
        </div>`,
        iconSize: [160, 36],
        iconAnchor: [80, 18]
    });

    const marker = L.marker([latitude, longitude], { icon: customIcon }).addTo(map);

    marker.bindPopup(`
        <div style="font-family:'Plus Jakarta Sans',sans-serif; padding:6px; min-width:180px;">
            <span style="background:#E11D48; color:white; font-size:10px; font-weight:700; padding:3px 10px; border-radius:12px; display:inline-block; margin-bottom:6px;">AirNet Verified Stay</span>
            <h6 style="margin:2px 0 4px 0; font-weight:800; color:#0F172A;">${title || 'Property'}</h6>
            <p style="margin:0; font-size:12px; color:#64748B;">
                <i class="fa-solid fa-location-dot" style="color:#E11D48; margin-right:4px;"></i>${location || ''}
            </p>
        </div>
    `).openPopup();
}
