document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');
    const canvas = document.getElementById('donationChart');
    if (!canvas) {
        console.error('Canvas element not found');
        return;
    }
    console.log('Canvas element found');

    const ctx = canvas.getContext('2d');
    if (!ctx) {
        console.error('Unable to get 2D context from canvas');
        return;
    }
    console.log('2D context obtained');

    try {
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['M-Pesa (KES)', 'PayPal (USD & KES)', 'Credit/Debit Cards (USD & KES)'],
                datasets: [{
                    label: 'Donation Totals',
                    data: [600000, 400000, 285000],
                    backgroundColor: [
                        '#ffbd00', 
                        '#ff0054', 
                        '#9e0059' 
                    ],
                    borderWidth: 0,
                    borderRadius: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                let label = context.dataset.label || '';
                                if (label) {
                                    label += ': ';
                                }
                                if (context.parsed.y !== null) {
                                    label += 'KES ' + context.parsed.y.toLocaleString();
                                }
                                return label;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return 'KES ' + value.toLocaleString();
                            }
                        },
                        grid: {
                            color: '#e0e0e0'
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
        console.log('Chart created successfully');
    } catch (error) {
        console.error('Error creating chart:', error);
    }
});