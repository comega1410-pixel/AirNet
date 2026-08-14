// AirNet Client-Side JS Interactive Script

document.addEventListener('DOMContentLoaded', () => {
    // 1. Bootstrap Form Validation Trigger
    const forms = document.querySelectorAll('.needs-validation');
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });

    // 2. Tax Display Toggle Switch on Index Page
    const taxSwitch = document.getElementById('flexSwitchCheckDefault');
    if (taxSwitch) {
        taxSwitch.addEventListener('change', () => {
            const taxInfoElements = document.querySelectorAll('.tax-info');
            taxInfoElements.forEach(info => {
                info.style.display = taxSwitch.checked ? 'inline' : 'none';
            });
        });
    }

    // 3. Interactive Favorite Heart Buttons
    const heartBtns = document.querySelectorAll('.fav-heart-btn');
    heartBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            btn.classList.toggle('liked');
            const icon = btn.querySelector('i');
            if (btn.classList.contains('liked')) {
                icon.className = 'fa-solid fa-heart text-danger';
            } else {
                icon.className = 'fa-regular fa-heart';
            }
        });
    });

    // 4. Airbnb-Style Global Currency Conversion Engine
    const currencyRates = {
        INR: { symbol: '₹', rate: 1.0 },
        USD: { symbol: '$', rate: 0.012 },
        EUR: { symbol: '€', rate: 0.011 },
        GBP: { symbol: '£', rate: 0.0094 },
        AUD: { symbol: '$', rate: 0.018 },
        CAD: { symbol: '$', rate: 0.016 },
        AED: { symbol: 'د.إ', rate: 0.044 },
        CNY: { symbol: '¥', rate: 0.086 },
        JPY: { symbol: '¥', rate: 1.78 },
        CHF: { symbol: 'CHF', rate: 0.0104 },
        SGD: { symbol: '$', rate: 0.016 },
        THB: { symbol: '฿', rate: 0.42 },
        BRL: { symbol: 'R$', rate: 0.067 },
        QAR: { symbol: 'ر.ق', rate: 0.044 },
        SAR: { symbol: 'SR', rate: 0.045 },
        KRW: { symbol: '₩', rate: 16.2 },
        RUB: { symbol: '₽', rate: 1.08 },
        TRY: { symbol: '₺', rate: 0.40 },
        NZD: { symbol: '$', rate: 0.020 },
        HKD: { symbol: '$', rate: 0.094 }
    };

    function getSavedCurrency() {
        const saved = localStorage.getItem('airnet_currency');
        if (saved) {
            try {
                return JSON.parse(saved);
            } catch (e) {
                return currencyRates.INR;
            }
        }
        return { code: 'INR', symbol: '₹', rate: 1.0 };
    }

    function applyCurrency(curr) {
        localStorage.setItem('airnet_currency', JSON.stringify(curr));

        // Update labels across navbar and footer
        const labels = document.querySelectorAll('.active-currency-label');
        labels.forEach(lbl => {
            lbl.textContent = `${curr.code} (${curr.symbol})`;
        });

        // Update currency modal active card state
        const itemCards = document.querySelectorAll('.currency-item-card');
        itemCards.forEach(card => {
            if (card.getAttribute('data-code') === curr.code) {
                card.classList.add('border-dark', 'bg-light', 'fw-bold');
            } else {
                card.classList.remove('border-dark', 'bg-light', 'fw-bold');
            }
        });

        // Re-convert listing card prices
        const priceRows = document.querySelectorAll('.card-price-row[data-inr-price]');
        priceRows.forEach(row => {
            const inrPrice = parseFloat(row.getAttribute('data-inr-price') || '0');
            const convertedBase = Math.round(inrPrice * curr.rate);
            const convertedTax = Math.round(inrPrice * 1.18 * curr.rate);

            const symElem = row.querySelector('.currency-symbol');
            const baseValElem = row.querySelector('.base-price-val');
            const taxSymElem = row.querySelector('.tax-symbol');
            const taxValElem = row.querySelector('.tax-total-val');

            if (symElem) symElem.textContent = curr.symbol + ' ';
            if (baseValElem) baseValElem.textContent = convertedBase.toLocaleString();
            if (taxSymElem) taxSymElem.textContent = curr.symbol + ' ';
            if (taxValElem) taxValElem.textContent = convertedTax.toLocaleString();
        });
    }

    // Attach click listeners to currency modal cards
    const currencyCards = document.querySelectorAll('.currency-item-card');
    currencyCards.forEach(card => {
        card.addEventListener('click', () => {
            const code = card.getAttribute('data-code');
            const symbol = card.getAttribute('data-symbol');
            const rate = parseFloat(card.getAttribute('data-rate') || '1.0');
            const currObj = { code, symbol, rate };

            applyCurrency(currObj);

            // Close modal using bootstrap API
            const modalElem = document.getElementById('currencyModal');
            if (modalElem) {
                const modal = bootstrap.Modal.getInstance(modalElem);
                if (modal) modal.hide();
            }
        });
    });

    // Apply saved currency on page load
    applyCurrency(getSavedCurrency());

    // 5. State-Dependent City Filter Dropdowns
    const stateCityMap = {
        "Gujarat": ["Surat", "Ahmedabad", "Vadodara", "Gandhinagar", "Jamnagar", "Anand", "Junagadh"],
        "Maharashtra": ["Mumbai", "Pune", "Lonavala", "Nashik"],
        "Delhi NCR": ["Delhi", "Gurugram", "Noida"],
        "Rajasthan": ["Jaipur", "Udaipur", "Jaisalmer"],
        "Goa": ["Goa"],
        "Bihar": ["Patna", "Gaya"],
        "Karnataka": ["Bengaluru", "Coorg"],
        "Kerala": ["Alleppey", "Munnar"],
        "Himachal Pradesh": ["Manali", "Shimla"],
        "Uttarakhand": ["Rishikesh"],
        "Uttar Pradesh": ["Varanasi", "Lucknow", "Agra"]
    };

    function bindDependentStateCity(stateSelectElem, citySelectElem) {
        if (!stateSelectElem || !citySelectElem) return;

        stateSelectElem.addEventListener('change', () => {
            const selectedState = stateSelectElem.value;
            const currentSelectedCity = citySelectElem.value;

            citySelectElem.innerHTML = '';

            if (selectedState && stateCityMap[selectedState]) {
                const defaultOpt = document.createElement('option');
                defaultOpt.value = '';
                defaultOpt.textContent = `All Cities in ${selectedState}`;
                citySelectElem.appendChild(defaultOpt);

                stateCityMap[selectedState].forEach(cityName => {
                    const opt = document.createElement('option');
                    opt.value = cityName;
                    opt.textContent = cityName;
                    if (cityName === currentSelectedCity) opt.selected = true;
                    citySelectElem.appendChild(opt);
                });
            } else {
                const defaultOpt = document.createElement('option');
                defaultOpt.value = '';
                defaultOpt.textContent = 'All Cities';
                citySelectElem.appendChild(defaultOpt);

                Object.keys(stateCityMap).forEach(stateName => {
                    const optgroup = document.createElement('optgroup');
                    optgroup.label = stateName;
                    stateCityMap[stateName].forEach(cityName => {
                        const opt = document.createElement('option');
                        opt.value = cityName;
                        opt.textContent = cityName;
                        if (cityName === currentSelectedCity) opt.selected = true;
                        optgroup.appendChild(opt);
                    });
                    citySelectElem.appendChild(optgroup);
                });
            }
        });
    }

    bindDependentStateCity(document.getElementById('navStateSelect'), document.getElementById('navCitySelect'));
    bindDependentStateCity(document.getElementById('modalStateSelect'), document.getElementById('modalCitySelect'));

    // 6. Booking Total Calculator (on Show Page)
    const checkinInput = document.getElementById('checkinDate');
    const checkoutInput = document.getElementById('checkoutDate');
    const guestSelect = document.getElementById('guestSelect');
    const calcSubtotal = document.getElementById('calcSubtotal');
    const calcTax = document.getElementById('calcTax');
    const calcTotal = document.getElementById('calcTotal');
    const nightCountLabel = document.getElementById('nightCountLabel');

    function updateBookingCalculation() {
        if (!checkinInput || !checkoutInput || !calcSubtotal) return;

        const pricePerNight = parseFloat(document.getElementById('pricePerNightVal')?.value || '0');
        const checkin = new Date(checkinInput.value);
        const checkout = new Date(checkoutInput.value);

        if (checkin && checkout && checkout > checkin) {
            const diffTime = Math.abs(checkout - checkin);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) || 1;
            
            const curr = getSavedCurrency();
            const subtotal = pricePerNight * diffDays * curr.rate;
            const gst = Math.round(subtotal * 0.18);
            const serviceFee = 250 * curr.rate;
            const total = subtotal + gst + serviceFee;

            if (nightCountLabel) nightCountLabel.textContent = `${diffDays} night${diffDays > 1 ? 's' : ''}`;
            if (calcSubtotal) calcSubtotal.textContent = `${curr.symbol}${Math.round(subtotal).toLocaleString()}`;
            if (calcTax) calcTax.textContent = `${curr.symbol}${Math.round(gst).toLocaleString()}`;
            if (calcTotal) calcTotal.textContent = `${curr.symbol}${Math.round(total).toLocaleString()}`;
        }
    }

    if (checkinInput && checkoutInput) {
        checkinInput.addEventListener('change', updateBookingCalculation);
        checkoutInput.addEventListener('change', updateBookingCalculation);
        if (guestSelect) guestSelect.addEventListener('change', updateBookingCalculation);
        updateBookingCalculation();
    }

    // 7. Booking Form Submission via AJAX Modal Popup
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const listingId = document.getElementById('listingIdVal')?.value;
            const checkIn = checkinInput?.value;
            const checkOut = checkoutInput?.value;
            const guests = guestSelect?.value || 2;

            if (!checkIn || !checkOut) {
                alert('Please select both Check-In and Check-Out dates.');
                return;
            }

            try {
                const response = await fetch(`/listings/${listingId}/book`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ checkIn, checkOut, guests })
                });

                const data = await response.json();
                if (data.success) {
                    const curr = getSavedCurrency();
                    const convertedGrandTotal = Math.round(data.grandTotal * curr.rate);
                    const modalTitle = document.getElementById('bookingModalTitle');
                    const modalBody = document.getElementById('bookingModalBody');

                    if (modalTitle) modalTitle.textContent = '🎉 Booking Confirmed!';
                    if (modalBody) {
                        modalBody.innerHTML = `
                            <div class="text-center py-2">
                                <div class="badge bg-success px-3 py-2 rounded-pill fs-6 mb-3">Booking ID: ${data.bookingId}</div>
                                <h5 class="fw-bold text-dark">${data.listingTitle}</h5>
                                <p class="text-muted small mb-3"><i class="fa-solid fa-location-dot text-danger"></i> ${data.location}</p>
                            </div>
                            <div class="bg-light p-3 rounded-4 mb-3">
                                <div class="d-flex justify-content-between mb-2">
                                    <span class="text-muted">Dates:</span>
                                    <span class="fw-bold">${data.checkIn} to ${data.checkOut} (${data.nights} night${data.nights > 1 ? 's' : ''})</span>
                                </div>
                                <div class="d-flex justify-content-between mb-2">
                                    <span class="text-muted">Guests:</span>
                                    <span class="fw-bold">${data.guests} Guest(s)</span>
                                </div>
                                <hr class="my-2">
                                <div class="d-flex justify-content-between fs-5 fw-bold text-danger border-top pt-2">
                                    <span>Grand Total (${curr.code}):</span>
                                    <span>${curr.symbol}${convertedGrandTotal.toLocaleString()}</span>
                                </div>
                            </div>
                            <div class="alert alert-info rounded-3 text-center mb-0 small">
                                <i class="fa-solid fa-circle-check text-success me-1"></i> ${data.message}
                            </div>
                        `;
                    }

                    const bookingModalElem = document.getElementById('bookingModal');
                    if (bookingModalElem) {
                        const modal = new bootstrap.Modal(bookingModalElem);
                        modal.show();
                    }
                } else {
                    alert(data.message || 'Booking failed. Please try again.');
                }
            } catch (err) {
                console.error('Booking error:', err);
                alert('Server error processing booking.');
            }
        });
    }

    // 8. Thumbnail Image Click Preview Switcher
    const mainGalleryHero = document.querySelector('.gallery-img-hero');
    const subGalleryImages = document.querySelectorAll('.gallery-img-sub');
    if (mainGalleryHero && subGalleryImages.length > 0) {
        subGalleryImages.forEach(subImg => {
            subImg.addEventListener('click', () => {
                const tempSrc = mainGalleryHero.src;
                mainGalleryHero.src = subImg.src;
                subImg.src = tempSrc;
            });
        });
    }
});
