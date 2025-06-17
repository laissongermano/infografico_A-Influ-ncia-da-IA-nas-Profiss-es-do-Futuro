document.addEventListener('DOMContentLoaded', () => {
    const brandColors = {
        deepBlue: '#004AAD',
        brightBlue: '#008DDA',
        cyan: '#41C9E2',
        lightCyan: '#ACE2E1',
        darkText: '#1a202c',
    };

    const wrapLabel = (str, maxWidth) => {
        if (str.length <= maxWidth) {
            return str;
        }
        const words = str.split(' ');
        let lines = [];
        let currentLine = words[0];
        for (let i = 1; i < words.length; i++) {
            if (currentLine.length + words[i].length + 1 < maxWidth) {
                currentLine += ' ' + words[i];
            } else {
                lines.push(currentLine);
                currentLine = words[i];
            }
        }
        lines.push(currentLine);
        return lines;
    };
    
    const tooltipTitleCallback = (tooltipItems) => {
        const item = tooltipItems[0];
        let label = item.chart.data.labels[item.dataIndex];
        if (Array.isArray(label)) {
          return label.join(' ');
        } else {
          return label;
        }
    };
    
    const defaultChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                labels: {
                    color: brandColors.darkText,
                    font: {
                        size: 14,
                        family: 'Inter'
                    }
                }
            },
            tooltip: {
                callbacks: {
                    title: tooltipTitleCallback
                },
                titleFont: {
                    size: 14,
                    family: 'Inter'
                },
                bodyFont: {
                    size: 12,
                    family: 'Inter'
                },
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                titleColor: '#ffffff',
                bodyColor: '#ffffff'
            }
        }
    };

    window.chartConfig = {
        brandColors,
        wrapLabel,
        defaultChartOptions
    };
});
