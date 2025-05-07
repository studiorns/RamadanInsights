document.addEventListener('DOMContentLoaded', function() {
    "use strict";
    // Create Market Potential Chart
    if (document.getElementById('marketPotentialChart')) {
        const marketPotentialCtx = document.getElementById('marketPotentialChart').getContext('2d');
        
        const marketPotentialData = {
            labels: ['KSA', 'UAE', 'Qatar', 'France', 'Italy', 'UK', 'Germany'],
            datasets: [
                // Line charts first so they appear on top
                {
                    label: 'Ramadan Understanding (%)',
                    data: [100, 95, 94, 12, 9, 5, 4],
                    backgroundColor: 'rgba(251, 188, 4, 0.2)',
                    borderColor: 'rgb(251, 188, 4)',
                    borderWidth: 2,
                    type: 'line',
                    yAxisID: 'y1',
                    order: 1
                },
                {
                    label: 'Consideration for Abu Dhabi (%)',
                    data: [85, 87, 86, 89, 88, 84, 76],
                    backgroundColor: 'rgba(234, 67, 53, 0.2)',
                    borderColor: 'rgb(234, 67, 53)',
                    borderWidth: 2,
                    type: 'line',
                    yAxisID: 'y1',
                    order: 2
                },
                // Bar chart last so it appears behind the lines
                {
                    label: 'Market Potential Score',
                    data: [95, 92, 90, 78, 75, 65, 58],
                    backgroundColor: [
                        'rgba(0, 108, 53, 0.7)',    // KSA - Green
                        'rgba(26, 115, 232, 0.7)',  // UAE - Blue
                        'rgba(141, 27, 61, 0.7)',   // Qatar - Maroon
                        'rgba(0, 85, 164, 0.7)',    // France - Blue
                        'rgba(0, 146, 70, 0.7)',    // Italy - Green
                        'rgba(1, 33, 105, 0.7)',    // UK - Blue
                        'rgba(51, 51, 51, 0.7)'     // Germany - Black
                    ],
                    borderColor: [
                        'rgb(0, 108, 53)',
                        'rgb(26, 115, 232)',
                        'rgb(141, 27, 61)',
                        'rgb(0, 85, 164)',
                        'rgb(0, 146, 70)',
                        'rgb(1, 33, 105)',
                        'rgb(51, 51, 51)'
                    ],
                    borderWidth: 1,
                    order: 3
                }
            ]
        };
        
        const marketPotentialOptions = {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Market Potential Analysis for Ramadan 2026',
                    color: '#e0e0e0',
                    font: {
                        size: 16,
                        weight: 'bold'
                    },
                    padding: {
                        top: 10,
                        bottom: 20
                    }
                },
                legend: {
                    position: 'bottom',
                    labels: {
                        color: '#e0e0e0',
                        padding: 20,
                        usePointStyle: true,
                        pointStyle: 'circle'
                    }
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                    backgroundColor: 'rgba(30, 30, 30, 0.9)',
                    titleColor: '#ffffff',
                    bodyColor: '#e0e0e0',
                    borderColor: '#3d3d3d',
                    borderWidth: 1,
                    padding: 12,
                    displayColors: true,
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed.y !== null) {
                                if (context.dataset.yAxisID === 'y1') {
                                    label += context.parsed.y + '%';
                                } else {
                                    label += context.parsed.y + ' / 100';
                                }
                            }
                            return label;
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: {
                        color: 'rgba(61, 61, 61, 0.3)'
                    },
                    ticks: {
                        color: '#c0c0c0'
                    }
                },
                y: {
                    beginAtZero: true,
                    max: 100,
                    grid: {
                        color: 'rgba(61, 61, 61, 0.3)'
                    },
                    ticks: {
                        color: '#c0c0c0'
                    },
                    title: {
                        display: true,
                        text: 'Market Potential Score (0-100)',
                        color: '#c0c0c0'
                    }
                },
                y1: {
                    beginAtZero: true,
                    max: 100,
                    position: 'right',
                    grid: {
                        drawOnChartArea: false
                    },
                    ticks: {
                        color: '#c0c0c0'
                    },
                    title: {
                        display: true,
                        text: 'Percentage (%)',
                        color: '#c0c0c0'
                    }
                }
            }
        };
        
        new Chart(marketPotentialCtx, {
            type: 'bar',
            data: marketPotentialData,
            options: marketPotentialOptions
        });
    }

    // Create Knowledge Gap Chart if it exists
    if (document.getElementById('knowledgeGapChart')) {
        const knowledgeGapCtx = document.getElementById('knowledgeGapChart').getContext('2d');
        
        const knowledgeGapData = {
            labels: ['KSA', 'UAE', 'Qatar', 'France', 'Italy', 'UK', 'Germany'],
            datasets: [
                {
                    label: 'Deep Understanding',
                    data: [100, 95, 94, 12, 9, 5, 4],
                    backgroundColor: 'rgba(66, 133, 244, 0.7)',
                    borderColor: 'rgb(66, 133, 244)',
                    borderWidth: 1
                },
                {
                    label: 'Basic Knowledge',
                    data: [0, 5, 6, 28, 42, 35, 44],
                    backgroundColor: 'rgba(251, 188, 4, 0.7)',
                    borderColor: 'rgb(251, 188, 4)',
                    borderWidth: 1
                },
                {
                    label: 'Limited/No Knowledge',
                    data: [0, 0, 0, 59, 49, 60, 52],
                    backgroundColor: 'rgba(234, 67, 53, 0.7)',
                    borderColor: 'rgb(234, 67, 53)',
                    borderWidth: 1
                }
            ]
        };
        
        const knowledgeGapOptions = {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Ramadan Knowledge Gap Across Markets',
                    color: '#e0e0e0',
                    font: {
                        size: 16,
                        weight: 'bold'
                    },
                    padding: {
                        top: 10,
                        bottom: 20
                    }
                },
                legend: {
                    position: 'bottom',
                    labels: {
                        color: '#e0e0e0',
                        padding: 20,
                        usePointStyle: true,
                        pointStyle: 'circle'
                    }
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                    backgroundColor: 'rgba(30, 30, 30, 0.9)',
                    titleColor: '#ffffff',
                    bodyColor: '#e0e0e0',
                    borderColor: '#3d3d3d',
                    borderWidth: 1,
                    padding: 12,
                    displayColors: true,
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed.y !== null) {
                                label += context.parsed.y + '%';
                            }
                            return label;
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: {
                        color: 'rgba(61, 61, 61, 0.3)'
                    },
                    ticks: {
                        color: '#c0c0c0'
                    }
                },
                y: {
                    beginAtZero: true,
                    max: 100,
                    stacked: true,
                    grid: {
                        color: 'rgba(61, 61, 61, 0.3)'
                    },
                    ticks: {
                        color: '#c0c0c0'
                    },
                    title: {
                        display: true,
                        text: 'Percentage (%)',
                        color: '#c0c0c0'
                    }
                }
            }
        };
        
        new Chart(knowledgeGapCtx, {
            type: 'bar',
            data: knowledgeGapData,
            options: knowledgeGapOptions
        });
    }
    
    // Create Booking Window Chart
    if (document.getElementById('bookingWindowChart')) {
        const bookingWindowCtx = document.getElementById('bookingWindowChart').getContext('2d');
        
        const bookingWindowData = {
            labels: ['Italy', 'UK', 'Germany', 'France', 'Qatar', 'UAE (Expat Arab)', 'UAE (Emirati)', 'KSA'],
            datasets: [
                {
                    label: 'Lead Time (Days)',
                    data: [74, 70, 62, 61, 30, 28, 24, 24],
                    backgroundColor: [
                        'rgba(0, 146, 70, 0.7)',    // Italy - Green
                        'rgba(1, 33, 105, 0.7)',    // UK - Blue
                        'rgba(51, 51, 51, 0.7)',    // Germany - Black
                        'rgba(0, 85, 164, 0.7)',    // France - Blue
                        'rgba(141, 27, 61, 0.7)',   // Qatar - Maroon
                        'rgba(26, 115, 232, 0.7)',  // UAE (Expat) - Blue
                        'rgba(26, 115, 232, 0.7)',  // UAE (Emirati) - Blue
                        'rgba(0, 108, 53, 0.7)'     // KSA - Green
                    ],
                    borderColor: [
                        'rgb(0, 146, 70)',
                        'rgb(1, 33, 105)',
                        'rgb(51, 51, 51)',
                        'rgb(0, 85, 164)',
                        'rgb(141, 27, 61)',
                        'rgb(26, 115, 232)',
                        'rgb(26, 115, 232)',
                        'rgb(0, 108, 53)'
                    ],
                    borderWidth: 1
                }
            ]
        };
        
        const bookingWindowOptions = {
            indexAxis: 'y',  // Horizontal bar chart
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Booking Lead Times by Market (Days Before Travel/Staycation)',
                    color: '#e0e0e0',
                    font: {
                        size: 16,
                        weight: 'bold'
                    },
                    padding: {
                        top: 10,
                        bottom: 20
                    }
                },
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(30, 30, 30, 0.9)',
                    titleColor: '#ffffff',
                    bodyColor: '#e0e0e0',
                    borderColor: '#3d3d3d',
                    borderWidth: 1,
                    padding: 12,
                    displayColors: true,
                    callbacks: {
                        label: function(context) {
                            return context.dataset.label + ': ' + context.parsed.x + ' days';
                        }
                    }
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(61, 61, 61, 0.3)'
                    },
                    ticks: {
                        color: '#c0c0c0'
                    },
                    title: {
                        display: true,
                        text: 'Days Before Travel/Staycation',
                        color: '#c0c0c0'
                    }
                },
                y: {
                    grid: {
                        color: 'rgba(61, 61, 61, 0.3)'
                    },
                    ticks: {
                        color: '#c0c0c0'
                    }
                }
            }
        };
        
        new Chart(bookingWindowCtx, {
            type: 'bar',
            data: bookingWindowData,
            options: bookingWindowOptions
        });
    }
    
    // Create Experience Preference Chart
    if (document.getElementById('experiencePreferenceChart')) {
        const experiencePreferenceCtx = document.getElementById('experiencePreferenceChart').getContext('2d');
        
        const experiencePreferenceData = {
            labels: [
                'Religious Experiences',
                'Charitable Activities',
                'Cultural Performances',
                'Culinary Experiences',
                'Lantern Displays',
                'Practical Information'
            ],
            datasets: [
                {
                    label: 'KSA',
                    data: [95, 94, 45, 38, 42, 35],
                    backgroundColor: 'rgba(0, 108, 53, 0.2)',
                    borderColor: 'rgb(0, 108, 53)',
                    borderWidth: 2,
                    pointBackgroundColor: 'rgb(0, 108, 53)'
                },
                {
                    label: 'UAE',
                    data: [92, 85, 82, 75, 68, 45],
                    backgroundColor: 'rgba(26, 115, 232, 0.2)',
                    borderColor: 'rgb(26, 115, 232)',
                    borderWidth: 2,
                    pointBackgroundColor: 'rgb(26, 115, 232)'
                },
                {
                    label: 'Qatar',
                    data: [90, 89, 52, 65, 48, 40],
                    backgroundColor: 'rgba(141, 27, 61, 0.2)',
                    borderColor: 'rgb(141, 27, 61)',
                    borderWidth: 2,
                    pointBackgroundColor: 'rgb(141, 27, 61)'
                },
                {
                    label: 'France',
                    data: [31, 28, 46, 42, 45, 52],
                    backgroundColor: 'rgba(0, 85, 164, 0.2)',
                    borderColor: 'rgb(0, 85, 164)',
                    borderWidth: 2,
                    pointBackgroundColor: 'rgb(0, 85, 164)'
                },
                {
                    label: 'Italy',
                    data: [25, 22, 38, 53, 32, 48],
                    backgroundColor: 'rgba(0, 146, 70, 0.2)',
                    borderColor: 'rgb(0, 146, 70)',
                    borderWidth: 2,
                    pointBackgroundColor: 'rgb(0, 146, 70)'
                },
                {
                    label: 'UK',
                    data: [18, 25, 57, 35, 58, 55],
                    backgroundColor: 'rgba(1, 33, 105, 0.2)',
                    borderColor: 'rgb(1, 33, 105)',
                    borderWidth: 2,
                    pointBackgroundColor: 'rgb(1, 33, 105)'
                },
                {
                    label: 'Germany',
                    data: [15, 18, 28, 32, 28, 65],
                    backgroundColor: 'rgba(51, 51, 51, 0.2)',
                    borderColor: 'rgb(51, 51, 51)',
                    borderWidth: 2,
                    pointBackgroundColor: 'rgb(51, 51, 51)'
                }
            ]
        };
        
        const experiencePreferenceOptions = {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        color: '#c0c0c0',
                        backdropColor: 'transparent',
                        showLabelBackdrop: false
                    },
                    grid: {
                        color: 'rgba(61, 61, 61, 0.3)'
                    },
                    angleLines: {
                        color: 'rgba(61, 61, 61, 0.3)'
                    },
                    pointLabels: {
                        color: '#e0e0e0',
                        font: {
                            size: 12
                        }
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Experience Preferences by Market (%)',
                    color: '#e0e0e0',
                    font: {
                        size: 16,
                        weight: 'bold'
                    },
                    padding: {
                        top: 10,
                        bottom: 20
                    }
                },
                legend: {
                    position: 'bottom',
                    labels: {
                        color: '#e0e0e0',
                        padding: 20,
                        usePointStyle: true,
                        pointStyle: 'circle'
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(30, 30, 30, 0.9)',
                    titleColor: '#ffffff',
                    bodyColor: '#e0e0e0',
                    borderColor: '#3d3d3d',
                    borderWidth: 1,
                    padding: 12,
                    displayColors: true,
                    callbacks: {
                        label: function(context) {
                            return context.dataset.label + ': ' + context.raw + '%';
                        }
                    }
                }
            }
        };
        
        new Chart(experiencePreferenceCtx, {
            type: 'radar',
            data: experiencePreferenceData,
            options: experiencePreferenceOptions
        });
    }
    
    // Create Misconception Chart
    if (document.getElementById('misconceptionChart')) {
        const misconceptionCtx = document.getElementById('misconceptionChart').getContext('2d');
        
        const misconceptionData = {
            labels: ['France', 'Italy', 'UK', 'Germany'],
            datasets: [
                {
                    label: 'Women\'s Participation Concerns',
                    data: [41, 39, 50, 39],
                    backgroundColor: 'rgba(66, 133, 244, 0.7)',
                    borderColor: 'rgb(66, 133, 244)',
                    borderWidth: 1
                },
                {
                    label: 'Dining Etiquette Concerns',
                    data: [36, 39, 56, 28],
                    backgroundColor: 'rgba(234, 67, 53, 0.7)',
                    borderColor: 'rgb(234, 67, 53)',
                    borderWidth: 1
                },
                {
                    label: 'Restaurant Availability Concerns',
                    data: [22, 25, 28, 29],
                    backgroundColor: 'rgba(251, 188, 4, 0.7)',
                    borderColor: 'rgb(251, 188, 4)',
                    borderWidth: 1
                },
                {
                    label: 'Cultural Sensitivity Concerns',
                    data: [32, 28, 51, 25],
                    backgroundColor: 'rgba(52, 168, 83, 0.7)',
                    borderColor: 'rgb(52, 168, 83)',
                    borderWidth: 1
                }
            ]
        };
        
        const misconceptionOptions = {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Misconception Analysis by European Market (%)',
                    color: '#e0e0e0',
                    font: {
                        size: 16,
                        weight: 'bold'
                    },
                    padding: {
                        top: 10,
                        bottom: 20
                    }
                },
                legend: {
                    position: 'bottom',
                    labels: {
                        color: '#e0e0e0',
                        padding: 20,
                        usePointStyle: true,
                        pointStyle: 'circle'
                    }
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                    backgroundColor: 'rgba(30, 30, 30, 0.9)',
                    titleColor: '#ffffff',
                    bodyColor: '#e0e0e0',
                    borderColor: '#3d3d3d',
                    borderWidth: 1,
                    padding: 12,
                    displayColors: true,
                    callbacks: {
                        label: function(context) {
                            return context.dataset.label + ': ' + context.raw + '%';
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: {
                        color: 'rgba(61, 61, 61, 0.3)'
                    },
                    ticks: {
                        color: '#c0c0c0'
                    }
                },
                y: {
                    beginAtZero: true,
                    max: 60,
                    grid: {
                        color: 'rgba(61, 61, 61, 0.3)'
                    },
                    ticks: {
                        color: '#c0c0c0'
                    },
                    title: {
                        display: true,
                        text: 'Percentage (%)',
                        color: '#c0c0c0'
                    }
                }
            }
        };
        
        new Chart(misconceptionCtx, {
            type: 'bar',
            data: misconceptionData,
            options: misconceptionOptions
        });
    }
});
